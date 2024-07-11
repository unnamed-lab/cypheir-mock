"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    DoorOpenIcon,
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SideBarNavigationItems } from "@/interface/ui";
import { signOut, useSession } from "next-auth/react";
import { useUser } from "@/store";
import { DesignBreadcrumb } from "@/components/design";

export default function DesignLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SideNavigation />
            {children}
        </>
    );
}

function SideNavigation() {
    const session = useSession();
    const { removeUser } = useUser();
    const user = session?.data?.user;

    const handleSignOut = async () => {
        await signOut();
        removeUser("cyphmockuser");
    };

    const navigation: Array<SideBarNavigationItems> = [
        {
            title: "Dashboard",
            url: "/",
            icon: <Home className="h-5 w-5" />,
        },
        {
            title: "Mocks",
            url: "/design/manage",
            icon: <Package className="h-5 w-5" />,
        },
        {
            title: "Analytics",
            url: "#",
            icon: <LineChart className="h-5 w-5" />,
        },
        {
            title: "Settings",
            url: "#",
            icon: <Settings className="h-5 w-5" />,
        },
    ];

    return (
        <>
            <div className="mt-3 flex flex-col px-[7.5%] sm:gap-4 sm:py-4">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                size="icon"
                                variant="outline"
                                className="sm:hidden"
                            >
                                <PanelLeft className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                >
                                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                                    <span className="sr-only">
                                        Cypheir Mock
                                    </span>
                                </Link>

                                {navigation?.map((el, i) => {
                                    return (
                                        <Link
                                            key={"nav" + i}
                                            href={el.url}
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            {el.icon}
                                            {el.title}
                                        </Link>
                                    );
                                })}

                                <SignOut mode="mobile" />
                            </nav>
                        </SheetContent>
                    </Sheet>

                    <DesignBreadcrumb />

                    <div className="relative ml-auto flex-1 md:grow-0">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="overflow-hidden rounded-full"
                            >
                                <Image
                                    src={user?.image as string | ""}
                                    width={36}
                                    height={36}
                                    alt="Avatar"
                                    className="overflow-hidden rounded-full"
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleSignOut}>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
            </div>
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Link
                        href={"/design"}
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">Cypheir Mock</span>
                    </Link>

                    {navigation?.map((el, i) => {
                        return (
                            <Tooltip key={i}>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={el.url}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    >
                                        {el.icon}
                                        <span className="sr-only">
                                            {el.title}
                                        </span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    {el.title}
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}

                    <SignOut mode="desktop" />
                </nav>
            </aside>
        </>
    );
}

function SignOut({ mode }: { mode: "mobile" | "desktop" }) {
    const title = "Sign Out";
    const icon = <DoorOpenIcon className="h-5 w-5" />;
    const { removeUser } = useUser();

    const handleSignOut = async () => {
        await signOut();
        removeUser("cyphmockuser");
    };

    return mode === "mobile" ? (
        <Button
            onClick={handleSignOut}
            className="mt-4 flex items-center gap-4 bg-red-500 px-2.5 text-base text-zinc-900 hover:bg-red-700 hover:text-foreground"
        >
            {icon}
            {title}
        </Button>
    ) : (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    onClick={handleSignOut}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 p-1 font-black text-muted-foreground transition-colors hover:bg-red-600 hover:text-foreground md:h-8 md:w-8"
                >
                    {icon}
                    <span className="sr-only">{title}</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{title}</TooltipContent>
        </Tooltip>
    );
}
