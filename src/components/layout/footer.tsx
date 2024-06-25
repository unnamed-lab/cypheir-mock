import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="mr-auto flex items-center gap-1 border-t px-[3.5%] py-2 text-xs font-light md:text-sm">
            {"Brought to you by "}
            <Link
                className="underline underline-offset-4"
                href="https://x.com/unnamedcodes"
            >
                unnamedcodes
            </Link>
            .<span className="ml-auto">&copy;{year} Cypheir.</span>
        </footer>
    );
}
