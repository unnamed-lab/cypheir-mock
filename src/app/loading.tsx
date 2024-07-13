import React from "react";
import { Brand } from "@/components/ui";

export default function Loading() {
    return (
        <main className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-white">
            <Brand className="animate-pulse" />
        </main>
    );
}
