import styled, { css } from "styled-components";

export const InputStyled = styled.input`
  width: 97%;
  color: ${(props) => props.color};
`;

export const Fieldset = styled.fieldset`
  ${(props) => !props.hasLegend && { border: "unset" }}
`;

export const Label = styled.label`
  user-select: none;
  color: ${(props) => props.color};
`;

export const Legend = styled.legend``;
