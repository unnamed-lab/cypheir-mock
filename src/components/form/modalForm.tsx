"use client";
import { FormEvent, useEffect, useState } from "react";
import { ModalBackdrop } from "../ui";
import Button from "./button";
import { GitHubIcon } from "@/icons";
import { ModalFormProps } from "@/interface/form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ModalForm({
    OAuth = false,
    type = "login",
    state = false,
    setState,
}: ModalFormProps) {
    const session = useSession();
    const router = useRouter();

    const [innerState, setInnerState] = useState<boolean>(false);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleGitHub = async () => {
        signIn("github").then(console.log);
    };

    const closeModal = () => {
        setState((prev) => !prev);
        setInnerState((prev) => !prev);
    };

    useEffect(() => {
        if (session.data?.user) {
            router.push("/");
        } else {
            // I don't know why this didn't work
            // setInnerState((prev) => !prev);
            setInnerState(true);
        }
    }, [session, router, state, setState, innerState]);

    if (!innerState) return null;

    return (
        <>
            {state && !session.data?.user && (
                <section className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                    <form
                        action=""
                        onSubmit={handleSubmit}
                        className="relative z-40 flex w-11/12 flex-col gap-1 rounded-xl bg-slate-50 p-5 shadow-md md:w-7/12 lg:w-4/12"
                    >
                        <h2 className="mb-2 border-b border-b-slate-300 pb-2 text-center text-2xl font-bold capitalize">
                            {type === "login"
                                ? "login account"
                                : "register account"}
                            <span className="text-3xl text-primary">.</span>
                        </h2>
                        {/* <div className="min-w-9/12 lg:7/12 mx-auto mb-2 w-9/12">
                            <InputText
                                label="Email Address:"
                                name="email"
                                type="email"
                                className=""
                                placeholder="Enter your email address"
                                handler={handleInput}
                            />
                            {error && (
                                <p className="my-2 px-2 py-3 text-xs font-light text-red-600">
                                    {error}
                                </p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            className="min-w-9/12 lg:7/12 mx-auto w-9/12 bg-primary capitalize text-white hover:bg-zinc-900"
                        >
                            {type === "login" ? "login" : "create account"}
                        </Button> */}

                        {OAuth && (
                            <>
                                {/* <div className="pointer-events-none mx-auto my-2 select-none font-light text-zinc-500">
                                    OR
                                </div> */}
                                <Button
                                    type="button"
                                    handler={handleGitHub}
                                    className="min-w-9/12 lg:7/12 mx-auto my-7 w-9/12 bg-white text-zinc-900 outline outline-1 outline-zinc-900 hover:bg-slate-100"
                                >
                                    <GitHubIcon width={20} height={20} />{" "}
                                    {"Sign In with GitHub"}
                                </Button>
                            </>
                        )}
                    </form>
                </section>
            )}
            <ModalBackdrop state={state} handler={closeModal} />
        </>
    );
}
