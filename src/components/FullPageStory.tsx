import React from "react";
import { Flex } from "@chakra-ui/core";
import styled from "@emotion/styled";

type FullPageStoryProps = {
  children: React.ReactNode;
};

const StyledFlex = styled(Flex)`
  height: calc(100vh - 10rem);
`;

const FullPageStory: React.FunctionComponent<FullPageStoryProps> = ({
  children
}) => {
  return (
    <StyledFlex justifyContent="center" alignItems="center" direction="column">
      {children}
    </StyledFlex>
  );
};

export default FullPageStory;
