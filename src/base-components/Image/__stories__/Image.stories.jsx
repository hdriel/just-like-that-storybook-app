import React from "react";
import Image from "../Image";
import plantImage from "../../../assets/bulb-off.png";

export default {
  title: "BaseComponents/Image",
  component: Image,
  argTypes: {
    src: { control: "file", accept: "image/*" },
    width: { control: { type: "number", step: 50 } },
    height: { control: { type: "number", step: 50 } },
  },
};

export const Default = (props) => {
  return <Image src={plantImage} {...props} />;
};

export const Width500 = (props) => {
  return <Image src={plantImage} width={500} {...props} />;
};

export const Height200 = (props) => {
  return <Image src={plantImage} height={200} {...props} />;
};

const Template = (args) => <Image {...args} />;
export const Custom = Template.bind({});
Custom.args = {
  src: plantImage,
};
