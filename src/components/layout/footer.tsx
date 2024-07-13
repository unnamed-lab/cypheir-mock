import React from "react";
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="mr-auto flex items-center border-t px-[3.5%] py-5 font-sans text-xs font-light md:text-sm lg:px-[7.5%]">
            Brought to you by
            <Link
                className="ease ml-1 underline underline-offset-4 transition-all hover:font-medium hover:text-primary hover:no-underline"
                href="https://x.com/unnamedcodes"
            >
                unnamedcodes
            </Link>
            .
            <span className="ml-auto flex w-min md:w-max">
                &copy;{year} Cypheir.
            </span>
        </footer>
    );
}
