import React from "react";
import Image from "../Image";

export default {
  title: "BaseComponents/Image",
  component: Image,
  argTypes: {
    src: { control: "file", accept: "image/*" },
    width: { control: { type: "number", step: 50 } },
    height: { control: { type: "number", step: 50 } },
  },
};

export const Asset = (props) => {
  return <Image src="assets/bulb-off.png" {...props} />;
};

export const Default = (props) => {
  return <Image src="assets/bulb-off.png" {...props} />;
};

export const Width500 = (props) => {
  return <Image src="assets/bulb-off.png" width={500} {...props} />;
};

export const Height200 = (props) => {
  return <Image src="assets/bulb-off.png" height={200} {...props} />;
};

const Template = (args) => <Image {...args} />;
export const Custom = Template.bind({});
Custom.args = {
  src: "assets/bulb-off.png",
};
