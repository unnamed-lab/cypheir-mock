//  Mock Object Generator

import { female, male } from "@/data";

interface IGeneratorOptions {
    id: "digits" | "random";
    indexLength?: number;
}

interface IGenerateAttribute {
    attribute: TAttributeProps;
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

type TOptionsProps = {
    type: "name" | "email" | "custom";
    setAttribute?: TGenerateName | TGenerateEmail | (() => TAttributeProps);
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

    private getNameProp(): string {
        const name = this.propertyBox.filter(
            (obj) =>
                obj.title === "name" || "username" || "fullname" || "firstname"
        );
        return name[0] ? `${name[0]?.property}` : "";
    }

    // GLOBAL METHODS

    /*
        build()
        add(title, opts)
        remove()
    */

    add(title: string, attribute: IGenerateAttribute) {
        // let output: IGenerateProperty;
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
            }
        } else {
            attr = attribute.attribute;
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
