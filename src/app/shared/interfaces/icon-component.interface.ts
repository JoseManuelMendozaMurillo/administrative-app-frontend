import { InputSignal } from "@angular/core";

export interface IconComponent {
    class: InputSignal<string>;
    viewBox: InputSignal<string>;
    fill: InputSignal<string>;
    strokeWidth: InputSignal<string>;
    stroke: InputSignal<string>;
    paths: InputSignal<Path[]>;
}

export interface Path{
    d: string;
    fillRule: '' | 'evenodd';
    clipRule: '' | 'evenodd';
}