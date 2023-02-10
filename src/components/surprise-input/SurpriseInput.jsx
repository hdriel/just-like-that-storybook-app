import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../../base-components/Input/Input";

export default function SurpriseInput({
  value,
  onChange,
  onSurprise,
  surpriseInputs,
}) {
  const [color, setColor] = useState("#000000");
  return <Input value={value} onChange={onChange} color={color} />;
}

SurpriseInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSurprise: PropTypes.func,
  // surpriseInputs: PropTypes.arrayOf(), // that made storybook FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
  surpriseInputs: PropTypes.arrayOf(PropTypes.string),
  // surpriseInputs: PropTypes.array, // or replace with that
};

SurpriseInput.defaultProps = {};
