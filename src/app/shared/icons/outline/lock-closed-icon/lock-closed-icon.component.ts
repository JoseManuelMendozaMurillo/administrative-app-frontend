import { Component, Signal, signal } from '@angular/core';
import { BaseIconComponent } from '../../base-icon/base-icon.component';
import { Path } from '../../../interfaces/icon-component.interface';

@Component({
  selector: 'outline-lock-closed-icon',
  standalone: true,
  imports: [BaseIconComponent],
  template: `
    <base-svg-icon  
      [paths]="this.lockClosedIcon()" 
      [class]="this.customClass()" 
      [viewBox]="this.customViewBox()"
      [fill]="this.customFill()"
      [stroke]="this.customStroke()"
      [strokeWidth]="this.customStrokeWidth()"
    />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
</svg>

  `,
  styles: ``
})
export class LockClosedIconComponent extends BaseIconComponent {
  public lockClosedIcon: Signal<Path[]> = signal([
    this.buildPath('M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z')
  ]);

  public customClass: Signal<string> = signal('size-5');
  public customViewBox: Signal<string> = signal('0 0 24 24');
  public customFill: Signal<string> = signal('none');
  public customStrokeWidth: Signal<string> = signal('1.5');
  public customStroke: Signal<string> = signal('currentColor');
}
