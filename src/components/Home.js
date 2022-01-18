import React from "react";
import Section from "./Section";

const Home = () => {
  return (
    <div>
      <Section
        title="Tesla Model S"
        description=" Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Tesla Model Y"
        description=" Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Tesla Model 3"
        description=" Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Tesla Model X"
        description=" Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightButtonText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Order now"
      />
    </div>
  );
};

export default Home;
