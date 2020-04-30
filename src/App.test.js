import React from "react";
import { render } from "@testing-library/react";
import { LandingPageComponent } from "./components/landing-page/landing-page.component.jsx";

test("renders logo", () => {
  const { getByText } = render(<LandingPageComponent />);
  const logoText = getByText("DROP");
  expect(logoText).toBeInTheDocument();
});
