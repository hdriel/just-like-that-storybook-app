import React from "react";
import { action } from "@storybook/addon-actions";
import SurpriseInput from "../SurpriseInput";

export default {
  title: "Components/SurpriseInput",
  component: SurpriseInput,
};

export const Default = () => {
  return <SurpriseInput />;
};

export const Disabled = () => {
  return <SurpriseInput disabled />;
};

export const InitialValue = () => {
  return <SurpriseInput defaultValue="Initial Value" />;
};

export const IsNotSurprise = () => {
  return <SurpriseInput surpriseInputs={["Afek"]} />;
};

export const IsSurprise = () => {
  return (
    <SurpriseInput
      surpriseInputs={["Afek"]}
      defaultValue="Afek"
      onSurprise={action("onSurprise")}
    />
  );
};

export const AfekAndHadrielWords = () => {
  return (
    <SurpriseInput
      surpriseInputs={["Afek", "Hadriel"]}
      onSurprise={action("onSurprise")}
    />
  );
};

const Template = (args) => <SurpriseInput {...args} />;
export const Custom = Template.bind({});
Custom.args = {};
