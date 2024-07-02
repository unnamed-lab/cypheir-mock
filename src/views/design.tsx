import { DesignConfig, DesignHeading } from "@/components/design";

export default function HeroDesign() {
    return (
        <div>
            <DesignHeading>Design your Mock</DesignHeading>
            <section className="my-6 flex h-full w-full flex-col flex-wrap gap-3 lg:flex-row min-h-screen">
                <DesignConfig className="w-full rounded-md shadow-md outline outline-1 outline-zinc-200 lg:w-6/12 p-3" />
            </section>
        </div>
    );
}
