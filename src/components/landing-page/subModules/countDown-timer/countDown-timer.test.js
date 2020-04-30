import React from "react";
import { render } from "@testing-library/react";
import { CountDownTimer } from "./countDown-timer.component.jsx";

test("renders LandingPageComponent", () => {
  const { getByText } = render(<CountDownTimer />);
  const dropText = getByText("LEEZY BOOST 103");
  expect(dropText).toBeInTheDocument();
});
