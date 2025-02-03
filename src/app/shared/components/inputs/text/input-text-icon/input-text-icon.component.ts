import { Component, ComponentRef, computed, effect, EffectRef, forwardRef, input, InputSignal, Signal, Type, viewChild, ViewContainerRef } from '@angular/core';
import { InputTextIconComponentInterface } from '../../../../interfaces/input-component.interace';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ValidatorService } from '../../../../validations/validator.service';
import { CommonModule } from '@angular/common';
import { BaseIconComponent } from '../../../../icons/base-icon/base-icon.component';
import { DefaultControlValueAccessorDirective } from '../../../../directives/control-value-accessor/default-control-value-accessor.directive';
import { InputTypes } from '../../../../types/InputTypes.type';

@Component({
  selector: 'input-text-icon',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-text-icon.component.html',
  styleUrl: './input-text-icon.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextIconComponent),
      multi: true,
    },
  ],
})
export class InputTextIconComponent<T, I extends BaseIconComponent> extends DefaultControlValueAccessorDirective<T> implements InputTextIconComponentInterface<I> {

  // Inputs
  public inputType: InputSignal<InputTypes> = input.required<InputTypes>();
  public id: InputSignal<string> = input.required<string>();
  public name: InputSignal<string> = input.required<string>();
  public label: InputSignal<string> = input.required<string>();
  public placeHolder: InputSignal<string> = input<string>('');
  public icon: InputSignal<Type<I>> = input.required<Type<I>>();
  public successMessage: InputSignal<string> = input<string>('');

  // Properties
  private iconContainer: Signal<ViewContainerRef | undefined> = viewChild('icon', { read: ViewContainerRef });
  private iconRef?: ComponentRef<I>;

  public errorMessage: Signal<string | undefined> = computed(() => {
    if (this.isValidField()) return '';
    const firstKeyError: string = ValidatorService.getFirstFieldError(this.control)!;
    return this.control!.getError(firstKeyError);
  });

  public iconClass?: EffectRef = effect(() => {
    if (this.isValidField() === true) {
      this.iconColor = 'text-green-500 dark:text-green-400';
    } else if (this.isValidField() === false) {
      this.iconColor = 'text-red-500 dark:text-red-400'
    } else {
      this.iconColor = 'text-gray-500 dark:text-gray-400'
    }
  }, {manualCleanup: true});

  public override ngOnInit() {
    super.ngOnInit();
    this.iconRef = this.iconContainer()?.createComponent(this.icon());    
  }

  private set iconColor(colorClass: string) {
    this.iconRef?.setInput('colorClass', colorClass);
  }



}
