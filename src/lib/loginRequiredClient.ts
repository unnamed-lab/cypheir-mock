"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LoginIsRequiredClient() {
    const session = useSession();
    const router = useRouter();
    if (typeof window !== "undefined") {
        if (!session) router.push("/");
    }
}
