import { render, screen } from "@testing-library/react";
import Nav from "../nav";
import { User } from "@/interface/ui";

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null,
        };
    },
}));

describe("Navigation bar component", () => {
    const githubLink = "https://github.com/unnamed-lab/cypheir-mock";
    const userMock: User = { id: 1, name: "Unnamed" };
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
        const registerBtn = screen.getByRole("button", { name: /register/i });
        expect(loginBtn).toBeInTheDocument();
        expect(registerBtn).toBeInTheDocument();
    });

    it("should display create and manage mock buttons when not logged in", () => {
        render(<Nav user={userMock} />);
        const manageBtn = screen.getByRole("button", { name: /manage mocks/i });
        const createBtn = screen.getByRole("button", {
            name: /create mock/i,
        });
        expect(manageBtn).toBeInTheDocument();
        expect(createBtn).toBeInTheDocument();
    });
});
