import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { NextAuthOptions } from "next-auth";

export const authConfig: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        // EmailProvider({
        //     server: {
        //         host: process.env.EMAIL_SERVER_HOST as string,
        //         port: process.env.EMAIL_SERVER_PORT as string,
        //         auth: {
        //             user: process.env.EMAIL_SERVER_USER as string,
        //             pass: process.env.EMAIL_SERVER_PASSWORD as string,
        //         },
        //     },
        //     from: process.env.EMAIL_FROM as string,
        // }),
    ],
};
