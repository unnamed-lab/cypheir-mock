"use client";
import React from "react";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { breadcrumbProp } from "@/util/breadcrumb";

export default function DesignBreadcrumb() {
    const path = usePathname();
    const breacrumb = breadcrumbProp(path);

    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                {breacrumb.map((el, i) => {
                    return (
                        <>
                            {i > 0 ? (
                                <BreadcrumbSeparator key={"sep" + i} />
                            ) : null}
                            <BreadcrumbItem key={"item" + i}>
                                <BreadcrumbLink key={"link" + i} asChild>
                                    <Link key={"anchor" + i} href={el.url} className="capitalize">
                                        {el.title}
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

/*
<BreadcrumbItem>
    <BreadcrumbLink asChild>
        <Link href="/design">Dashboard</Link>
    </BreadcrumbLink>
</BreadcrumbItem>
<BreadcrumbSeparator />
<BreadcrumbItem>
    <BreadcrumbLink asChild>
        <Link href="/design/manage">Manage Mocks</Link>
    </BreadcrumbLink>
</BreadcrumbItem>
*/
