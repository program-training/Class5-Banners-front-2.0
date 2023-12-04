import { render } from "@testing-library/react";
import DeleteBannerDialog from "./DeleteBannerDialog";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("DeleteBannerDialog", () => {
    it("Should render delete confirmation dialog", () => {
        const setOpenDialogMock = vi.fn();
        const { getByText } = render(
            <Provider store={store}>
                <DeleteBannerDialog
                    openDialog="bannerId"
                    setOpenDialog={setOpenDialogMock}
                />
            </Provider>
        );

        expect(
            getByText("Are you sure you want to delete this banner?")
        ).toBeInTheDocument();
    });
});
