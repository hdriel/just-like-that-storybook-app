import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "../../base-components/Input/Input";

export default function SurpriseInput({
  label,
  placeholder,
  defaultColor,
  disabled,
  value,
  onChange,
  defaultValue,
  onSurprise,
  surpriseInputs,
}) {
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    const surprise = surpriseInputs.find(
      (s) => s?.name?.toLowerCase() === value?.toLowerCase()
    );

    if (surprise) onSurprise?.(surprise);
    setColor(surprise ? surprise.color : defaultColor);
  }, [value]);

  return (
    <Input
      label={label}
      placeholder={placeholder}
      hasLegend={false}
      type="text"
      disabled={disabled}
      value={value}
      onChange={onChange}
      color={color}
    />
  );
}

SurpriseInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultColor: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  onSurprise: PropTypes.func,
  surpriseInputs: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, color: PropTypes.string })
  ),
};

SurpriseInput.defaultProps = {
  label: "",
  placeholder: "",
  defaultColor: "#000000",
  disabled: false,
  defaultValue: "",
  onSurprise: undefined,
  surpriseInputs: [],
};
