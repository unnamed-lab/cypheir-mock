import Image from "next/image";
import Link from "next/link";
import {
    DesignConfig,
    DesignPreview,
    DesignHeading,
} from "@/components/design";
import { ChevronIcon } from "@/icons";

export default function HeroDesign() {
    return (
        <div className="relative w-full">
            <DesignHeading>Design your Mock</DesignHeading>
            <section className="my-6 flex h-full min-h-screen w-full flex-col gap-5 lg:flex-row">
                <DesignConfig className="w-full rounded-md px-6 py-3 shadow-md outline outline-1 outline-zinc-200 lg:w-6/12" />
                <DesignPreview className="w-full rounded-md px-6 py-3 shadow-md outline outline-1 outline-zinc-200 lg:w-6/12" />
            </section>
            <div className="absolute left-[50%] top-[50%] hidden [transform:translate(-50%,-50%)] lg:block">
                <ChevronIcon
                    width={50}
                    height={50}
                    pathFill="#1ca7ec"
                    className="[filter:drop-shadow(1px_1px_0.5px_#c1c1c1aa)] lg:rotate-90"
                />
            </div>
        </div>
    );
}
