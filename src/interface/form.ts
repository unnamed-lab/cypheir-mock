import {
    ChangeEventHandler,
    HTMLInputAutoCompleteAttribute,
    MouseEventHandler,
} from "react";

export interface ButtonProps {
    className?: string;
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    handler?: MouseEventHandler<HTMLButtonElement>;
}

export interface InputProps {
    value?: string | number | readonly string[];
    type?: "text" | "url" | "email" | "number" | "password" | "tel";
    handler?: ChangeEventHandler<HTMLInputElement>;
    autocomplete?: HTMLInputAutoCompleteAttribute;
    disabled?: boolean;
    className?: string;
    ariaAutoComplete?: "list" | "none" | "inline" | "both";
    placeholder?: string;
    name?: string;
    id?: string;
    label?: string;
}

export interface ModalFormProps {
    type?: "login" | "register";
    OAuth?: boolean;
}
