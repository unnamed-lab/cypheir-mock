import { GenerateMock } from "../generator";

describe("mock generator class", () => {
    it("should add new mock item", () => {
        const item = new GenerateMock(1);
        item.add("name", { attribute: "unnamedcodes" });
        expect(item.getProps()).toStrictEqual([
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
        expect(item.getProps()).toStrictEqual(output);
        item.remove("job");
        expect(item.getProps()).toStrictEqual([
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
        const output = item.getProps();
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item email type", () => {
        const item = new GenerateMock(1);
        item.add("name", { attribute: "unnamedcodes" });
        item.add("email", {
            opts: { type: "email", setAttribute: { digits: true } },
        });
        const output = item.getProps();
        expect(output).toHaveLength(2);
    });

    it("should generate new mock item email type - without name attribute", () => {
        const item = new GenerateMock(1);
        item.add("email", { opts: { type: "email" } });
        const output = item.getProps();
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item mobile type", () => {
        const item = new GenerateMock(1);
        item.add("phone number", { opts: { type: "mobile" } });
        const output = item.getProps();
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
        const output = item.getProps();
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
        const output = item.getProps();
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item password type - default", () => {
        const item = new GenerateMock(1);
        item.add("phone number", {
            opts: {
                type: "password",
                setAttribute: { length: 8 },
            },
        });
        const output = item.getProps();
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item password type", () => {
        const item = new GenerateMock(1);
        item.add("phone number", {
            opts: {
                type: "password",
                setAttribute: { length: 8, type: "numeric" },
            },
        });
        const output = item.getProps();
        expect(output).toHaveLength(1);
    });

    it("should generate new mock item password type - alphanumeric", () => {
        const item = new GenerateMock(1);
        item.add("phone number", {
            opts: {
                type: "password",
                setAttribute: { length: 8, type: "alpahnumeric" },
            },
        });
        const output = item.getProps();
        expect(output).toHaveLength(1);
    });
});
