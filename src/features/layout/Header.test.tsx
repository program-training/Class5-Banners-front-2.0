import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import ROUTES from "../router/routes";

describe("Header", () => {
  test("renders header components", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const logoButton = screen.getByRole("button", {
      name: "go to banner management page",
    });
    const myBannersButton = screen.getByRole("button", { name: "My Banners" });

    expect(logoButton).toBeInTheDocument();
    expect(myBannersButton).toBeInTheDocument();
  });

  test("clicking logo navigates to home page", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const logoButton = screen.getByRole("button", {
      name: "go to banner management page",
    });

    await userEvent.click(logoButton);
    expect(window.location.pathname).toBe(ROUTES.home);
  });

  test("clicking 'My Banners' navigates to the 'my-banners' page", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    await userEvent.click(screen.getByText("My Banners"));

    expect(window.location.pathname).toBe(ROUTES.MyBannersPage);
  });

  test("header has correct background color", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const appBar = screen.getByRole("banner");

    expect(appBar).toHaveStyle({ backgroundColor: "#6d9edf" });
  });
});
