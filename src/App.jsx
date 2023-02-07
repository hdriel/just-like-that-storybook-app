import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Title,
  Button,
  Spinner,
  Input,
  PasswordInputStyled,
  Root,
} from "./App.styled";
import { ToggleTheme } from "./components/toggle-theme/ToggleTheme";

// light theme
const LightTheme = {
  id: "light",
  primaryColor: "#F8049C",
  secondaryColor: "#fdd54f",
  bodyBackgroundColor: "white",
  bodyFontColor: "black",
};

// dark theme
const DarkTheme = {
  id: "dark",
  primaryColor: "#f6f600",
  secondaryColor: "midnightblue",
  bodyBackgroundColor: "black",
  bodyFontColor: "white",
};

const App = () => {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((t) => (t.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <Root>
        <ToggleTheme />
        <Title size={15} className="colored-text">
          Hello React
        </Title>
      </Root>
    </ThemeProvider>
  );
};

export default App;
