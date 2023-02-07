import styled, { css, keyframes } from "styled-components";

export const Root = styled.div((props) => ({
  color: props.theme.bodyFontColor,
  backgroundColor: props.theme.bodyBackgroundColor,
}));

export const Title = styled.h1`
  color: blue;
  font-size: ${(props) => props.size ?? 18}px;

  &.colored-text {
    color: ${(props) => props.theme.primaryColor};
  }
`;

const largeStyles = ({ large }) => {
  return large
    ? css`
        padding: 10px;
        border-radius: 5px;
        font-size: 1.5em;
      `
    : css`
        padding: 8px;
        border-radius: 4px;
        font-size: 1em;
      `;
};

export const Button = styled.button`
  color: green;
  display: flex;
  align-items: center;
  gap: 10px;

  & .colored-text {
    color: cornflowerblue;
  }

  ${Title} {
    color: red;
  }
`;

export const Input = styled.input`
  padding: 4px 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
  font-family: sans-serif;
  width: 100%;
  box-sizing: border-box;
  height: 40px;

  & .colored-text {
    color: cornflowerblue;
  }
`;

export const PasswordInputStyled = styled(Input).attrs(() => ({
  type: "password",
  placeholder: "Password",
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }  
    to {
       transform: rotate(360deg);
    }
 `;

export const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid #f8049c;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`;
