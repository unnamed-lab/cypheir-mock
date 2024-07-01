import { getServerSession } from "next-auth";
import { redirect, useRouter } from "next/navigation";
import { authConfig } from "./auth";

export async function LoginIsRequiredServer() {
    const session = await getServerSession(authConfig);
    if (!session) return redirect("/");
}
