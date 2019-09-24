import React from "react";
import "./App.scss";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
