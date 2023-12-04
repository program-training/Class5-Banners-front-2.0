import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Pending from "./Pending";

describe("Pending component", () => {
  test("renders CircularProgress when pending", () => {
    render(<Pending />);
    const circularProgress = screen.getByRole("progressbar");
    expect(circularProgress).toBeInTheDocument();
  });
});
