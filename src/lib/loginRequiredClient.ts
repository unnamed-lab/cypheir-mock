import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginIsRequiredClient() {
    const session = useSession();
    const router = useRouter();
    if (typeof window !== "undefined") {
        if (!session) router.push("/");
    }
}
