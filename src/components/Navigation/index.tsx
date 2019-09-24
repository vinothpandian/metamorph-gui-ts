import React from "react";
import { Flex, Text, Box } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";

const Link: React.FC<{ to: string; children: string; exact?: boolean }> = ({
  exact,
  to,
  children
}) => {
  return (
    <Box pr="2rem">
      <NavLink
        to={to}
        exact={exact}
        activeStyle={{
          color: "#87A330"
        }}
      >
        {children}
      </NavLink>
    </Box>
  );
};

const Navigation: React.FC<{}> = () => {
  return (
    <Flex
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        fontFamily="Roboto Mono"
        fontSize="3rem"
        fontWeight="thin"
      >
        <Text as="span" pl={3}>
          Meta
        </Text>
        <Text color="primary" as="span">
          Morph
        </Text>
      </Flex>
      <Flex fontSize="1.5rem" fontWeight="light">
        <Link exact to="/try-it-out">
          Try it out!
        </Link>
        <Link to="/contribute">Contribute</Link>
        <Link to="/verify-our-data">Verify our data</Link>
        <Link to="/about-us">About Us</Link>
      </Flex>
    </Flex>
  );
};

export default Navigation;
