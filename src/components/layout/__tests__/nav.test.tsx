import { render, screen } from "@testing-library/react";
import Nav from "../nav";

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null,
        };
    },
}));

describe("Navigation bar component", () => {
    const githubLink = "https://github.com/unnamed-lab/cypheir-mock";

    it("should display the nav component", () => {
        render(<Nav />);
        const nav = screen.getByRole("navigation");
        expect(nav).toBeInTheDocument();
    });

    it("should display github redirect button", () => {
        render(<Nav />);
        const nav = screen.getByRole("link", {
            name: /star on github/i,
        });
        expect(nav).toBeInTheDocument();
        expect(nav).toHaveAttribute("href", githubLink);
    });

    it("should display login and register buttons when not logged in", () => {
        render(<Nav />);
        const loginBtn = screen.getByRole("button", { name: /login/i });
        expect(loginBtn).toBeInTheDocument();
    });
});
