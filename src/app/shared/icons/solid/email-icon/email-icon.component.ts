import { Component, input, InputSignal, NO_ERRORS_SCHEMA, OnInit, Signal, signal } from '@angular/core';
import { BaseIconComponent } from '../../base-icon/base-icon.component';
import { Path } from '../../../interfaces/icon-component.interface';

@Component({
  selector: 'solid-email-icon',
  standalone: true,
  imports: [BaseIconComponent],
  template: `
      <base-svg-icon [paths]="this.emailIcon()"/>
  `,
  styles: ``,
})
export class EmailIconComponent extends BaseIconComponent{

  public emailIcon: Signal<Path[]> = signal([
    this.buildPath('M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z'),
    this.buildPath('m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z'),
  ]);

} 
