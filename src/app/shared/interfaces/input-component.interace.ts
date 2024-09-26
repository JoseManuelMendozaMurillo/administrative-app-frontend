import { InputSignal, Type } from "@angular/core";
import { BaseIconComponent } from "../icons/base-icon/base-icon.component";
import { InputTypes } from "../types/InputTypes.type";

export interface InputComponentProperties {
    inputType: InputSignal<InputTypes>;
    id: InputSignal<string>;
    name: InputSignal<string>;
    label: InputSignal<string>;
    placeHolder: InputSignal<string>;
}

export interface InputTextIconComponent extends InputComponentProperties {
    icon: InputSignal<Type<BaseIconComponent>>;
}