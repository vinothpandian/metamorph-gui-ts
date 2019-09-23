import React from "react";
import { Flex } from "@chakra-ui/core";

type FullPageProps = {
  children: React.ReactNode;
};

const FullPage: React.FunctionComponent<FullPageProps> = ({ children }) => {
  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      {children}
    </Flex>
  );
};

export default FullPage;
