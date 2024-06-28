"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Brand } from "../ui";
import { GitHubIcon } from "@/icons";
import { Button, ModalForm } from "../form";
import { User } from "@/interface/ui";
import { LoginButtonProps } from "@/interface/form";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export default function Nav({ user }: { user?: User }) {
    return (
        <nav className="flex w-full items-center justify-between gap-2">
            <Brand />
            <NavMenu user={user} />
        </nav>
    );
}

async function NavMenu({ user }: { user?: User }) {
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const session = await getServerSession(authConfig);

    const loginHandler = () => {
        setLoginModal((prev) => !prev);
    };
    return (
        <>
            <div className="hidden items-center gap-2 lg:flex">
                <GitHubRedirect />
                <div className="flex items-center gap-2">
                    {!session ? (
                        <LoginButton url="/" handler={loginHandler} />
                    ) : (
                        <>
                            <AccountButton url="/" />
                            <CreateButton url="/" />
                        </>
                    )}
                </div>
            </div>
            {loginModal && (
                <ModalForm
                    OAuth={true}
                    type={"login"}
                    state={loginModal}
                    setState={setLoginModal}
                />
            )}
        </>
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

function LoginButton({ url, handler }: LoginButtonProps) {
    const router = useRouter();
    return (
        <>
            <Button
                type="button"
                className="bg-white text-zinc-900 outline outline-1 outline-zinc-900 hover:bg-zinc-900 hover:text-white"
                handler={handler}
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
