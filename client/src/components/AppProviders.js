import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme } from "../styles/theme";

function AppProviders({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default AppProviders;
