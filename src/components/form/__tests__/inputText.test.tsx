import { screen, render, fireEvent } from "@testing-library/react";
import InputText from "../inputText";

describe("Text input component", () => {
    const id = "input-test-id";
    const name = "test-input";
    const label = "Test Input";

    it("should get the input group input", () => {
        render(<InputText type="text" name={name} id={id} label={label} />);
        const inputBox = screen.getByLabelText(/test input/i);
        expect(inputBox).toBeInTheDocument();
    });

    it("should change the value of the input[type='text']", () => {
        render(<InputText type="text" name={name} id={id} label={label} />);
        const inputText = "hello world";
        const inputBox = screen.getByLabelText(
            /test input/i
        ) as HTMLInputElement;
        fireEvent.change(inputBox, { target: { value: inputText } });
        expect(inputBox.value).toBe(inputText);
    });

    it("should not be a disabled text field", () => {
        render(<InputText type="text" name={name} id={id} label={label} />);
        const inputBox = screen.getByLabelText(
            /test input/i
        ) as HTMLInputElement;
        expect(inputBox.disabled).toBeFalsy();
    });

    it("should be a disabled text field", () => {
        render(
            <InputText type="text" name={name} id={id} label={label} disabled />
        );
        const inputBox = screen.getByLabelText(
            /test input/i
        ) as HTMLInputElement;
        expect(inputBox.disabled).toBeTruthy();
    });

    it("should not have a placeholder", () => {
        render(<InputText type="text" name={name} id={id} label={label} />);
        const inputBox = screen.getByLabelText(
            /test input/i
        ) as HTMLInputElement;
        expect(inputBox.placeholder).toBeFalsy();
    });

    it("should have a placeholder", () => {
        render(
            <InputText
                type="text"
                name={name}
                id={id}
                label={label}
                placeholder="this is a placeholder"
            />
        );
        const inputBox = screen.getByLabelText(
            /test input/i
        ) as HTMLInputElement;
        expect(inputBox.placeholder).toBeTruthy();
    });

    it("should have a placeholder", () => {
        const placeholder = "this is a placeholder";
        render(
            <InputText
                type="text"
                name={name}
                id={id}
                label={label}
                placeholder={placeholder}
            />
        );
        const inputBox = screen.getByLabelText(
            /test input/i
        ) as HTMLInputElement;
        expect(inputBox.placeholder).toBe(placeholder);
    });

    it("should have default id value", () => {
        const def = name + "Id";
        render(<InputText type="text" name={name} label={label} />);
        const inputBox = screen.getByLabelText(
            /test input/i
        ) as HTMLInputElement;
        expect(inputBox.id).toBe(def);
    });

    it("should have custom id value", () => {
        render(<InputText type="text" name={name} id={id} label={label} />);
        const inputBox = screen.getByLabelText(
            /test input/i
        ) as HTMLInputElement;
        expect(inputBox.id).toBe(id);
    });

    it("should handle onChange function", () => {
        const handleClick = jest.fn();
        render(
            <InputText
                type="text"
                handler={handleClick}
                name={name}
                id={id}
                label={label}
            />
        );
        const inputBox = screen.getByLabelText(
            /test input/i
        ) as HTMLInputElement;
        fireEvent.change(inputBox, { target: { value: "h" } });
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
