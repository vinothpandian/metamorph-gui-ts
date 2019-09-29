import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles, Typography, Theme, Link } from "@material-ui/core";
import RouterLink from "./RouterLink";

const useStyles = makeStyles((theme: Theme) => ({
  common: {
    "&:hover": {
      color: `${theme.palette.primary.main} !important`
    }
  },
  meta: {
    // Temp because of Issue: https://github.com/mui-org/material-ui/issues/15777
    fontFamily: "Roboto Mono",
    fontSize: "2.5rem",
    fontWeight: 100,
    paddingLeft: theme.spacing(2),
    color: `${theme.palette.common.black} !important`
  },
  morph: {
    // Temp because of Issue: https://github.com/mui-org/material-ui/issues/15777
    fontFamily: "Roboto Mono",
    fontSize: "2.5rem",
    fontWeight: 100,
    color: `${theme.palette.primary.main} !important`
  }
}));

const Logo = () => {
  const styles = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Link component={RouterLink} to="/" exact underline="none">
        <Typography component="span" className={styles.meta}>
          Meta
        </Typography>
        <Typography component="span" className={styles.morph}>
          Morph
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;
