import { Nav } from "@/components/layout";
import { authConfig } from "@/lib/auth";
import { getUserData } from "@/lib/fetchUser";
import { Hero } from "@/views";
import { getServerSession } from "next-auth";

export default async function Home() {
    // To retrieve the session cookie
    const session = await getServerSession(authConfig);

    if (session?.user) {
        const { name, email } = session?.user;
        if (typeof name === "string" && typeof email === "string") {
            const data = await getUserData(name, email);
            console.log(data);
        }
    }
    // console.log(session?.user?.name);
    // session?.user?.name
    return (
        <main className="mb-5 mt-[5%] flex min-h-[70svh] flex-col gap-3 overflow-hidden px-[7.5%] md:min-h-[80svh] md:overflow-visible lg:mt-[2.5%]">
            <Nav session={session} />
            <Hero />
        </main>
    );
}
