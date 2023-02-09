import React, { useState } from "react";
import Input from "../Input";

export default {
  title: "BaseComponents/Input",
  component: Input,
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    type: { control: "text" },
    name: { control: "text" },
    color: { control: { type: "color" } },
    value: { control: "text" },
    placeholder: { control: "text" },
    hasLegend: { control: "boolean" },
  },
};

export const Default = (props) => {
  return <Input {...props} />;
};

export const Value = (props) => {
  return <Input label="User Name" value="AFEK" {...props} />;
};

export const LegendInput = (props) => {
  return <Input label="User Name" value="AFEK" hasLegend {...props} />;
};

export const Dynamic = (props) => {
  const [value, setValue] = useState("AFEK");

  return (
    <Input
      label="User Name"
      value={value}
      {...props}
      onChange={(e) => {
        const v = e.target.value;
        setValue(v);
      }}
    />
  );
};

export const Checkbox = (props) => {
  const [value, setValue] = useState(true);

  return (
    <Input
      id="ok"
      label="Are you ok?"
      type="checkbox"
      value={value}
      {...props}
      onChange={(e) => {
        const v = e.target.checked;
        setValue(v);
      }}
    />
  );
};

const Template = (args) => <Input {...args} />;
export const Custom = Template.bind({});
Custom.args = {};
