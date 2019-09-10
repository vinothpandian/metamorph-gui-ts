import React from "react";
import { Flex, Image, Heading } from "@chakra-ui/core";

const background = require("../assets/images/metamorph_under_construction.svg");

function UnderConstruction() {
  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
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
      </Flex>
      <Heading
        as="h1"
        textAlign="center"
        fontSize={["1.625rem"]}
        fontWeight={400}
      >
        Under Construction
      </Heading>
    </Flex>
  );
}

export default UnderConstruction;
