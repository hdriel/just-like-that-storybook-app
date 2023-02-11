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
  return <SurpriseInput surpriseInputs={[{ name: "Afek", color: "green" }]} />;
};

export const IsSurprise = () => {
  return (
    <SurpriseInput
      surpriseInputs={[{ name: "Afek", color: "green" }]}
      defaultValue="Afek"
      onSurprise={action("onSurprise")}
    />
  );
};

export const AfekAndHadrielWords = () => {
  return (
    <SurpriseInput
      surpriseInputs={[
        { name: "Afek", color: "green" },
        { name: "Hadriel", color: "blue" },
      ]}
      onSurprise={action("onSurprise")}
    />
  );
};

export const LabelInput = () => {
  return (
    <SurpriseInput
      label="Surprise Input"
      placeholder="guess my name"
      surpriseInputs={[
        { name: "Afek", color: "green" },
        { name: "Hadriel", color: "blue" },
      ]}
      defaultValue=""
      onSurprise={action("onSurprise")}
    />
  );
};

const Template = (args) => <SurpriseInput {...args} />;
export const Custom = Template.bind({});
Custom.args = {};
