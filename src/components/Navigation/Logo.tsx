import React from "react";
import { Flex, Text } from "@chakra-ui/core";

const Logo = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      fontFamily="Roboto Mono"
      fontSize={["2.5rem", "3rem"]}
      fontWeight="thin"
    >
      <Text as="span" pl={3}>
        Meta
      </Text>
      <Text color="primary" as="span">
        Morph
      </Text>
    </Flex>
  );
};

export default Logo;
