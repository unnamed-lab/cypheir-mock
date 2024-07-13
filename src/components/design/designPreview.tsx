import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function DesignPreview({
    className,
    designData,
}: Readonly<{
    className?: string;
    designData: any;
}>) {
    const formatPreview = (body: string) => {
        return body
            .slice(1, -1)
            .split(",")
            .map((el, index) => {
                const key = "item" + index;
                return <p key={key}>{el}</p>;
            });
    };

    return (
        <section className={cn("flex flex-col gap-4", className)}>
            <div className="pointer-events-none relative my-2 h-full min-h-[50svh] w-full select-none overflow-auto rounded-lg bg-zinc-200 p-4 text-sm font-light">
                {"{"}
                {formatPreview(JSON.stringify(designData))}
                {"}"}
            </div>
            <Button
                type="button"
                className="mt-auto bg-primary font-semibold capitalize text-white transition-colors ease-in hover:bg-zinc-900"
            >
                Generate API Mock
            </Button>
        </section>
    );
}
