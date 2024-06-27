import { render, screen } from "@testing-library/react";
import Footer from "../footer";

describe("Footer component", () => {
    it("should have credit text", () => {
        render(<Footer />);
        const credit = screen.getByText(/brought to you/i);

        expect(credit).toBeInTheDocument();
    });

    it("should have anchor link", () => {
        render(<Footer />);
        const redirect = screen.getByRole("link", { name: /unnamedcodes/i });
        expect(redirect).toBeInTheDocument();
        expect(redirect).toHaveTextContent(/unnamedcodes/i);
    });

    it("should have copyright text", () => {
        render(<Footer />);
        const year = new Date().getFullYear();
        const copyright = screen.getByText(`©${year} Cypheir.`);
        expect(copyright).toBeInTheDocument();
    });
});
