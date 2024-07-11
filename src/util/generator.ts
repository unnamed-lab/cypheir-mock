//  Mock Object Generator

import { countryCodes, female, male } from "@/data";

interface IGeneratorOptions {
    id: "digits" | "random";
    indexLength?: number;
}

interface IGenerateAttribute {
    attribute?: TAttributeProps;
    opts?: TOptionsProps;
}

interface IGenerateProperty {
    title: string;
    property: TAttributeProps;
}

type TGenderProps = "male" | "female" | "mixed";

type TAttributeProps =
    | string
    | number
    | object
    | boolean
    | Array<string | number | boolean | object>;

type TGenerateName = {
    names?: number;
    gender?: TGenderProps;
    initial?: boolean;
};

type TGenerateEmail = {
    username?: string;
    domain?: string;
    digits?: boolean;
};

type TGenerateMobile = {
    country?: string;
    length?: number;
};

type TGeneratePassword = {
    length?: number;
    type: "numeric" | "alpahnumeric";
};

type TOptionsProps = {
    type: "name" | "email" | "mobile" | "phone" | "custom" | "password";
    setAttribute?:
        | TGenerateName
        | TGenerateEmail
        | TGenerateMobile
        | TGeneratePassword
        | (() => TAttributeProps);
};

type TGenerateProperty = Array<IGenerateProperty>;

export class GenerateMock {
    private readonly count: number;
    private options: IGeneratorOptions = { id: "digits", indexLength: 6 };
    private propertyBox: TGenerateProperty = [];

    constructor(count: number, opts?: IGeneratorOptions) {
        this.count = count;
        if (opts) this.options = opts;
    }

    // IN-BUILT METHODS

    private generateString(length: number): string {
        if (length < 1)
            throw new Error(
                "The length value should be greater than or equal to one."
            );
        return Math.random()
            .toString(36)
            .substring(2, 2 + length);
    }

    private generateInt(min: number, max: number): number {
        if (min < 0)
            throw new Error(
                "The minimum value should be equal to or greater than zero."
            );
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private generateName(
        names: number = 2,
        gender: TGenderProps = "mixed",
        initial: boolean = false
    ): string {
        if (names < 1)
            throw new Error(
                "Amount of mock name must be greater or equal to one"
            );
        let nameArr: string[] = [];
        let nameSex: string[] = [];

        if (gender === "male") nameSex = male;
        else if (gender === "female") nameSex = female;
        else nameSex = male.concat(female);

        for (let index = 0; index < names; index++) {
            nameArr.push(nameSex[this.generateInt(0, nameSex.length)]);
        }

        if (initial) {
            return nameArr
                .map((el, i) => {
                    return i === 1 ? `${el[0]}.` : el;
                })
                .join(" ");
        }

        return nameArr.join(" ");
    }

    private generateEmail(
        username: string = "",
        domain: string = "cypheir.xyz",
        digits: boolean = false
    ): string {
        //  FORMAT: [username][digits?]@[domain] e.g unnamed001@cypheir.xyz
        const checkUser = this.getNameProp();
        const userAlias = username
            ? username
            : checkUser
              ? checkUser
              : this.generateString(10);
        const uniqueCode = digits ? `${this.generateInt(1, 999)}` : "";

        return `${userAlias}${uniqueCode}@${domain}`;
    }

    private generateMobile(
        country: string = "Nigeria",
        length: number = 10
    ): string {
        //  FORMAT: [countCode][numberLength] e.g +234 802-323-2323
        if (length > 15)
            throw new Error(
                "The standard international number max length (15) has been exceeded."
            );
        else if (length < 10)
            throw new Error(
                "The standard international number min length (10) has been exceeded."
            );
        const mobileMinLen = Math.pow(10, length - 1);
        const mobileMaxLen = Math.pow(10, length) - 1;
        const numLength = this.generateInt(mobileMinLen - 1, mobileMaxLen);
        const countryID = countryCodes?.find((el) => {
            return (
                el.name.toLowerCase() === country.toLowerCase() ||
                el.name.toLowerCase() === country.toLowerCase() ||
                el.dial_code === country ||
                el.dial_code === country.slice(1)
            );
        });
        console.log(length % 10);
        const codeRegExp: RegExp = new RegExp(
            `(\\d{3})(\\d{${3 + (length > 11 ? (length % 10) - 2 : 0)}})(\\d{${4 + (length > 10 ? (length % 10) - 1 : 0)}})`,
            "g"
        );
        const fmtNumber = String(numLength).replace(codeRegExp, "$1-$2-$3");
        const countryCode = countryID ? countryID.dial_code : "+1";

        return `${countryCode} ${fmtNumber}`;
    }

    private getNameProp(): string {
        const name = this.propertyBox.filter(
            (obj) =>
                obj.title === "name" || "username" || "fullname" || "firstname"
        );
        return name[0] ? `${name[0]?.property}` : "";
    }

    // GLOBAL METHODS

    add(title: string, attribute: IGenerateAttribute) {
        let attr: TAttributeProps = "";
        if (attribute.opts) {
            if (attribute.opts.type === "custom") {
                let callback = attribute.opts
                    .setAttribute as () => TAttributeProps;
                attr = callback;
            } else if (attribute.opts.type === "name") {
                const genName = attribute.opts.setAttribute as TGenerateName;
                attr = this.generateName(
                    genName?.names,
                    genName?.gender,
                    genName?.initial
                );
            } else if (attribute.opts.type === "email") {
                const genEmail = attribute.opts.setAttribute as TGenerateEmail;
                attr = this.generateEmail(
                    genEmail?.username,
                    genEmail?.domain,
                    genEmail?.digits
                );
            } else if (attribute.opts.type === ("mobile" || "phone")) {
                const genMobile = attribute.opts
                    .setAttribute as TGenerateMobile;
                attr = this.generateMobile(
                    genMobile?.country,
                    genMobile?.length
                );
            } else if (attribute.opts.type === "password") {
                const genPassword = attribute.opts
                    .setAttribute as TGeneratePassword;

                if (genPassword.type === "numeric") {
                    attr = this.generateInt(
                        Math.pow(10, (genPassword.length as number) - 1),
                        Math.pow(10, genPassword.length as number) - 1
                    );
                } else {
                    attr = this.generateString(genPassword.length as number);
                }
            }
        } else {
            if (attribute.attribute as undefined) attr = "";
            attr = attribute.attribute as TAttributeProps;
        }

        this.propertyBox.push({ title, property: attr });
        return this;
    }

    remove(title: string) {
        const index = this.propertyBox.findIndex((obj) => obj.title === title);
        this.propertyBox.splice(index, 1);
        return this;
    }

    getProps() {
        return this.propertyBox;
    }
}
