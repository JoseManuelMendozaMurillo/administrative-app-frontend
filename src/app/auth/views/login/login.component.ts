import { Component, inject, Type } from '@angular/core';
import { InputTextIconComponent } from '../../../shared/components/inputs/text/input-text-icon/input-text-icon.component';
import { EmailIconComponent } from '../../../shared/icons/solid/email-icon/email-icon.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LockClosedIconComponent } from '../../../shared/icons/solid/lock-closed-icon/lock-closed-icon.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextIconComponent, EmailIconComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Services
  private fb: FormBuilder = inject(FormBuilder);

  // Properties
  public emailIcon: Type<EmailIconComponent> = EmailIconComponent;
  public lockClosedSolidIcon: Type<LockClosedIconComponent> = LockClosedIconComponent;


  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  // getters
  public get controlEmail(): FormControl{
    return this.form.get('email') as FormControl;
  }

  public get controlPassword(): FormControl{
    return this.form.get('password') as FormControl;
  }


}
