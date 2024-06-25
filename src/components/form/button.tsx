import { ButtonProps } from "@/interface/form";
import { cn } from "@/lib/utils";

export default function Button({
    className,
    handler,
    type,
    children,
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={handler}
            className={cn(
                "flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-black transition-all ease-in hover:bg-slate-50",
                className
            )}
        >
            {children}
        </button>
    );
}
