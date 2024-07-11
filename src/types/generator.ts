import { IGenerateProperty } from "@/interface/generator";

export type TGenderProps = "male" | "female" | "mixed";

export type TAttributeProps =
    | string
    | number
    | object
    | boolean
    | Array<string | number | boolean | object>;

export type TGenerateName = {
    names?: number;
    gender?: TGenderProps;
    initial?: boolean;
};

export type TGenerateEmail = {
    username?: string;
    domain?: string;
    digits?: boolean;
};

export type TGenerateMobile = {
    country?: string;
    length?: number;
};

export type TGeneratePassword = {
    length?: number;
    type: "numeric" | "alpahnumeric";
};

export type TGenerateDigits = {
    length: number | { min?: number; max: number };
};

export type TOptionsProps = {
    type:
        | "name"
        | "email"
        | "mobile"
        | "phone"
        | "custom"
        | "password"
        | "profile"
        | "digits";
    setAttribute?:
        | TGenerateName
        | TGenerateEmail
        | TGenerateMobile
        | TGeneratePassword
        | TGenerateDigits
        | TGenderProps
        | (() => TAttributeProps);
};

export type TGenerateProperty = Array<IGenerateProperty>[];
