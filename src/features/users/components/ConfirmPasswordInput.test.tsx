import ConfirmPasswordInput from "./ConfirmPasswordInput";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Confirm Password Input", () => {
  test("confirm", async () => {
    render(
      <BrowserRouter>
        <ConfirmPasswordInput
          ConfirmPassword="222"
          isValidConfirmPassword={false}
          prevPassword="123"
          setConfirmPassword={vi.fn()}
          setIsValidConfirmPassword={vi.fn()}
        />
      </BrowserRouter>
    );

    const confirm = screen.queryByText(/passwords doesn't match/i);

    expect(confirm).toBeInTheDocument();
  });
});
