"use client";
import React from "react";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
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
                    const itemId = "breadcrumb-item-" + i;
                    return (
                        <React.Fragment key={itemId}>
                            {i > 0 ? (
                                <BreadcrumbSeparator key={"sep-" + el.title} />
                            ) : null}
                            <BreadcrumbItem key={"item-" + el.title}>
                                <BreadcrumbLink
                                    key={"link-" + el.title}
                                    asChild
                                >
                                    <Link
                                        key={"anchor-" + el.title}
                                        href={el.url}
                                        className="capitalize"
                                    >
                                        {el.title}
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </React.Fragment>
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
