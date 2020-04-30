import React from "react";
import { CountDownTimer } from "./subModules/countDown-timer/countDown-timer.component.jsx";

export const LandingPageComponent = () => {
  return (
    <section className="c-landing-page">
      <div className="c-landing-page--logo-section">
        <h2>
          <span>DROP</span>
        </h2>
        <h2>
          <span>ZONE</span>
        </h2>
      </div>
      <CountDownTimer />
    </section>
  );
};
