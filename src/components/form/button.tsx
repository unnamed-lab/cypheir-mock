import React from "react";
import { ButtonProps } from "@/interface/form";
import { cn } from "@/lib/utils";

export default function Button(props: any) {
    const {
        role,
        expandable,
        className,
        handler,
        type = "button",
        children,
    }: ButtonProps = props;
    return (
        <button
            role={role}
            type={type}
            aria-expanded={expandable}
            onClick={handler}
            className={cn(
                "flex select-none items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-center font-sans text-sm font-semibold text-black transition-all ease-in hover:bg-slate-50",
                className
            )}
        >
            {children}
        </button>
    );
}
