import { Nav } from "@/components/layout";
import { ModalBackdrop } from "@/components/ui";
import { Hero } from "@/views";

export default function Home() {
    return (
        <main className="mb-5 mt-[2.5%] flex min-h-screen flex-col gap-3 overflow-hidden px-[7.5%] md:min-h-[80svh] md:overflow-visible">
            <Nav />
            <Hero />
            <ModalBackdrop />
        </main>
    );
}
