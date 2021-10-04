import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../context/auth-context";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme } from "../styles/theme";

function AppProviders({ children }) {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </AuthProvider>

    </Router>
  );
}

export default AppProviders;
