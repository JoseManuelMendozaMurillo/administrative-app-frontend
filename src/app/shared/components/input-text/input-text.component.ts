import { Component, computed, forwardRef, input, InputSignal , signal, Signal, Type, WritableSignal } from '@angular/core';
import { InputTextIconComponent } from '../../interfaces/input-component.interace';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ValidatorService } from '../../validations/validator.service';
import { CommonModule } from '@angular/common';
import { BaseIconComponent } from '../../icons/base-icon/base-icon.component';
import { DefaultControlValueAccessorDirective } from '../../directives/control-value-accessor/default-control-value-accessor.directive';
import { InputTypes } from '../../types/InputTypes.type';

@Component({
  selector: 'input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent<T> extends DefaultControlValueAccessorDirective<T> implements InputTextIconComponent {

  // Inputs
  public inputType: InputSignal<InputTypes> = input.required<InputTypes>();
  public id: InputSignal<string> = input.required<string>();
  public name: InputSignal<string> = input.required<string>();
  public label: InputSignal<string> = input.required<string>();
  public placeHolder: InputSignal<string> = input<string>('');
  public icon: InputSignal<Type<BaseIconComponent>> = input.required<Type<BaseIconComponent>>();
  public successMessage: InputSignal<string> = input<string>('');

  // Properties
  public errorMessage: Signal<string|undefined> = computed(() => {
    if(this.isValidField()) return '';
    const firstKeyError: string = ValidatorService.getFirstFieldError(this.control)!;
    return this.control!.getError(firstKeyError);
  });

  public iconClass: Signal<string> = computed(() => {
    console.log('err');
    if (this.isValidField()) {
      return 'text-green-500';
    } else if (!this.isValidField()) {
      return 'text-red-500';
    } else {
      return 'text-gray-500';  // Default icon color
    }
  });

}
