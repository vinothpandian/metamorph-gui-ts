import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Error() {
  const padding = "3";

  return (
    <Box
      display="flex"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box pr={padding} borderRight="1px solid" borderColor="gray">
        <Typography variant="h4">404</Typography>
      </Box>
      <Box pl={padding}>
        <Typography variant="body1">Page not found</Typography>
      </Box>
    </Box>
  );
}

export default Error;
