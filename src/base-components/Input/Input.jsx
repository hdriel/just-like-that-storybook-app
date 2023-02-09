import React from "react";
import PropTypes from "prop-types";

import { InputStyled, Label, Legend, Fieldset } from "./Input.styled";

export default function Input({
  id,
  name,
  type,
  label,
  onChange,
  value,
  placeholder,
  disabled,
  hasLegend,
  color,
}) {
  const labelInput = (
    <Label htmlFor={id} color={color}>
      {label}
    </Label>
  );

  return (
    <>
      <Fieldset disabled={disabled} hasLegend={hasLegend}>
        {hasLegend ? <Legend>{labelInput}</Legend> : labelInput}
        <InputStyled
          id={id}
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          checked={value}
          placeholder={placeholder}
          color={color}
        />
      </Fieldset>
    </>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  hasLegend: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ]),
};

Input.defaultProps = {
  id: undefined,
  name: undefined,
  label: "Label Input: ",
  value: "",
  placeholder: "it's a placeholder here",
  onChange: undefined,
  type: "text",
  disabled: false,
  hasLegend: false,
};
