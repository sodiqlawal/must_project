import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/atoms/button/Button";
import { ReactElement } from "react";

const defaultProps: {
    children: any;
    onClick: () => void;
    type: "submit" | "button";
    disabled: boolean;
} = {
    children: <div>Submit</div>,
    onClick: jest.fn(),
    type: "submit",
    disabled: false,
};

const setupButton = (props = defaultProps) => render(<Button {...props} />);

describe("The <Button /> component", () => {

    it("should match snapshot", () => {
        const { asFragment } = setupButton();

        expect(asFragment()).toMatchSnapshot()
    });

    it("should render the button and content", () => {
        setupButton();

        const button = screen.getByRole("button", { name: /Submit/i });

        expect(button).toBeInTheDocument();
    });

    it("should call the click handler", () => {
        setupButton();

        const button = screen.getByRole("button", { name: /Submit/i });

        fireEvent.click(button);

        expect(defaultProps.onClick).toHaveBeenCalled();
    });

    it("should disable button if disabled is true", () => {
        defaultProps.disabled = true;
        setupButton();

        const button = screen.getByRole("button", { name: /Submit/i });

        expect(button).toBeDisabled();
    });

});
