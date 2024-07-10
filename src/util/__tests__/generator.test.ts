import { GenerateMock } from "../generator";

describe("mock generato class", () => {
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
            attribute: "unnamedcodes",
            opts: { type: "name", setAttribute: () => "" },
        });

        const output = item.getProps();
        console.log(output);
        expect(output).toBeTruthy();
    });
});
