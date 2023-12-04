import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import UserMenu from "./UserMenuLoggedIn";
import ROUTES from "../router/routes";

describe("UserMenu", () => {
  test("opens user menu", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserMenu />
        </Provider>
      </BrowserRouter>
    );

    const userMenuButton = screen.getByRole("button", {
      name: "Open user menu",
    });
    await userEvent.click(userMenuButton);

    const displayProfileMenuItem = screen.getByRole("menuitem", {
      name: "Display Profile",
    });
    const editProfileMenuItem = screen.getByRole("menuitem", {
      name: "Edit Profile",
    });
    const logoutMenuItem = screen.getByRole("menuitem", { name: "Log Out" });
    const deleteProfileMenuItem = screen.getByRole("menuitem", {
      name: "Delete Profile",
    });

    expect(displayProfileMenuItem).toBeInTheDocument();
    expect(editProfileMenuItem).toBeInTheDocument();
    expect(logoutMenuItem).toBeInTheDocument();
    expect(deleteProfileMenuItem).toBeInTheDocument();
  });

  test("navigates to display profile page", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserMenu />
        </Provider>
      </BrowserRouter>
    );

    const userMenuButton = screen.getByRole("button", {
      name: "Open user menu",
    });
    await userEvent.click(userMenuButton);

    const displayProfileMenuItem = screen.getByRole("menuitem", {
      name: "Display Profile",
    });
    await userEvent.click(displayProfileMenuItem);

    expect(window.location.pathname).toBe(ROUTES.ShowUserPage);
  });

  test("navigates to edit profile page", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserMenu />
        </Provider>
      </BrowserRouter>
    );

    const userMenuButton = screen.getByRole("button", {
      name: "Open user menu",
    });
    await userEvent.click(userMenuButton);

    const editProfileMenuItem = screen.getByRole("menuitem", {
      name: "Edit Profile",
    });
    await userEvent.click(editProfileMenuItem);

    expect(window.location.pathname).toBe(ROUTES.EditUserPage);
  });

  test("logs out the user", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserMenu />
        </Provider>
      </BrowserRouter>
    );

    const userMenuButton = screen.getByRole("button", {
      name: "Open user menu",
    });
    await userEvent.click(userMenuButton);

    const logoutMenuItem = screen.getByRole("menuitem", { name: "Log Out" });
    await userEvent.click(logoutMenuItem);
  });
});
