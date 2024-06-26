import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Button from "../button";

describe("Button component", () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole("button");

    it("should render button element", () => {
        expect(button).toBeInTheDocument();
    });

    it("should render the correct inner text", () => {
        const buttonText = button.innerHTML;
        expect(buttonText === "Button").toBeTruthy();
    });

    it("should handle click function", () => {
        const handleClick = jest.fn();
        render(<Button handler={handleClick}>Button</Button>);
        const button = screen.getByRole("button");
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(1)
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(2)
    });
});
