import React from "react";
import { render } from "@testing-library/react";
import { LandingPageComponent } from "./landing-page.component";

test("renders LandingPageComponent", () => {
  const { getByText } = render(<LandingPageComponent />);
  const zoneText = getByText("ZONE");
  expect(zoneText).toBeInTheDocument();
});
