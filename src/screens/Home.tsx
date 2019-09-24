import React from "react";
import styled from "@emotion/styled";
import Container from "../components/Container";

const StyledContainer = styled(Container)`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 59.57%,
    rgba(135, 163, 48, 0.8) 97.07%
  );
`;

const Home = () => {
  return <StyledContainer>Hello</StyledContainer>;
};

export default Home;
