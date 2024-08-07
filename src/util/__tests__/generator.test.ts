/* eslint-disable no-undef */
import { GenerateMock } from "../generator";

describe("mock generator class", () => {
    it("should add new mock item", () => {
        const item = new GenerateMock(1);
        item.add("name", { attribute: "unnamedcodes" });
        expect(item.getProps()[0]).toStrictEqual([
            { title: "name", property: "unnamedcodes" },
        ]);
    });

    it("should remove mock item", () => {
        const output = [
            { title: "name", property: "unnamedcodes" },
            { title: "job", property: "developer" },
        ];
        const item = new GenerateMock(1);
        item.add("name", { attribute: "unnamedcodes" });
        item.add("job", { attribute: "developer" });
        expect(item.getProps()[0]).toStrictEqual(output);
        item.remove("job");
        expect(item.getProps()[0]).toStrictEqual([
            { title: "name", property: "unnamedcodes" },
        ]);
    });

    it("should generate new mock item - name attribute", () => {
        const item = new GenerateMock(1);
        item.add("name", {
            opts: {
                type: "name",
                setAttribute: { names: 2, gender: "female" },
            },
        });
        const output = item.getProps()[0];
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item email type", () => {
        const item = new GenerateMock(1);
        item.add("name", { attribute: "unnamedcodes" });
        item.add("email", {
            opts: { type: "email", setAttribute: { digits: true } },
        });
        const output = item.getProps()[0];
        expect(output).toHaveLength(2);
    });

    it("should generate new mock item email type - without name attribute", () => {
        const item = new GenerateMock(1);
        item.add("email", { opts: { type: "email" } });
        const output = item.getProps()[0];
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item mobile type", () => {
        const item = new GenerateMock(1);
        item.add("phone number", { opts: { type: "mobile" } });
        const output = item.getProps()[0];
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item mobile type - with options", () => {
        const item = new GenerateMock(1);
        item.add("phone number", {
            opts: {
                type: "mobile",
                setAttribute: { country: "japan" },
            },
        });
        const output = item.getProps()[0];
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item mobile type - with options more length", () => {
        const item = new GenerateMock(1);
        item.add("phone number", {
            opts: {
                type: "mobile",
                setAttribute: { country: "united kingdom", length: 11 },
            },
        });
        const output = item.getProps()[0];
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item password type - default", () => {
        const item = new GenerateMock(1);
        item.add("password", {
            opts: {
                type: "password",
                setAttribute: { length: 8 },
            },
        });
        const output = item.getProps()[0];
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item password type", () => {
        const item = new GenerateMock(1);
        item.add("password", {
            opts: {
                type: "password",
                setAttribute: { length: 8, type: "numeric" },
            },
        });
        const output = item.getProps()[0];
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item password type - alphanumeric", () => {
        const item = new GenerateMock(1);
        item.add("password", {
            opts: {
                type: "password",
                setAttribute: { length: 8, type: "alphanumeric" },
            },
        });
        const output = item.getProps()[0];
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item digits type", () => {
        const item = new GenerateMock(1);
        item.add("bvn", {
            opts: {
                type: "digits",
                setAttribute: { length: 11 },
            },
        });
        const output = item.getProps()[0];
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item profile type", () => {
        const item = new GenerateMock(1);
        item.add("image", {
            opts: {
                type: "profile",
                setAttribute: "male",
            },
        });
        const output = item.getProps()[0];
        expect(output).toHaveLength(1);
    });

    it("should generate new mock bundle", () => {
        const item = new GenerateMock(5);
        item.add("name", {
            opts: {
                type: "name",
                setAttribute: { names: 2, gender: "male" },
            },
        });
        item.add("age", {
            opts: {
                type: "digits",
                setAttribute: { length: { min: 18, max: 90 } },
            },
        });
        item.add("email", {
            opts: { type: "email", setAttribute: { digits: true } },
        });
        item.add("password", {
            opts: {
                type: "password",
                setAttribute: { length: 8, type: "alphanumeric" },
            },
        });
        item.add("image", {
            opts: {
                type: "profile",
                setAttribute: "male",
            },
        });
        item.add("phone number", {
            opts: {
                type: "mobile",
                setAttribute: { country: "united kingdom" },
            },
        });
        item.add("bvn", {
            opts: {
                type: "digits",
                setAttribute: { length: 11 },
            },
        });
        const output = item.getProps();
        expect(output).toHaveLength(5);
    });

    it("should compile new mock bundle - auto increment", () => {
        const item = new GenerateMock(5);
        item.add("name", {
            opts: {
                type: "name",
                setAttribute: { names: 2, gender: "male" },
            },
        });
        item.add("age", {
            opts: {
                type: "digits",
                setAttribute: { length: { min: 18, max: 90 } },
            },
        });
        item.add("email", {
            opts: { type: "email", setAttribute: { digits: true } },
        });
        item.add("password", {
            opts: {
                type: "password",
                setAttribute: { length: 8, type: "alphanumeric" },
            },
        });
        item.add("phone number", {
            opts: {
                type: "mobile",
                setAttribute: { country: "united kingdom" },
            },
        });
        item.add("image", {
            opts: {
                type: "profile",
                setAttribute: "male",
            },
        });
        item.add("bvn", {
            opts: {
                type: "digits",
                setAttribute: { length: 11 },
            },
        });
        const output = item.compile();
        expect(output).toHaveLength(5);
    });

    it("should compile new mock bundle - unique string", () => {
        const item = new GenerateMock(10, { id: "random", version: 1 });
        item.add("name", {
            opts: {
                type: "name",
                setAttribute: { names: 2, gender: "mixed" },
            },
        });
        item.add("age", {
            opts: {
                type: "digits",
                setAttribute: { length: { min: 18, max: 90 } },
            },
        });
        item.add("email", {
            opts: { type: "email", setAttribute: { digits: true } },
        });
        item.add("password", {
            opts: {
                type: "password",
                setAttribute: { length: 8, type: "alphanumeric" },
            },
        });
        item.add("phone number", {
            opts: {
                type: "mobile",
                setAttribute: { country: "united kingdom" },
            },
        });
        item.add("image", {
            opts: {
                type: "profile",
                setAttribute: "mixed",
            },
        });
        item.add("bvn", {
            opts: {
                type: "digits",
                setAttribute: { length: 11 },
            },
        });
        const output = item.compile();
        expect(output).toHaveLength(10);
    });
});
