import { render, screen, fireEvent } from "@testing-library/react";
import SignUpSubmitButton from "./SignUpSubmitButton";

describe("SignUpSubmitButton component", () => {
    it("renders button correctly", () => {
        render(<SignUpSubmitButton />);
        const buttonElement = screen.getByRole("button", { name: /submit/i });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent("Submit");
    });

    it("calls onClick handler when clicked", () => {
        const onClickMock = vi.fn();
        render(<SignUpSubmitButton onClick={onClickMock} />);
        const buttonElement = screen.getByRole("button", { name: /submit/i });
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it("renders button with correct class", () => {
        render(<SignUpSubmitButton />);
        const buttonElement = screen.getByRole("button", { name: /submit/i });
        expect(buttonElement).toHaveClass("MuiButton-containedPrimary"); // Ensure correct classes for MUI styling
    });
});
