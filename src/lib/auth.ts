import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { getServerSession, NextAuthOptions } from "next-auth";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const authConfig: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
    ],
};

export async function loginIsRequiredServer() {
    const session = await getServerSession(authConfig);
    if (!session) return redirect("/");
}

export function loginIsRequiredClient() {
    if (typeof window !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const session = useSession();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const router = useRouter();
        if (!session) router.push("/");
    }
}
