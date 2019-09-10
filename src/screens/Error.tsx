import React from "react";
import { Heading, Flex, Text } from "@chakra-ui/core";

function Error() {
  const padding = "3";

  return (
    <Flex height="100%" justifyContent="center" alignItems="center">
      <Heading
        as="h1"
        fontSize="2.5rem"
        fontWeight="normal"
        pr={padding}
        borderRight="1px solid"
        borderRightColor="gray"
      >
        404
      </Heading>
      <Text pl={padding}>Page not found</Text>
    </Flex>
  );
}

export default Error;
