import React from "react";
import Image from "next/image";
import Link from "next/link";
import notfound from "@/assets/img/error.svg";

export default function NotFound() {
    return (
        <div className="error">
            <div className="error_container">
                <div className="error_item">
                    <Image src={notfound} alt="Page not found." />
                </div>
                <div className="error_item">
                    <h2>Not Found</h2>
                    <p>Could not find requested resource</p>
                    <Link href="/">Return Home</Link>
                </div>
            </div>
        </div>
    );
}
