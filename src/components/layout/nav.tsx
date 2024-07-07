"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Brand } from "../ui";
import { GitHubIcon } from "@/icons";
import { Button, ModalForm } from "../form";
import { PageSession } from "@/interface/ui";
import { LoginButtonProps } from "@/interface/form";
import { signOut } from "next-auth/react";
import { getUserData } from "@/lib/fetchUser";
import { useUser } from "@/store";
import { cn } from "@/lib/utils";

export default function Nav({ session }: PageSession) {
    const { user, setUser } = useUser();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (session?.user) {
            const { name, email } = session.user;
            if (
                typeof name === "string" &&
                typeof email === "string" &&
                !localStorage.getItem("cyphmockuser")
            ) {
                getUserData(name, email)
                    .then((data) => {
                        setUserData(data);
                        setUser("cyphmockuser", JSON.stringify(data));
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                    });
            }
        }
    }, [session, setUser]);

    return (
        <nav className="mt-[5%] flex w-full items-center justify-between gap-1 px-[7.5%] lg:mt-[1.5%]">
            <Brand />
            <NavMenu session={session} />
        </nav>
    );
}

function NavMenu({ session }: PageSession) {
    const [loginModal, setLoginModal] = useState<boolean>(false);

    const loginHandler = () => {
        setLoginModal((prev) => !prev);
    };
    return (
        <>
            <div className="hidden items-center gap-2 sm:flex">
                <GitHubRedirect />
                <div className="flex items-center gap-2">
                    {!session ? (
                        <LoginButton url="/" handler={loginHandler} />
                    ) : (
                        <>
                            <NavButton
                                name="Manage Mocks"
                                className="bg-zinc-900 font-light text-white hover:bg-primary"
                                url="/design/manage"
                            />
                            <NavButton
                                name="Create Mock"
                                className="bg-zinc-900 font-light text-white hover:bg-primary"
                                url="/design"
                            />
                            <SignOutButton />
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

function SignOutButton() {
    const { removeUser } = useUser();

    const handleSignOut = async () => {
        await signOut();
        removeUser("cyphmockuser");
    };
    return (
        <>
            <Button
                type="button"
                className="h-9 min-w-9 bg-red-600 px-1 text-white hover:bg-zinc-900"
                handler={handleSignOut}
            >
                <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16 4H19C20.1046 4 21 4.89543 21 6V7M16 20H19C20.1046 20 21 19.1046 21 18V17M4.4253 19.4276L10.4253 21.2276C11.7085 21.6126 13 20.6517 13 19.3119V4.68806C13 3.34834 11.7085 2.38744 10.4253 2.77241L4.4253 4.57241C3.57934 4.8262 3 5.60484 3 6.48806V17.5119C3 18.3952 3.57934 19.1738 4.4253 19.4276Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                    <path
                        d="M9.001 12H9"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                    <path
                        d="M16 12H21M21 12L19 10M21 12L19 14"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                </svg>
            </Button>
        </>
    );
}

function NavButton({
    name,
    url,
    className,
}: {
    name: string;
    url: string;
    className: string;
}) {
    const router = useRouter();
    return (
        <>
            <Button
                type="button"
                className={className}
                handler={() => router.push(url)}
            >
                {name}
            </Button>
        </>
    );
}
