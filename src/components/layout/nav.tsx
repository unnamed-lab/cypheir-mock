"use client";
import { Brand } from "../ui";
import { GitHubIcon } from "@/icons";
import { Button } from "../form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { User } from "@/interface/ui";

export default function Nav({ user }: { user?: User }) {
    return (
        <nav className="flex w-full items-center justify-between gap-2">
            <Brand />
            <NavMenu user={user} />
        </nav>
    );
}

function NavMenu({ user }: { user?: User }) {
    return (
        <div className="hidden items-center gap-2 lg:flex">
            <GitHubRedirect />
            {!user ? (
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
