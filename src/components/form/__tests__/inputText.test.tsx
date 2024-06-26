import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import InputText from "../inputText";

describe("Text input component", () => {
    const id = "input-test-id";
    const name = "test-input";
    render(<InputText type="text" name={name} id={id} label="Test Input" />);

    it("should get the input group input", () => {
        const inputBox = screen.getByLabelText("Test Input");
        expect(inputBox);
    });
});
