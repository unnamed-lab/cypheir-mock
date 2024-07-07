import { Session } from "next-auth";
import { Dispatch, FC, MouseEventHandler, SetStateAction } from "react";
import { IComboArray } from "./utils";
import { LucideProps } from "lucide-react";

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

export interface PageSession {
    session: Session | null;
}

export interface ConfigDropdownProps {
    title: string;
    required?: boolean;
    info?: string;
    list: Array<IComboArray>;
    placeholder: string;
    width?: number;
}

export interface ConfigTextareaProps {
    title: string;
    required?: boolean;
    info?: string;
    placeholder: string;
    width?: number;
    height?: number;
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
