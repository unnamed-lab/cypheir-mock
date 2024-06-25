"use client";
import errorImg from "@/assets/img/error.svg";
import { Block } from "@/components/ui";
import { GlobalErrorProp } from "@/interface/ui";

export default function GlobalError({ error }: GlobalErrorProp) {
    return (
        <html>
            <body>
                <Block
                    image={errorImg}
                    title="Oops, something went wrong!"
                    desc=" Our team is on it."
                    backLink={false}
                    message={error.message}
                />
            </body>
        </html>
    );
}
