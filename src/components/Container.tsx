/* eslint-disable react/prefer-stateless-function */
import React from "react";
import styled from "@emotion/styled";
import { Flex } from "@chakra-ui/core";

type FlexProps = React.ComponentProps<typeof Flex>;

type ContainerProps = { children: React.ReactNode } & FlexProps;

const StyledFlex = styled(Flex)`
  height: calc(100vh - 5.75rem);

  @media (min-width: 30em) {
    height: calc(100vh - 6.5rem);
  }
`;

const Container: React.FC<ContainerProps> = ({ children, ...flexProps }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledFlex {...flexProps} as="section">
      {children}
    </StyledFlex>
  );
};

export default Container;
