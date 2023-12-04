import { fireEvent, render, screen } from "@testing-library/react";
import BannerManagementTop from "./BannerManagementTop";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("BannerManagementTop", () => {
  it("Should navigate to '/create' on button click", () => {
    const mockProps = {
      banners: [],
      setBanners: () => {},
    };

    render(
      <Router>
        <Provider store={store}>
          <BannerManagementTop {...mockProps} />
        </Provider>
      </Router>
    );

    // Simulate a click on the "Create Banner" button
    fireEvent.click(screen.getByText("Create Banner"));

    // Check if the navigation occurred correctly
    expect(window.location.pathname).toBe("/banners/create");
  });
  it("Should have Banner Management", () => {
    // Mock props
    const mockProps = {
      banners: [], // Mock banners array
      setBanners: () => {}, // Mock setBanners function
    };
    render(
      <Router>
        <Provider store={store}>
          <BannerManagementTop {...mockProps} />
        </Provider>
      </Router>
    );
    const message = screen.getByText(/Banners/i);
    expect(message).toBeVisible();
  });
});
