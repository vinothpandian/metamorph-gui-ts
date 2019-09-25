import React from "react";
import { Flex, Box, Collapse, IconButton } from "@chakra-ui/core";
import Link from "./Link";
import Logo from "./Logo";

const Navigation: React.FC<{}> = () => {
  const [showNav, setShowNav] = React.useState<boolean>(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <Flex width="100%" direction="column">
      <Flex
        bg="white"
        w="100%"
        px={[2, 5]}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />
        <Flex display={["flex", "flex", "flex", "none"]}>
          <Box onClick={toggleNav}>
            {/* TODO: Remove temp workaround for IconButton onClick */}
            <IconButton
              aria-label="Menu"
              icon="hamburger"
              size="lg"
              variant="ghost"
            />
          </Box>
        </Flex>
        <Flex
          display={["none", "none", "none", "flex"]}
          fontSize="1.5rem"
          fontWeight="light"
        >
          <Link exact to="/try-it-out">
            Try it out!
          </Link>
          <Link to="/contribute">Contribute</Link>
          <Link to="/verify-our-data">Verify our data</Link>
          <Link to="/about-us">About Us</Link>
        </Flex>
      </Flex>
      <Collapse display={["flex", "flex", "flex", "none"]} isOpen={showNav}>
        <Flex
          w="100%"
          bg="white"
          px={[5, 8]}
          pb="2rem"
          direction="column"
          fontSize={["1.25rem", "1.5rem"]}
          fontWeight="light"
        >
          <Link onClick={toggleNav} exact to="/try-it-out">
            Try it out!
          </Link>
          <Link onClick={toggleNav} to="/contribute">
            Contribute
          </Link>
          <Link onClick={toggleNav} to="/verify-our-data">
            Verify our data
          </Link>
          <Link onClick={toggleNav} to="/about-us">
            About Us
          </Link>
        </Flex>
      </Collapse>
    </Flex>
  );
};

export default Navigation;
