import React from "react";
import Box from "@material-ui/core/Box";

type InformationProps = {};

const Information: React.FC<InformationProps> = ({ children }) => (
  <Box fontSize={["1.25rem", "1.5rem", "2rem", "2.25rem"]} fontWeight={200}>
    {children}
  </Box>
);

export default Information;
