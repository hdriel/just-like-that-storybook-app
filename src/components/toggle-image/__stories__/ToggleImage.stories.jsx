import React, { useState } from "react";
import ToggleImage from "../ToggleImage";

export default {
  title: "Components/ToggleImage",
  component: ToggleImage,
};

const dummyProps = {
  images: [
    { src: "assets/bulb-off.png", width: 200, height: 200 },
    { src: "assets/bulb-on.png", width: 200, height: 200 },
    { src: "assets/plant.png", width: 200, height: 200 },
  ],
};

export const Default = () => {
  return <ToggleImage {...dummyProps} />;
};

export const NotExistsImage = () => {
  return <ToggleImage images={[]} imageIndex={0} />;
};

export const Clicks = () => {
  const [index, setIndex] = useState(0);

  return (
    <ToggleImage
      {...dummyProps}
      imageIndex={index}
      onClick={(i) => setIndex(i + 1)}
    />
  );
};

const Template = (args) => <ToggleImage {...args} />;
export const Custom = Template.bind({});
Custom.args = {
  images: [
    { src: "assets/bulb-off.png", width: 200, height: 200 },
    { src: "assets/bulb-on.png", width: 200, height: 200 },
  ],
  imageIndex: 0,
};
