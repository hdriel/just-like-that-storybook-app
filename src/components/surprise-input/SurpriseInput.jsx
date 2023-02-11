import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "../../base-components/Input/Input";

const COLORS = {
  SURPRISE: "#0027ec",
  UNSURPRISE: "#fa0000",
};

export default function SurpriseInput({
  disabled,
  defaultValue,
  onSurprise,
  surpriseInputs,
}) {
  const [value, setValue] = useState(defaultValue);
  const [color, setColor] = useState(COLORS.UNSURPRISE);

  function onChange(e) {
    const v = e.target.value;
    setValue(v);
  }

  useEffect(() => {
    const isSurprised = surpriseInputs
      .map((s) => s.toLowerCase())
      .includes(value.toLowerCase());
    if (isSurprised) onSurprise?.(value);
    setColor(isSurprised ? COLORS.SURPRISE : COLORS.UNSURPRISE);
  }, [value]);

  return (
    <Input
      disabled={disabled}
      value={value}
      onChange={onChange}
      color={color}
    />
  );
}

SurpriseInput.propTypes = {
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  onSurprise: PropTypes.func,
  surpriseInputs: PropTypes.arrayOf(PropTypes.string),
  // ['afek', 'hadriel']
  // [{name: 'afek', color: 'blue'}, {name: 'Hadriel', color: 'green'}]
};

SurpriseInput.defaultProps = {
  disabled: false,
  defaultValue: "",
  onSurprise: undefined,
  surpriseInputs: [],
};
