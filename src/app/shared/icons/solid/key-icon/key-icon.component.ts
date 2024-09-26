import { Component, InputSignal, signal, Signal } from '@angular/core';
import { BaseIconComponent } from '../../base-icon/base-icon.component';
import { Path } from '../../../interfaces/icon-component.interface';

@Component({
  selector: 'solid-key-icon',
  standalone: true,
  imports: [BaseIconComponent],
  template: `
    <base-svg-icon [paths]="this.keyIcon()" [viewBox]="this.customViewBox()" [class]="this.customClass()"/>
  `,
  styles: ``
})
export class KeyIconComponent extends BaseIconComponent {
  public keyIcon: Signal<Path[]> = signal([
    this.buildPath('M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2')
  ]);
  
  public customClass: Signal<string> = signal('w-5 h-5 text-gray-500 dark:text-gray-400');
  public customViewBox: Signal<string> = signal('0 0 16 16');
}
