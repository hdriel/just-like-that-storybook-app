import React from "react";
import SurpriseInput from "../SurpriseInput";

export default {
  title: "Components/SurpriseInput",
  component: SurpriseInput,
};

export const Default = () => {
  return <SurpriseInput />;
};

const Template = (args) => <SurpriseInput {...args} />;
export const Custom = Template.bind({});
Custom.args = {};
