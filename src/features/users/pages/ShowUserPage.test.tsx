import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import ShowUserPage from "./ShowUserPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("ShowUserPage", () => {
  test("renders user profile information", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ShowUserPage />
        </Provider>
      </BrowserRouter>
    );

    const userProfileTitle = screen.getByRole("heading", { level: 4 });
    const usernameText = screen.getByText(/Username:/i);
    const userIdText = screen.getByText(/User id:/i);
    const adminStatusText = screen.getByText(/Admin Status:/i);

    expect(userProfileTitle).toBeInTheDocument();
    expect(usernameText).toBeInTheDocument();
    expect(userIdText).toBeInTheDocument();
    expect(adminStatusText).toBeInTheDocument();
  });
});
