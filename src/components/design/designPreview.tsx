import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function DesignPreview({ className }: { className?: string }) {
    return (
        <section className={cn("flex flex-col gap-4", className)}>
            <div className="my-2 h-full w-full rounded-lg bg-zinc-200 p-4 text-sm font-light">
                Design Preview
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
