import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Button, Title } from "../../App.styled";

export const ToggleTheme = () => {
  const { id: themeId, setTheme } = useContext(ThemeContext);

  return (
    <Button onClick={setTheme}>
      <Title>{themeId === "dark" ? "dark mode" : "light mode"}</Title>
    </Button>
  );
};
