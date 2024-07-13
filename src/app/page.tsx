import React from "react";
import { Hero } from "@/views";

export default async function Home() {
    return (
        <main className="mb-4 mt-4 flex min-h-[70svh] flex-col gap-3 overflow-hidden px-[7.5%] md:min-h-[75svh] md:overflow-visible">
            <Hero />
        </main>
    );
}
