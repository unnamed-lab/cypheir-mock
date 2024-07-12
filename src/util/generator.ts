//  Mock Object Generator

import { randomUUID } from "crypto";
import { countryCodes, female, male } from "@/data";
import {
    IGenerateAttribute,
    IGenerateProperty,
    IGeneratorOptions,
} from "@/interface/generator";
import {
    TAttributeProps,
    TGenderProps,
    TGenerateDigits,
    TGenerateEmail,
    TGenerateMobile,
    TGenerateName,
    TGeneratePassword,
    TGenerateProperty,
} from "@/types/generator";

export class GenerateMock {
    private readonly count: number;
    private options: IGeneratorOptions = {
        id: "digits",
        indexLength: 6,
        version: 1,
    };
    private propertyBox: TGenerateProperty = [];

    constructor(count: number, opts?: IGeneratorOptions) {
        if (count > 5000)
            throw new Error(
                "The amount of request data has passed our expected threshold (5000)."
            );
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
        const nameArr: string[] = [];
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
        index: number,
        username: string = "",
        domain: string = "cypheir.xyz",
        digits: boolean = false
    ): string {
        //  FORMAT: [username][digits?]@[domain] e.g unnamed001@cypheir.xyz
        const checkUser = this.getNameProp(index);
        const userAlias = username
            ? username
            : checkUser
              ? checkUser
              : this.generateString(10);
        const uniqueCode = digits ? `${this.generateInt(1, 999)}` : "";

        return `${userAlias.replace(" ", "")}${uniqueCode}@${domain}`;
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
                el.dial_code === country ||
                el.dial_code === country.slice(1)
            );
        });
        const codeRegExp: RegExp = new RegExp(
            `(\\d{3})(\\d{${3 + (length > 11 ? (length % 10) - 2 : 0)}})(\\d{${4 + (length > 10 ? (length % 10) - 1 : 0)}})`,
            "g"
        );
        const fmtNumber = String(numLength).replace(codeRegExp, "$1-$2-$3");
        const countryCode = countryID ? countryID.dial_code : "+1";

        return `${countryCode} ${fmtNumber}`;
    }

    private generateDigits(value: TGenerateDigits): number {
        if (typeof value.length === "number") {
            if (value.length < 1) {
                throw new Error(
                    "The minimum digit length is one. Enter a value greater or equal to one."
                );
            }

            return this.generateInt(
                Math.pow(10, value.length - 1),
                Math.pow(10, value.length) - 1
            );
        } else {
            const { min, max } = value.length;
            if ((min as number) < 1)
                throw new Error("Enter a value greater or equal to one.");
            else if (max < (min as number))
                throw new Error("Enter a value greater than the minimum value");

            return this.generateInt(min || ((min as undefined) ?? 0), max);
        }
    }

    private generateProfileImage(gender: TGenderProps) {
        function randomImage(gender: "male" | "female") {
            const randNum = Math.floor(Math.random() * (99 - 1 + 1) + 1);
            return gender === "male"
                ? `https://randomuser.me/api/portraits/men/${randNum}.jpg`
                : `https://randomuser.me/api/portraits/women/${randNum}.jpg`;
        }

        if (gender === "male") return randomImage("male");
        else if (gender === "female") return randomImage("female");
        else {
            return this.generateInt(0, 1) === 0
                ? randomImage("male")
                : randomImage("female");
        }
    }

    private getNameProp(index: number): string {
        const name = this.propertyBox[index]?.filter((el) => {
            if (el.title === "name") true;
            else if (el.title === "fullname") true;
            else if (el.title === "firstname") true;
            else if (el.title === "username") true;
            else false;
        });
        return (name?.[0]?.property as string) ?? "";
    }

    private configureProperty(
        index: number,
        title: string,
        attribute: IGenerateAttribute
    ) {
        let attr: TAttributeProps = "";
        if (attribute.opts) {
            const setType = attribute.opts.type;
            switch (setType) {
                case "custom": {
                    const callback = attribute.opts
                        .setAttribute as () => TAttributeProps;
                    attr = callback;
                    break;
                }
                case "name": {
                    const genName = attribute.opts
                        .setAttribute as TGenerateName;
                    attr = this.generateName(
                        genName?.names,
                        genName?.gender,
                        genName?.initial
                    );
                    break;
                }
                case "email": {
                    const genEmail = attribute.opts
                        .setAttribute as TGenerateEmail;
                    attr = this.generateEmail(
                        index,
                        genEmail?.username,
                        genEmail?.domain,
                        genEmail?.digits
                    );
                    break;
                }
                case "mobile": {
                    const genMobile = attribute.opts
                        .setAttribute as TGenerateMobile;
                    attr = this.generateMobile(
                        genMobile?.country,
                        genMobile?.length
                    );
                    break;
                }
                case "phone": {
                    const genPhone = attribute.opts
                        .setAttribute as TGenerateMobile;
                    attr = this.generateMobile(
                        genPhone?.country,
                        genPhone?.length
                    );
                    break;
                }
                case "password": {
                    const genPassword = attribute.opts
                        .setAttribute as TGeneratePassword;
                    if (genPassword.type === "numeric") {
                        attr = this.generateInt(
                            Math.pow(10, (genPassword.length as number) - 1),
                            Math.pow(10, genPassword.length as number) - 1
                        );
                    } else {
                        attr = this.generateString(
                            genPassword.length as number
                        );
                    }
                    break;
                }
                case "digits": {
                    const genDigits = attribute.opts
                        .setAttribute as TGenerateDigits;
                    attr = this.generateDigits(genDigits);
                    break;
                }
                case "profile": {
                    const genProfile = attribute.opts
                        .setAttribute as TGenderProps;
                    attr =
                        genProfile === "male"
                            ? this.generateProfileImage("male")
                            : genProfile === "female"
                              ? this.generateProfileImage("female")
                              : this.generateProfileImage("mixed");
                    break;
                }
                default:
                    throw new Error("Please select an attribute type.");
            }
        } else {
            if (attribute.attribute as undefined) attr = "";
            attr = attribute.attribute as TAttributeProps;
        }

        return { title, property: attr };
    }

    // GLOBAL METHODS

    add(title: string, attribute: IGenerateAttribute) {
        if (!this.propertyBox.length) {
            for (let index = 0; index < this.count; index++) {
                const item = this.configureProperty(index, title, attribute);
                this.propertyBox.push([item]);
            }
        } else {
            this.propertyBox.forEach((el, index) => {
                const item = this.configureProperty(index, title, attribute);
                el.push(item);
            });
        }
        return this;
    }

    remove(title: string) {
        this.propertyBox.forEach((el) => {
            const index = el.findIndex((obj) => obj.title === title);
            el.splice(index, 1);
        });
        return this;
    }

    getProps() {
        return this.propertyBox;
    }

    compile(): Record<string, string>[] {
        const arr = this.propertyBox.map((el, i) => {
            const output: Record<string, string> = el.reduce(
                (obj: any, item: IGenerateProperty) => {
                    obj[String(item.title).replace(" ", "_")] = item.property;
                    return obj;
                },
                {
                    _id: this.options.id === "digits" ? i + 1 : randomUUID(),
                    _v: this.options.version,
                }
            );
            output.createdAt = new Date().toUTCString();
            return output;
        });

        return arr.sort((a, b) => {
            if (typeof a._id === "number" && typeof b._id === "number") {
                return a._id - b._id;
            } else {
                if (a._id > b._id) return 1;
                if (a._id < b._id) return -1;
                return 0;
            }
        });
    }
}
