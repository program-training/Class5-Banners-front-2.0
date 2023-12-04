import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import UserMenu from "./UserMenuLoggedOut";
import ROUTES from "../router/routes";

describe("UserMenu", () => {
  test("opens user menu", async () => {
    render(
      <BrowserRouter>
        <UserMenu />
      </BrowserRouter>
    );

    const userMenuButton = screen.getByRole("button", {
      name: "Open user menu",
    });
    await userEvent.click(userMenuButton);

    const signUpMenuItem = screen.getByRole("menuitem", { name: "Sign Up" });
    const loginMenuItem = screen.getByRole("menuitem", { name: "Login" });

    expect(signUpMenuItem).toBeInTheDocument();
    expect(loginMenuItem).toBeInTheDocument();
  });

  test("navigates to sign-up page", async () => {
    render(
      <BrowserRouter>
        <UserMenu />
      </BrowserRouter>
    );

    const userMenuButton = screen.getByRole("button", {
      name: "Open user menu",
    });
    await userEvent.click(userMenuButton);

    const signUpMenuItem = screen.getByRole("menuitem", { name: "Sign Up" });
    await userEvent.click(signUpMenuItem);

    expect(window.location.pathname).toBe(ROUTES.SignUpPage);
  });

  test("navigates to login page", async () => {
    render(
      <BrowserRouter>
        <UserMenu />
      </BrowserRouter>
    );

    const userMenuButton = screen.getByRole("button", {
      name: "Open user menu",
    });
    await userEvent.click(userMenuButton);

    const loginMenuItem = screen.getByRole("menuitem", { name: "Login" });
    await userEvent.click(loginMenuItem);

    expect(window.location.pathname).toBe(ROUTES.LogInPage);
  });
});
