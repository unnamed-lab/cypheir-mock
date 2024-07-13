import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { IComboArray } from "./utils";

export interface BlockProps {
    image: string;
    title: string;
    desc: string;
    message?: string;
    backLink?: boolean;
}

export type MetadataProps = {
    params: { id: string };
};

export type GlobalErrorProp = {
    error: Error & { digest?: string };
    reset: () => void;
};

export interface IconProps {
    width?: number;
    height?: number;
    className?: string;
    pathFill?: string;
}

export interface BackdropProps {
    state?: boolean;
    handler?: MouseEventHandler<HTMLDivElement>;
}
export interface ConfigDropdownProps {
    defaultValue?: string;
    name: string;
    title: string;
    required?: boolean;
    info?: string;
    list: Array<IComboArray>;
    placeholder: string;
    width?: number;
    onChange: React.Dispatch<any>;
}

export interface ConfigTextareaProps {
    name?: string;
    title: string;
    required?: boolean;
    info?: string;
    placeholder: string;
    width?: number;
    height?: number;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export interface SessionUser {
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

export interface SideBarNavigationItems {
    title: string;
    url: string;
    icon: any;
    state?: "active" | "inactive";
}

export interface HomeStateProps {
    setState: Dispatch<SetStateAction<boolean>>;
}

export interface NavButtonProps {
    name: string;
    url: string;
    className: string;
}
