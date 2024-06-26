"use client";
import BoxReveal from "@/components/magicui/box-reveal";
import { Button } from "@/components/form";

export default function HeroBox() {
    return (
        <div className="h-full w-full max-w-[100%] items-center justify-center overflow-hidden font-sans md:pt-5">
            <BoxReveal boxColor={"#1ca7ec"} width="100%" duration={0.5}>
                <h1 className="text-5xl font-semibold lg:text-7xl">
                    Cypheir Mock<span className="text-primary">.</span>
                </h1>
            </BoxReveal>

            <BoxReveal boxColor={"#1ca7ec"} duration={0.5}>
                <h2 className="mt-[.75rem] text-lg lg:text-xl font-semibold">
                    Generate, Mock and Test your{" "}
                    <span className="text-primary">APIs</span>.
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#1ca7ec"} duration={0.5}>
                <div className="mt-[1.5rem] md:w-10/12 lg:w-8/12">
                    <p className="text-sm md:text-xs lg:text-sm">
                        {
                            "Cypheir Mock is a tool that allows developers to create mock APIs quickly. Whether you're building a new application, testing integrations, or need to simulate responses during development, this service has you covered. "
                        }
                    </p>
                </div>
            </BoxReveal>

            <BoxReveal boxColor={"#1ca7ec"} duration={0.5} width="100%">
                <Button className="mt-[1.6rem] w-full rounded-lg bg-primary px-8 text-lg font-medium uppercase text-white hover:bg-black md:w-fit text-center justify-center">
                    Get Started
                </Button>
            </BoxReveal>
        </div>
    );
}
