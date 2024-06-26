import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Button from "../button";

describe("Button component", () => {
    it("should render button element", () => {
        render(<Button>Button</Button>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("should render the correct inner text", () => {
        render(<Button>Button</Button>);
        const button = screen.getByRole("button").innerHTML;
        expect(button === "Button").toBeTruthy();
    });

    it("should handle click function", () => {
        const handleClick = jest.fn();
        render(<Button handler={handleClick}>Button</Button>);
        const button = screen.getByRole("button");
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(1)
    });
});
