import { Nav } from "@/components/layout";
import { ModalBackdrop } from "@/components/ui";
import { Hero } from "@/views";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col gap-3 overflow-hidden px-[7.5%] py-[2.5%] md:min-h-[94svh] md:overflow-visible">
            <Nav />
            <Hero />
            <ModalBackdrop />
        </main>
    );
}
