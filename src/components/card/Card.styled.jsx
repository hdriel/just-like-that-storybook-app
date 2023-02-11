import styled from "styled-components";

export const Root = styled.div`
  border: 1px solid gray;
  box-shadow: 1px 2px 6px grey;
  border-radius: 8px;
  padding: 2em 0.5em 0;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  width: 300px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 2 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1 2 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
