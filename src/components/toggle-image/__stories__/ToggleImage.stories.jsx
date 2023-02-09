import React, { useState } from "react";
import ToggleImage from "../ToggleImage";
import img1 from "../../../assets/bulb-off.png";
import img2 from "../../../assets/bulb-on.png";
import img3 from "../../../assets/plant.png";

export default {
  title: "Components/ToggleImage",
  component: ToggleImage,
};

const dummyProps = {
  images: [
    { src: img1, width: 200, height: 200 },
    { src: img2, width: 200, height: 200 },
    { src: img3, width: 200, height: 200 },
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
    { src: img1, width: 200, height: 200 },
    { src: img2, width: 200, height: 200 },
  ],
  imageIndex: 0,
};
