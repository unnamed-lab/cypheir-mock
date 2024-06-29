import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";

export const authConfig: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        // EmailProvider({
        //     server: process.env.EMAIL_SERVER,
        //     from: process.env.EMAIL_FROM,
        // }),
    ],
};
