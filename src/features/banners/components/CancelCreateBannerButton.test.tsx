import { render, fireEvent } from "@testing-library/react";
import CancelCreateBannerButton from "./CancelCreateBannerButton";

describe("CancelButton", () => {
    it("Should reset selected product and banner URL on click", () => {
        // Create mock functions for setSelectedProduct and setBannerURL
        const setSelectedProductMock = vi.fn();
        const setBannerURLMock = vi.fn();

        // Render the CancelButton component with mock functions
        const { getByRole } = render(
            <CancelCreateBannerButton
                setAutocompleteValue={vi.fn()}
                setSelectedProduct={setSelectedProductMock}
                setBannerURL={setBannerURLMock}
            />
        );

        // Simulate a click on the cancel button
        const cancelButton = getByRole("button", { name: "Cancel" });
        fireEvent.click(cancelButton);

        // Check if the functions were called with the expected values
        expect(setSelectedProductMock).toHaveBeenCalledWith(null);
        expect(setBannerURLMock).toHaveBeenCalledWith("");
    });
});
