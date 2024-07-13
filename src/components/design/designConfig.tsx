"use client";
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
import { TFormatText } from "@/types/ui";
import { Switch } from "../ui/switch";

export default function DesignConfig({
    className,
    setDesign,
}: Readonly<{
    className?: string;
    setDesign: React.Dispatch<any>;
}>) {
    const [editor, setEditor] = React.useState<string>("basic");

    const handleTextChange = (
        format: TFormatText = "normal",
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        let formattedValue: string;

        switch (format) {
            case "normal": {
                formattedValue = value;
                break;
            }
            case "underscore": {
                formattedValue = value.replaceAll(" ", "_");
                break;
            }
            case "dash": {
                formattedValue = value.replaceAll(" ", "-");
                break;
            }
            case "nowhitespace": {
                formattedValue = value.replaceAll(" ", "");
                break;
            }
        }

        setDesign((prev: any) => ({
            ...prev,
            [name]: formattedValue,
        }));
    };

    const httpHeaders = `    {
        "Cache-Control": "max-age=3600",
        "X-Custom-Header": "MyCustomValue"
    }`;

    const httpBody = `{
  "identity": {
    "_id": "b06cd03f-75d0-413a-b94b-35e155444d70",
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
            <div className="flex flex-wrap items-center gap-3">
                Choose Design Editor:{" "}
                <RadioDropdownMenu setEditor={setEditor} />
            </div>
            <ConfigTextarea
                name="identifier"
                title="Mock Identifier"
                placeholder={"Cypheir Mock Template 😉💙"}
                info={
                    "Choose a name to easily recognize this mock in your management console later."
                }
                height={15}
                onChange={(e) => handleTextChange("dash", e)}
            />
            <ConfigDropdown
                name="response_status"
                title="HTTP Response Status"
                required
                defaultValue={statusCodes[2].value}
                list={statusCodes}
                placeholder="HTTP Status"
                info="The HTTP status code that you’ll receive in the HTTP response."
                width={350}
                onChange={setDesign}
            />
            <ConfigDropdown
                name="content_type"
                title="Response Content Type"
                required
                defaultValue={contentTypes[0].value}
                list={contentTypes}
                placeholder="HTTP Response Content Type"
                info="The Content-Type header specifies the media type of the resource being sent or received."
                width={430}
                onChange={setDesign}
            />

            {editor === "advanced" && (
                <ConfigDropdown
                    name="charset"
                    title="Charset"
                    required
                    defaultValue={charset[0].value}
                    list={charset}
                    placeholder="Charset"
                    info="The Charset is used for encoding or decoding your payload."
                    width={250}
                    onChange={setDesign}
                />
            )}

            {editor === "advanced" && (
                <ConfigTextarea
                    name="http_header"
                    title="HTTP Headers "
                    placeholder={httpHeaders}
                    info="Customize the HTTP headers sent in the response. Define the headers as a JSON object."
                    onChange={(e) => handleTextChange("normal", e)}
                />
            )}

            {editor === "advanced" && (
                <ConfigTextarea
                    name="secret_token"
                    title="Mock Secret Token"
                    placeholder={
                        "CYqQRkxiKAtw9JAUyDHuJR6VMJsJdGMahRnuGGJTbyI= 🤫"
                    }
                    info={
                        "If left blank, a random secret will be generated for updating or deleting your mock."
                    }
                    height={15}
                    onChange={(e) => handleTextChange("nowhitespace", e)}
                />
            )}

            <div className="my-2 flex flex-wrap gap-2">
                <h3 className="mb-1 flex w-full items-center font-medium uppercase">
                    HTTP Response Body
                    <ConfigBadge required={true} />
                </h3>
                <p className="mb-2 flex items-center gap-5 text-sm font-medium uppercase">
                    Dynamic Response Body
                    <Switch
                        className="h-[1.6rem] bg-zinc-300"
                        defaultChecked={false}
                    />
                </p>
                <ConfigTextareaCustom
                    name="response_body"
                    title="HTTP Response Body"
                    placeholder={httpBody}
                    height={250}
                    onChange={(e) => handleTextChange("normal", e)}
                />
                <ConfigInfo info={"Customize your mock body"} />
            </div>

            {/* <ConfigTextarea
                name="response_body"
                title="HTTP Response Body "
                placeholder={httpBody}
                height={250}
                onChange={(e) => handleTextChange("normal", e)}
            /> */}
        </section>
    );
}

function ConfigBadge({ required = false }: Readonly<{ required?: boolean }>) {
    const basic =
        "pointer-events-none ml-auto text-white md:ml-6 px-1 rounded-md";
    return (
        <div>
            {required ? (
                <Badge className={basic}>Required</Badge>
            ) : (
                <Badge className={cn(basic, "bg-gray-400")}>Optional</Badge>
            )}
        </div>
    );
}

function ConfigInfo({ info }: Readonly<{ info?: string }>) {
    return (
        <div>
            {info && (
                <p className="md:11/12 pointer-events-none w-full select-none text-xs font-light text-primary">
                    {info}
                </p>
            )}
        </div>
    );
}

function ConfigDropdown({
    defaultValue,
    name,
    title,
    required,
    list,
    info,
    placeholder,
    width,
    onChange,
}: Readonly<ConfigDropdownProps>) {
    return (
        <div className="my-2 flex flex-wrap gap-2">
            <h3 className="mb-2 flex w-full items-center font-medium uppercase">
                {title}
                <ConfigBadge required={required} />
            </h3>
            <Combobox
                defaultValue={defaultValue}
                name={name || title.replace(" ", "_").toLowerCase()}
                array={list}
                placeholder={placeholder}
                width={width}
                onChange={onChange}
            />
            <ConfigInfo info={info} />
        </div>
    );
}

function ConfigTextarea({
    name,
    title,
    required,
    info,
    placeholder,
    width,
    height,
    onChange,
}: Readonly<ConfigTextareaProps>) {
    return (
        <div className="my-2 flex flex-wrap gap-2">
            <h3 className="mb-2 flex w-full items-center font-medium uppercase">
                {title}

                <ConfigBadge required={required} />
            </h3>
            <Textarea
                name={name || title.replace(" ", "_").toLowerCase()}
                onChange={onChange}
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
    );
}

function ConfigTextareaCustom({
    name,
    title,
    placeholder,
    width,
    height,
    onChange,
}: Readonly<ConfigTextareaProps>) {
    return (
        <Textarea
            name={name || title.replace(" ", "_").toLowerCase()}
            onChange={onChange}
            placeholder={placeholder}
            style={
                {
                    "--custom-width": width ? `${width}px` : "100%",
                    "--custom-height": height ? `${height}px` : "85px",
                } as React.CSSProperties
            }
            className="min-h-[100px] w-[var(--custom-width)] text-xs placeholder:text-xs lg:min-h-[var(--custom-height)]"
        />
    );
}

export function RadioDropdownMenu({
    setEditor,
}: Readonly<{
    setEditor: React.Dispatch<React.SetStateAction<string>>;
}>) {
    const [position, setPosition] = React.useState<string>("basic");

    React.useEffect(() => {
        setEditor(position);
    }, [position, setEditor]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="capitalize">
                    Select Build Settings [ {position} ]
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-slate-50 font-sans">
                <DropdownMenuLabel>Build Setting</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                >
                    <DropdownMenuRadioItem value="basic">
                        Basic
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="advanced">
                        Advanced
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
