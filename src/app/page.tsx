import { Nav } from "@/components/layout";
import { ModalBackdrop } from "@/components/ui";
import { authConfig } from "@/lib/auth";
import { Hero } from "@/views";
import { getServerSession } from "next-auth";

export default async function Home() {
    // const session = await getServerSession(authConfig); // to get the session cookie
    // session?.user?.name
    return (
        <main className="mb-5 mt-[2.5%] flex min-h-screen flex-col gap-3 overflow-hidden px-[7.5%] md:min-h-[80svh] md:overflow-visible">
            <Nav />
            <Hero />
        </main>
    );
}
