import React from "react";
import Card from "../Card";

export default {
  title: "Components/Card",
  component: Card,
};

export const Default = () => {
  return <Card />;
};

const Template = (args) => <Card {...args} />;
export const Custom = Template.bind({});
Custom.args = {};
