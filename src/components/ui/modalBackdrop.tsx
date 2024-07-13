import React from "react";
import { BackdropProps } from "@/interface/ui";

export default function ModalBackdrop({ state, handler }: BackdropProps) {
    return (
        state && (
            <div
                role="presentation"
                onClick={handler}
                className="fixed left-0 top-0 z-30 h-full w-full bg-[#0000001f] backdrop-blur-sm"
            ></div>
        )
    );
}
