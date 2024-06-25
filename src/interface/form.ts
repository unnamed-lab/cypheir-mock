import { MouseEventHandler } from "react";

export interface ButtonProps {
    className?: string;
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    handler?: MouseEventHandler<HTMLButtonElement>;
}
