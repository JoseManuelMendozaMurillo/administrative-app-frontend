import { InputSignal } from "@angular/core";

export interface BaseIconComponentInterface {
    viewBox: InputSignal<string>;
    fill: InputSignal<string>;
    strokeWidth: InputSignal<string>;
    stroke: InputSignal<string>;
    paths: InputSignal<Path[]>;
}

export interface IconComponentInterface {
    class: InputSignal<string>;
    colorClass: InputSignal<string>;
}

export interface Path{
    d: string;
    fillRule: '' | 'evenodd';
    clipRule: '' | 'evenodd';
}