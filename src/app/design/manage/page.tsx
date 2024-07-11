import { LoginIsRequiredServer } from "@/lib/loginRequiredServer";
import { ManageMock } from "@/views";

export default async function ManageDashboard() {
    await LoginIsRequiredServer("/design/manage");

    return (
        <main className="mb-4 mt-4 flex min-h-[70svh] flex-col gap-3 overflow-hidden font-sans md:min-h-[75svh] md:overflow-visible lg:px-[7.5%]">
            <ManageMock />
        </main>
    );
}
