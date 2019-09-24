import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/core";

type LinkProps = {
  exact?: boolean;
  to: string;
  onClick: () => void;
  children: string;
};

const Link: React.FC<LinkProps> = ({ exact, to, onClick, children }) => {
  return (
    <Box pr={["2.5rem", "2rem"]}>
      <NavLink
        to={to}
        exact={exact}
        activeStyle={{
          color: "#87A330"
        }}
        onClick={onClick}
      >
        {children}
      </NavLink>
    </Box>
  );
};

export default Link;
