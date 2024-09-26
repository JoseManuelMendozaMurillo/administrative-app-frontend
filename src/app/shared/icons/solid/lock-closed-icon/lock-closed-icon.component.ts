import { Component, Signal, signal } from '@angular/core';
import { BaseIconComponent } from '../../base-icon/base-icon.component';
import { Path } from '../../../interfaces/icon-component.interface';

@Component({
  selector: 'solid-lock-closed-icon',
  standalone: true,
  imports: [BaseIconComponent],
  template: `
      <base-svg-icon [paths]="this.lockClosedIcon()" [class]="this.customClass()" [viewBox]="this.customViewBox()"/>
  `,
  styles: ``
})
export class LockClosedIconComponent extends BaseIconComponent {

  public lockClosedIcon: Signal<Path[]> = signal([
    this.buildPath(
      'M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z',
      'evenodd',
      'evenodd',
    )
  ]);

  public customClass: Signal<string> = signal('size-5 text-gray-500 dark:text-gray-400');
  public customViewBox: Signal<string> = signal('0 0 24 24');
}
