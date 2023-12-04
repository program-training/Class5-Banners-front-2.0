import { render, screen } from "@testing-library/react";
import FormError from "./SignUpFormError";

describe("FormError component", () => {
    it("renders error message correctly", () => {
        render(<FormError />);
        const errorMessage = screen.getByText(
            /Please fill out all fields properly to submit/i
        );
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent(
            "Please fill out all fields properly to submit."
        );
        expect(errorMessage.tagName).toBe("P"); // Assuming Typography renders as <p>
    });
});
