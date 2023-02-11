import React from "react";
import Card from "../Card";

const IMAGES = [
  { src: "assets/bulb-off.png", width: 200, height: 200 },
  { src: "assets/bulb-on.png", width: 200, height: 200 },
  { src: "assets/plant.png", width: 200, height: 200 },
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
