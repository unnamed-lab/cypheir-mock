import { IconProps } from "@/interface/ui";
import React from "react";

export default function ChevronIcon({
    width,
    height,
    className,
    pathFill,
}: IconProps) {
    return (
        <svg
            fill={pathFill || "currentColor"}
            width={width || "24"}
            height={height || "24"}
            viewBox="-2 -2 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm6 7.172-3.536 3.535a1 1 0 1 1-1.414-1.414L9.293 7.05a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1-1.414 1.414L10 9.172z" />
        </svg>
    );
}
