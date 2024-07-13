import React, {
    AriaRole,
    ChangeEventHandler,
    Dispatch,
    HTMLInputAutoCompleteAttribute,
    MouseEventHandler,
    SetStateAction,
} from "react";

export interface ButtonProps {
    expandable?: boolean;
    role?: AriaRole;
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
    required?: boolean;
}

export interface ModalFormProps {
    type?: "login" | "register";
    OAuth?: boolean;
    state?: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
}

export interface LoginButtonProps {
    url: string;
    handler?: MouseEventHandler<HTMLButtonElement>;
}

export interface ComboBoxProps {
    defaultValue?: string;
    name: string;
    width?: number;
    array: { value: string; label: string }[];
    placeholder: string;
    onChange: React.Dispatch<any>;
}
