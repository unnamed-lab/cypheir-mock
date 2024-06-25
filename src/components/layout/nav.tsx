"use client";
import { Brand } from "../ui";
import { GitHubIcon } from "@/icons";
import { Button } from "../form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
    return (
        <div className="flex w-full items-center justify-between gap-2">
            <Brand />
            <NavMenu />
        </div>
    );
}

function NavMenu() {
    const [isLogged, setLog] = useState<boolean>(true);
    return (
        <div className="hidden items-center gap-2 lg:flex">
            <GitHubRedirect />
            {isLogged ? (
                <div className="flex items-center gap-2">
                    <LoginButton url="/" />
                    <RegisterButton url="/" />
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <AccountButton url="/" />
                    <CreateButton url="/" />
                </div>
            )}
        </div>
    );
}

function GitHubRedirect() {
    const router = useRouter();
    return (
        <>
            <Link href="https://github.com/unnamed-lab/cypheir-mock">
                <Button
                    type="button"
                    className="hover:bg-white hover:outline hover:outline-1 hover:outline-black"
                >
                    <GitHubIcon width={20} height={20} />
                    Star on GitHub
                </Button>
            </Link>
        </>
    );
}

function LoginButton({ url }: { url: string }) {
    const router = useRouter();
    return (
        <>
            <Button
                type="button"
                className="bg-white text-zinc-900 outline outline-1 outline-zinc-900 hover:bg-zinc-900 hover:text-white"
                handler={() => router.push(url)}
            >
                Login
            </Button>
        </>
    );
}

function RegisterButton({ url }: { url: string }) {
    const router = useRouter();
    return (
        <>
            <Button
                type="button"
                className="bg-zinc-900 text-white hover:bg-primary"
                handler={() => router.push(url)}
            >
                Register
            </Button>
        </>
    );
}

function AccountButton({ url }: { url: string }) {
    const router = useRouter();
    return (
        <>
            <Button
                type="button"
                className="bg-zinc-900 text-white hover:bg-primary"
                handler={() => router.push(url)}
            >
                Manage Mocks
            </Button>
        </>
    );
}

function CreateButton({ url }: { url: string }) {
    const router = useRouter();
    return (
        <>
            <Button
                type="button"
                className="bg-zinc-900 text-white hover:bg-primary"
                handler={() => router.push(url)}
            >
                Create Mock
            </Button>
        </>
    );
}
