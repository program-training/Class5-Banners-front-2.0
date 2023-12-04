import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

describe("Error Page", () => {
  test("working", async () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    const Error = screen.getByRole("heading", {
      name: /Sorry, the page you were trying to view does not exist\./i,
    });

    expect(Error).toBeInTheDocument();
  });
});
