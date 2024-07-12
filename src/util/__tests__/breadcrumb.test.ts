/* eslint-disable no-undef */
import {
    breadcrumbProp,
    breadcrumbSplit,
    breadcrumbTitle,
} from "../breadcrumb";

describe("breadcrumb divider", () => {
    const mockURL = "/design/manage";
    it("should output an array of string", () => {
        const split = breadcrumbSplit(mockURL).list;
        expect(split).toEqual(["", "design", "manage"]);
    });

    it("should output array breadcrumb items", () => {
        const split = breadcrumbSplit(mockURL).breadcrumb;
        expect(split).toEqual(["/", "/design", "/design/manage"]);
    });

    it("should output breadcrumb titles", () => {
        const split = breadcrumbSplit(mockURL).list;
        const titles = split.map((el) => {
            return breadcrumbTitle(el);
        });
        expect(titles).toStrictEqual([
            "dashboard",
            "create mock",
            "manage mock",
        ]);
    });

    it("should output breadcrumb titles and urls", () => {
        const element = breadcrumbProp(mockURL);
        expect(element).toBeTruthy();
    });
});
