import React from "react";
import { theme } from "@chakra-ui/core";

export default {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#87A330",
    accent: "#DB9B08",
    black: "#010203",
    white: "#FFFAFA"
  },
  icons: {
    ...theme.icons,
    hamburger: {
      path: (
        <path
          fill="#000000"
          d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
        />
      )
    }
  }
};
