import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FirstContainer from "../components/FirstContainer";

const GradientContainer = styled(FirstContainer)`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 59.57%,
    rgba(135, 163, 48, 0.8) 97.07%
  );
`;

const SolidContainer = styled(FirstContainer)`
  background: linear-gradient(180deg, rgba(135, 163, 48, 0.8), #87a330);
`;

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) 59.57%,
      rgba(135, 163, 48, 0.8) 97.07%
    )`
  }
});

const Home = () => {
  const styles = useStyles();
  return <FirstContainer>Gradient?</FirstContainer>;
};

export default Home;
