import { Brand } from "@/components/ui";

export default function Loading() {
    return (
        <main className="flex h-screen w-full items-center justify-center bg-white">
            <Brand className="animate-pulse" />
        </main>
    );
}
