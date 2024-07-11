import GithubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authConfig: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
};
