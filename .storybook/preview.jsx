import React from "react";
import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: "dark",
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "#eaeaea" },
  },
};

export const decorators = [
  (Story, { globals: { language } }) => {
    console.log("context", language);
    return <Story />;
  },
];

export const globalTypes = {
  language: {
    name: "Theme",
    description: "Styled-components theme",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "light", title: "Light theme" },
        { value: "dark", title: "Dark theme" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
