"use server";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "./auth";

export default async function loginIsRequiredServer() {
    const session = await getServerSession(authConfig);
    if (!session) return redirect("/");
}
