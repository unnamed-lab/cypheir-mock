import { DesignConfig, DesignHeading } from "@/components/design";

export default function HeroDesign() {
    return (
        <div>
            <DesignHeading>Design your Mock</DesignHeading>
            <section className="my-6 flex h-full min-h-screen w-full flex-col flex-wrap gap-3 lg:flex-row">
                <DesignConfig className="w-full rounded-md p-3 shadow-md outline outline-1 outline-zinc-200 lg:w-6/12" />
            </section>
        </div>
    );
}
