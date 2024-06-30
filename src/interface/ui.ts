import { Session } from "next-auth";
import { MouseEventHandler } from "react";

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
