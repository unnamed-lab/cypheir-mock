"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
// import { Button } from "../form";
import { Button } from "./button";
import { ComboBoxProps } from "@/interface/form";

export function Combobox({ array, width = 200, placeholder }: ComboBoxProps) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    style={
                        {
                            "--custom-width": `${width}px`,
                        } as React.CSSProperties
                    }
                    className="w-[var(--custom-width)] !min-w-[200px] max-w-full justify-between"
                >
                    {value
                        ? array.find((array) => array.value === value)?.label
                        : placeholder + "..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                style={
                    { "--custom-width": `${width}px` } as React.CSSProperties
                }
                className="w-[var(--custom-width)] !min-w-[200px] max-w-full bg-slate-50 p-0"
            >
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandList>
                        <CommandEmpty>No item found.</CommandEmpty>
                        <CommandGroup>
                            {array.map((array) => (
                                <CommandItem
                                    key={array.value}
                                    value={array.value}
                                    onSelect={(currentValue) => {
                                        setValue(
                                            currentValue === value
                                                ? ""
                                                : currentValue
                                        );
                                        setOpen(false);
                                    }}
                                    className="ease border-1 cursor-pointer border border-transparent font-sans transition-all hover:border-b hover:border-t hover:border-b-slate-300 hover:border-t-slate-300"
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === array.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                    <span className="mr-1 font-bold text-primary">
                                        {array.value}
                                    </span>{" "}
                                    • {array.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
