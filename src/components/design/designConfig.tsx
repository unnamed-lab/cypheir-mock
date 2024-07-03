import React from "react";
import { cn } from "@/lib/utils";
import { Combobox } from "../ui/combobox";
import { Badge } from "../ui/badge";
import { ConfigDropdownProps, ConfigTextareaProps } from "@/interface/ui";
import statusCodes from "@/lib/statusCodes";
import contentTypes from "@/lib/contentTypes";
import charset from "@/lib/charsetTypes";
import { Textarea } from "../ui/textarea";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function DesignConfig({ className }: { className?: string }) {
    const httpHeaders = `    {
        "Cache-Control": "max-age=3600",
        "X-Custom-Header": "MyCustomValue"
    }`;

    const httpBody = `{
  "identity": {
    "id": "b06cd03f-75d0-413a-b94b-35e155444d70",
    "login": "John Doe",
    "secret_alias": "The Shadow"
  },
  "permissions": {
    "roles": [
      "moderator",
      "gatekeeper"
    ],
    "special_access": true
  }
}
`;
    return (
        <section className={cn("flex flex-col gap-2", className)}>
            <div className="mb-2 flex flex-wrap gap-1">
                <h2 className="w-full text-xl font-semibold capitalize">
                    Configure your Mock endpoint.
                </h2>
                <p className="w-full text-xs font-light text-zinc-500 md:w-9/12">
                    You can carefully configure how your mock api endpoint would
                    be built and formatted.
                </p>
            </div>
            <ConfigTextarea
                title="Mock Identifier"
                placeholder={"Cypheir Mock Template 😉💙"}
                info={
                    "Choose a name to easily recognize this mock in your management console later."
                }
                height={15}
            />
            <ConfigDropdown
                title="HTTP Response Status"
                required
                list={statusCodes}
                placeholder="HTTP Status"
                info="The HTTP status code that you’ll receive in the HTTP response."
                width={350}
            />
            <ConfigDropdown
                title="Response Content Type"
                required
                list={contentTypes}
                placeholder="HTTP Response Content Type"
                info="The Content-Type header specifies the media type of the resource being sent or received."
                width={430}
            />

            <ConfigDropdown
                title="Charset"
                required
                list={charset}
                placeholder="Charset"
                info="The Charset is used for encoding or decoding your payload."
                width={250}
            />

            <ConfigTextarea
                title="HTTP Headers "
                placeholder={httpHeaders}
                info="Customize the HTTP headers sent in the response. Define the headers as a JSON object."
            />

            <ConfigTextarea
                title="HTTP Response Body "
                placeholder={httpBody}
                height={250}
            />
            <ConfigTextarea
                title="Mock Secret Token"
                placeholder={"CYqQRkxiKAtw9JAUyDHuJR6VMJsJdGMahRnuGGJTbyI= 🤫"}
                info={
                    "If left blank, a random secret will be generated for updating or deleting your mock."
                }
                height={15}
            />
        </section>
    );
}

function ConfigBadge({ required = false }: { required?: boolean }) {
    const basic =
        "pointer-events-none ml-auto text-white md:ml-6 px-1 rounded-md";
    return (
        <>
            {required ? (
                <Badge className={basic}>Required</Badge>
            ) : (
                <Badge className={cn(basic, "bg-gray-400")}>Optional</Badge>
            )}
        </>
    );
}

function ConfigInfo({ info }: { info?: string }) {
    return (
        <>
            {info && (
                <p className="md:11/12 pointer-events-none w-full select-none text-xs font-light text-primary">
                    {info}
                </p>
            )}
        </>
    );
}

function ConfigDropdown({
    title,
    required,
    list,
    info,
    placeholder,
    width,
}: ConfigDropdownProps) {
    return (
        <>
            <div className="my-2 flex flex-wrap gap-2">
                <h3 className="mb-2 flex w-full items-center font-medium uppercase">
                    {title}
                    <ConfigBadge required={required} />
                </h3>
                <Combobox
                    array={list}
                    placeholder={placeholder}
                    width={width}
                />
                <ConfigInfo info={info} />
            </div>
        </>
    );
}

function ConfigTextarea({
    title,
    required,
    info,
    placeholder,
    width,
    height,
}: ConfigTextareaProps) {
    return (
        <>
            <div className="my-2 flex flex-wrap gap-2">
                <h3 className="mb-2 flex w-full items-center font-medium uppercase">
                    {title}

                    <ConfigBadge required={required} />
                </h3>
                <Textarea
                    placeholder={placeholder}
                    style={
                        {
                            "--custom-width": width ? `${width}px` : "100%",
                            "--custom-height": height ? `${height}px` : "85px",
                        } as React.CSSProperties
                    }
                    className="min-h-[100px] w-[var(--custom-width)] text-xs placeholder:text-xs lg:min-h-[var(--custom-height)]"
                />
                <ConfigInfo info={info} />
            </div>
        </>
    );
}

export function DropdownMenuRadioGroupDemo() {
    const [position, setPosition] = React.useState("bottom");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                >
                    <DropdownMenuRadioItem value="top">
                        Top
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                        Bottom
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                        Right
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
