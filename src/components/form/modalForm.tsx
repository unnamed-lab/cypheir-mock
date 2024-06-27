"use client";
import { FormEvent, useState } from "react";
import { ModalBackdrop } from "../ui";
import Button from "./button";
import { GitHubIcon } from "@/icons";
import { ModalFormProps } from "@/interface/form";

export default function ModalForm({
    OAuth = false,
    type = "login",
}: ModalFormProps) {
    const [isActive, setActive] = useState<boolean>(true);
    const [formData, setFormData] = useState<Record<string, string>>({});
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    const closeModal = () => {
        setActive((prev) => !prev);
    };

    return (
        <>
            {isActive && (
                <section className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                    <form
                        action=""
                        onSubmit={handleSubmit}
                        className="relative z-40 flex w-11/12 flex-col gap-1 rounded-xl bg-slate-50 p-5 md:w-7/12 lg:w-4/12"
                    >
                        <h2 className="mb-2 border-b border-b-slate-300 pb-2 text-center text-2xl font-bold capitalize">
                            {type === "login"
                                ? "login account"
                                : "register account"}
                            <span className="text-3xl text-primary">.</span>
                        </h2>
                        <br />
                        <br />
                        <Button
                            type="submit"
                            className="min-w-9/12 lg:7/12 mx-auto w-9/12 bg-primary capitalize text-white hover:bg-zinc-900"
                        >
                            {type === "login" ? "login" : "create account"}
                        </Button>
                        {OAuth && (
                            <>
                                <div className="pointer-events-none mx-auto my-2 select-none font-light text-zinc-500">
                                    OR
                                </div>
                                <Button
                                    type="submit"
                                    className="min-w-9/12 lg:7/12 mx-auto w-9/12 bg-white text-zinc-900 outline outline-1 outline-zinc-900 hover:bg-slate-100"
                                >
                                    <GitHubIcon width={20} height={20} />{" "}
                                    {"Sign In with GitHub"}
                                </Button>
                            </>
                        )}
                    </form>
                </section>
            )}
            <ModalBackdrop state={isActive} handler={closeModal} />
        </>
    );
}
