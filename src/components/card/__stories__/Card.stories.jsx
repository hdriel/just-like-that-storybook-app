import React from "react";
import Card from "../Card";

import img1 from "../../../assets/bulb-off.png";
import img2 from "../../../assets/bulb-on.png";
import img3 from "../../../assets/plant.png";

const IMAGES = [
  { src: img1, width: 200, height: 200 },
  { src: img2, width: 200, height: 200 },
  { src: img3, width: 200, height: 200 },
];

const SURPRISES = [
  { name: "Afek", color: "green", imageIndex: 1 },
  { name: "Hadriel", color: "blue", imageIndex: 2 },
];

export default {
  title: "Components/Card",
  component: Card,
};

export const Default = () => {
  return <Card />;
};

export const Full = () => {
  return <Card images={IMAGES} surprises={SURPRISES} />;
};

const Template = (args) => <Card {...args} />;
export const Custom = Template.bind({});
Custom.args = {};
