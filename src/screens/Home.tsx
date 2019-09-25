import React from "react";
import styled from "@emotion/styled";
import Container from "../components/Container";

const GradientContainer = styled(Container)`
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 59.57%,
    rgba(135, 163, 48, 0.8) 97.07%
  );
`;

const SolidContainer = styled(Container)`
  background: linear-gradient(180deg, rgba(135, 163, 48, 0.8), #87a330);
`;

const Home = () => {
  return (
    <>
      <GradientContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla
          asperiores eligendi nisi consectetur similique facilis sed laboriosam
          quaerat, earum explicabo sequi ullam rem sunt tenetur libero, sit
          optio placeat?
        </p>
      </GradientContainer>
      <SolidContainer height="100vh !important">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla
          asperiores eligendi nisi consectetur similique facilis sed laboriosam
          quaerat, earum explicabo sequi ullam rem sunt tenetur libero, sit
          optio placeat?
        </p>
      </SolidContainer>
    </>
  );
};

export default Home;
