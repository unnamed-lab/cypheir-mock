/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Brand from "../brand";

describe("Brand component", () => {
    it("should have anchor link element", () => {
        render(<Brand />);
        const anchorLink = screen.getByRole("link");
        expect(anchorLink).toBeInTheDocument();
        expect(anchorLink).toHaveAttribute("href", "/");
    });

    it("should have the logo image on display", () => {
        render(<Brand />);
        const logo = screen.getByAltText(/cypheir brand logo/i);

        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("src", "/logo.svg");
    });

    it('should have the "beta" tooltip element', () => {
        render(<Brand />);
        const logo = screen.getByRole("tooltip");
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveTextContent(/beta/i);
    });
});
