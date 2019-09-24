import React from "react";
import "./App.scss";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import theme from "./theme";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
