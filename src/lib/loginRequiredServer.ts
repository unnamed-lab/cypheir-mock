import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "./auth";

export async function LoginIsRequiredServer(redirectUrl: string) {
    if (process.env.PROJECT_STATUS !== "development") {
        const session = await getServerSession(authConfig);
        if (!session) return redirect(`/?redirect=${redirectUrl}`);
    }
}
