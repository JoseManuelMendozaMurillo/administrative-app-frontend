import { Component, input, InputSignal } from '@angular/core';
import { IconComponent, Path } from '../../interfaces/icon-component.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'base-svg-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        [attr.fill]="this.fill()" 
        [attr.viewBox]="this.viewBox()"
        [attr.stroke-width]="this.strokeWidth()"
        [attr.stroke]="this.stroke()"
        [class]="this.class()"
        >
        @for (path of this.paths(); track $index) {
          <path 
            [attr.fill-rule]="path.fillRule" 
            [attr.clip-rule]="path.clipRule" 
            [attr.d]="path.d"
            >
          </path>
        }
    </svg>


  `,
  styles: ``,
})
export class BaseIconComponent implements IconComponent {
  
  // Inputs
  public paths: InputSignal<Path[]> = input<Path[]>([]);
  public class: InputSignal<string> = input<string>('w-4 h-4 text-gray-500 dark:text-gray-400');
  public viewBox: InputSignal<string> = input<string>('0 0 20 16');
  public fill: InputSignal<string> = input<string>('currentColor');
  public strokeWidth: InputSignal<string> = input<string>('');
  public stroke: InputSignal<string> = input<string>('');

  public buildPath(
    d: string,
    fillRule: '' | 'evenodd' = '',
    clipRule: '' | 'evenodd' = '',
  ): Path {
    return {d, fillRule, clipRule}
  }
}