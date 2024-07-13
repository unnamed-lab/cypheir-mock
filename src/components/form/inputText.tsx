"use client";
import React from "react";
import { InputProps } from "@/interface/form";
import { cn } from "@/lib/utils";

export default function InputText({
    label,
    name,
    placeholder,
    className,
    disabled,
    autocomplete,
    ariaAutoComplete,
    id,
    handler,
    type = "text",
    value,
    required = false,
}: Readonly<InputProps>) {
    const identifier = id && typeof id !== "undefined" ? id : `${name}Id`;
    return (
        <>
            {label && (
                <label htmlFor={identifier} className="mb-3 text-sm">
                    {label}
                </label>
            )}
            <input
                type={type}
                onChange={handler}
                value={value}
                autoComplete={autocomplete}
                aria-autocomplete={ariaAutoComplete}
                disabled={disabled}
                className={cn(
                    "my-2 w-full rounded-md px-3 py-2 text-sm outline outline-1 outline-slate-400 hover:outline-blue-200 focus-visible:outline-primary active:outline-primary",
                    className
                )}
                placeholder={placeholder}
                aria-placeholder={placeholder}
                name={name}
                aria-label={name}
                id={identifier}
                required={required}
            />
        </>
    );
}
