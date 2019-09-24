import React from "react";
import { NavLink } from "react-router-dom";
import { PseudoBox } from "@chakra-ui/core";
import styled from "@emotion/styled";

type LinkProps = {
  exact?: boolean;
  to: string;
  onClick?: () => void;
  children: string;
};

const StyledNavLink = styled(NavLink)({
  "&:hover": {
    color: "#db9b08"
  }
});

const Link: React.FC<LinkProps> = ({ exact, to, onClick, children }) => {
  return (
    <PseudoBox pr={["2.5rem", "2rem"]}>
      <StyledNavLink
        to={to}
        exact={exact}
        activeStyle={{
          color: "#87A330"
        }}
        onClick={onClick}
      >
        {children}
      </StyledNavLink>
    </PseudoBox>
  );
};

export default Link;
