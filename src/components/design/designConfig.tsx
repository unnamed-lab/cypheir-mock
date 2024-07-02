import { cn } from "@/lib/utils";
import React from "react";
import { Combobox } from "../ui/combobox";
import statusCodes from "@/lib/statusCodes";

export default function DesignConfig({ className }: { className?: string }) {
    return (
        <section className={cn("", className)}>
            <div className="mb-5 flex flex-wrap gap-1">
                <h2 className="w-full text-xl font-semibold capitalize">
                    Configure your Mock endpoint.
                </h2>
                <p className="w-9/12 text-xs font-light text-zinc-500">
                    You can carefully configure how your mock api endpoint would
                    be built and formatted.
                </p>
            </div>
            <div className="my-2">
                <h3 className="mb-2 w-full font-medium uppercase">
                    HTTP Response Status
                </h3>
                <Combobox
                    array={statusCodes}
                    placeholder="HTTP Status"
                    width={350}
                />
            </div>
        </section>
    );
}
