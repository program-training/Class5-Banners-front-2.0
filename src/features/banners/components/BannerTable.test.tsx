import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { BannerTable } from "./BannerTable";
import { BannerInterface } from "../interface/BannerInterface";
import { vi } from "vitest";

describe("BannerTable", () => {
  it("Should navigate to '/banners/horizontal/products/{productID}' on image click", () => {
    const mockData: BannerInterface[] = [
      {
        _id: "2",
        imageURL: "image2.jpg",
        title: "Banner 2",
        authorID: "2121",
        authorUsername: "Yehuda",
        category: "phone",
        createdAt: "12-12-12",
        description: "this is banner 2",
        note: "hot sale",
        productID: "5",
        productURL: "www.product.com",
        updatedAt: "12-12-22",
      },
    ];
    render(
      <Router>
        <BannerTable setOpenDialog={() => {}} page="banner-management" />
      </Router>
    );

    // Simulate a click on the image
    const image = screen.getByRole("img", { name: "Banner 2" }); // Assuming name is accessible
    fireEvent.click(image);

    // Check if the navigation occurred correctly
    expect(window.location.pathname).toBe(
      `/banners/horizontal/products/${mockData[0].productID}`
    );
  });

  it("Should navigate to '/edit/{bannerID}' on Edit button click", () => {
    const mockData: BannerInterface[] = [
      {
        _id: "2",
        imageURL: "image2.jpg",
        title: "Banner 2",
        authorID: "2121",
        authorUsername: "Yehuda",
        category: "phone",
        createdAt: "12-12-12",
        description: "this is banner 2",
        note: "hot sale",
        productID: "5",
        productURL: "www.product.com",
        updatedAt: "12-12-22",
      },
    ];

    render(
      <Router>
        <BannerTable setOpenDialog={() => {}} page="banner-management" />
      </Router>
    );

    // Simulate a click on the Edit button
    const editButton = screen.getByTestId("EditIcon");
    fireEvent.click(editButton);

    // Check if the navigation occurred correctly
    expect(window.location.pathname).toBe(`/edit/${mockData[0]._id}`);
  });

  it("Should open delete dialog on Delete button click", () => {
    const setOpenDialogMock = vi.fn();
    render(
      <Router>
        <BannerTable
          setOpenDialog={setOpenDialogMock}
          page="banner-management"
        />
      </Router>
    );

    // Simulate a click on the Delete button icon
    const deleteButton = screen.getByTestId("DeleteIcon");
    fireEvent.click(deleteButton);

    // Check if the function to open delete dialog was called with the expected value
    // You may need to adjust this based on the behavior you've implemented in setOpenDialogMock
    expect(setOpenDialogMock).toHaveBeenCalledWith("2");
  });
});
