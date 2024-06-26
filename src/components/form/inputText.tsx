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
}: InputProps) {
    const identifier = id ? id : `${name}Id`;
    return (
        <>
            {label && <label htmlFor={identifier}>{label}</label>}
            <input
                type={type}
                onChange={handler}
                value={value}
                autoComplete={autocomplete}
                aria-autocomplete={ariaAutoComplete}
                disabled={disabled}
                className={cn("", className)}
                placeholder={placeholder}
                aria-placeholder={placeholder}
                name={name}
                aria-label={name}
                id={identifier}
            />
        </>
    );
}
