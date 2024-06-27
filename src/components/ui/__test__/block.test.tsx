import { render, screen } from "@testing-library/react";
import Block from "../block";

describe("Custom error block component", () => {
    const blockImg = "/image.jpg"
    const blockDesc = "This is a mock block description.";
    const blockTitle = "This is a block title.";
    const blockMsg = " This is a block error message.";
    it("should render on the screen", () => {
        render(
            <Block
                image={blockImg}
                desc={blockDesc}
                title={blockTitle}
                message={blockMsg}
            />
        );
        const block = screen.getByRole("presentation");
        expect(block).toBeInTheDocument();
    });

    it("should have an illustration in the block", () => {
        render(
            <Block
                image={blockImg}
                desc={blockDesc}
                title={blockTitle}
                message={blockMsg}
            />
        );
        const block = screen.getByAltText(blockDesc);
        expect(block).toBeInTheDocument();
    });
});
