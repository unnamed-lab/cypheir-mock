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

type TOptionsProps = {
    type: "name" | "email" | "custom";
    setAttribute: (args?: TAttributeProps) => TAttributeProps;
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

    // GLOBAL METHODS

    /*
        build()
        add(title, opts)
        remove()
    */

    add(title: string, attribute: IGenerateAttribute) {
        let output: IGenerateProperty;
        let attr: TAttributeProps = "";

        if (attribute.opts) {
            const output = attribute.opts.setAttribute();

            if (attribute.opts.type === "custom") {
                attr = output;
            } else if (attribute.opts.type === "name") {
                attr = this.generateName();
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
