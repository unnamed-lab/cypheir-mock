/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import DesignBreadcrumb from "../designBreadcrumb";

jest.mock("next/navigation", () => ({
    usePathname() {
        return "/design/manage";
    },
}));

describe("Design Layout Breadcrumb", () => {
    it("should display on screen", () => {
        render(<DesignBreadcrumb />);
        const breadcrumb = screen.getByLabelText("breadcrumb");
        expect(breadcrumb).toBeInTheDocument();
    });

    it("should contain breadcrumb item with url and title", () => {
        render(<DesignBreadcrumb />);
        const dashboard = screen.getByText(/dashboard/i);
        const design = screen.getByText(/create mock/i);
        const manage = screen.getByText(/manage mock/i);

        expect(dashboard).toBeInTheDocument();
        expect(design).toBeInTheDocument();
        expect(manage).toBeInTheDocument();
    });

    it("should contain correct breadcrumb url", () => {
        render(<DesignBreadcrumb />);
        const dashboard = screen.getByText(/dashboard/i);
        const design = screen.getByText(/create mock/i);
        const manage = screen.getByText(/manage mock/i);

        expect(dashboard).toHaveAttribute("href", "/");
        expect(design).toHaveAttribute("href", "/design");
        expect(manage).toHaveAttribute("href", "/design/manage");
    });
});
