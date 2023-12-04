import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import ROUTES from "../router/routes";

describe("Footer", () => {
  test("navigator", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const navigator = screen.getByTitle("title for test");
    await user.click(navigator);

    expect(screen.getByText("Company@Banners.com")).toBeInTheDocument();
  });

  test("clicking should navigate to the correct URL", async () => {
    //  userEvent הפעלה של
    const user = userEvent.setup();
    render(
      //עטיפת הקומפוננטה בראוטר
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    // תפיסת הכפתור שלחיצה עליו אמורה לשנות נתיב
    const Button = screen.getByTitle("title for test");

    //דימוי של לחיצה על הכפתור הנל
    user.click(Button);

    // הבדיקה לאחר תוצאה אסינכרונית
    await waitFor(() => {
      // בדיקה שאחרי לחיצה הנתיב השתנה לנתיב ריק
      expect(window.location.pathname).toEqual(ROUTES.home);
    });
  });
});
