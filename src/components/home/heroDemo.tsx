"use client";
import Image from "next/image";
import developer from "@/assets/developer.svg";
import { motion } from "framer-motion";

export default function HeroDemo() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="">
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="relative h-full w-full md:min-h-[40svh]"
            >
                <Image
                    priority
                    className="pointer-events-none mx-auto h-auto w-full lg:w-10/12"
                    src={"/snippet.png"}
                    alt="Codebase"
                    width={400}
                    height={200}
                />
                <Image
                    priority
                    className="pointer-events-none absolute -bottom-12 -right-10 mx-auto h-auto w-6/12 select-none [filter:drop-shadow(1px_1px_0.5px_#c1c1c1aa)] md:bottom-auto lg:-bottom-24 lg:-right-20"
                    src={developer}
                    alt="Cypheir Developer"
                    width={200}
                    height={200}
                />
            </motion.div>
        </div>
    );
}
