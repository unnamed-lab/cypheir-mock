"use client";
import { useEffect, useState } from "react";
import { HeroBox, HeroDemo } from "@/components/home";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

export default function Hero() {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) return <Loading />;

    return (
        <section className="home-grad mb-4 flex min-h-[50svh] flex-col gap-5 sm:flex-row md:min-h-[60svh] md:items-center md:gap-2 lg:gap-4">
            <div className="my-4 w-full sm:w-6/12">
                <HeroBox setState={setLoading} />
            </div>
            <div className="my-4 w-full sm:w-6/12">
                <HeroDemo />
            </div>
        </section>
    );
}
