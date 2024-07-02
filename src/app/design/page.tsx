import { LoginIsRequiredServer } from "@/lib/loginRequiredServer";
import { HeroDesign } from "@/views";

export default async function Design() {
    await LoginIsRequiredServer();
    return (
        <main className="mb-4 mt-4 flex min-h-[70svh] flex-col gap-3 overflow-hidden px-[7.5%] font-sans md:min-h-[75svh] md:overflow-visible">
            <HeroDesign />
        </main>
    );
}
