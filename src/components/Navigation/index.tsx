import React from "react";
import { Box, Collapse, IconButton } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import Link from "./Link";
import Logo from "./Logo";

const Navigation: React.FC<{}> = () => {
  const [showNav, setShowNav] = React.useState<boolean>(false);

  const toggleNav = (): void => {
    setShowNav(!showNav);
  };

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        px={[2, 5]}
        py={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />
        <Box display={["flex", "flex", "flex", "none"]}>
          <IconButton size="medium" onClick={toggleNav}>
            <Menu />
          </IconButton>
        </Box>
        <Box
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
        </Box>
      </Box>
      <Collapse in={showNav}>
        <Box
          display={["flex", "flex", "flex", "none"]}
          width="100%"
          bgcolor="white"
          px={[5, 8]}
          pb="1rem"
          flexDirection="column"
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
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navigation;
