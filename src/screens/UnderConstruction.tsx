import React from "react";
import { Flex, Image, Heading } from "@chakra-ui/core";

const background = require("../assets/images/metamorph_under_construction.svg");

function UnderConstruction() {
  return (
    <Flex height="100vh" justifyContent="center">
      <Flex
        width={["100vw", "100vw", "90vw", "75vw"]}
        height="100vh"
        justify="center"
        align="center"
        direction="column"
      >
        <Image
          width={["80%", "70%", "60%", "50%"]}
          src={background}
          alt="Under Construction"
        />
        <Heading as="h1" fontSize={["1.5rem", "2rem"]} fontWeight={400}>
          Under Construction
        </Heading>
      </Flex>
    </Flex>
  );
}

export default UnderConstruction;
