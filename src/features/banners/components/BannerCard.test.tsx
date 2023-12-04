import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BannerCard from "./BannerCard";

const sampleProduct = {
  id: 1,
  title: "Sample Product",
  description: "This is a sample product",
  imageUrl: "sample-image-url.jpg",
  category: 'test'
};

describe("banner card", () => {
  test("renders BannerCard with sample product", () => {
    render(<BannerCard selectedProduct={sampleProduct} />);
    const title = screen.getByText("Sample Product");
    const description = screen.getByText("This is a sample product");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
