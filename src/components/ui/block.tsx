"use client";
import Link from "next/link";
import Image from "next/image";
import { BlockProps } from "@/interface/ui";

export default function Block(props: BlockProps) {
    const { image, desc, title, backLink, message } = props;
    return (
        <div className="error">
            <div className="error_container">
                <div className="error_item">
                    <Image src={image} alt={desc} />
                </div>
                <div className="error_item">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <p className="text-xs font-light text-zinc-400">
                        {message}
                    </p>
                    {backLink ? <Link href="/">Return Home</Link> : ""}
                </div>
            </div>
        </div>
    );
}
