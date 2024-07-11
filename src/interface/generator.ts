import { TAttributeProps, TOptionsProps } from "@/types/generator";

export interface IGeneratorOptions {
    id: "digits" | "random";
    indexLength?: number;
    version: 1 | 2 | 3;
}

export interface IGenerateAttribute {
    attribute?: TAttributeProps;
    opts?: TOptionsProps;
}

export interface IGenerateProperty {
    title: string;
    property: TAttributeProps;
}
