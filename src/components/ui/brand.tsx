import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Brand({ className }: { className?: string }) {
    return (
        <Link
            href={"/"}
            className={cn(
                "relative right-auto mb-3 flex h-auto items-center gap-1",
                className
            )}
        >
            <Image
                priority
                className="h-auto w-24"
                src="/logo.svg"
                alt="alt"
                width={100}
                height={40}
            />
            <span className="mr-3 mt-2 hidden text-base font-semibold">
                Mock
            </span>
            <span className="before:[border-right6px_solid_#1ca7ec] relative my-auto ml-3 rounded-md border-b border-l-0 bg-primary px-3 py-1 text-xs font-bold uppercase text-white before:absolute before:-left-1 before:top-[50%] before:block before:h-3 before:w-3 before:content-[''] before:[border-bottom:6px_solid_transparent] before:[border-right:6px_solid_#1ca7ec] before:[border-top:6px_solid_transparent] before:[transform:translate(-50%,-50%)]">
                Beta
            </span>
        </Link>
    );
}
