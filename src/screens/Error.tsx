import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SectionContainer from "../components/SectionContainer";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%"
  },
  errorCode: {
    paddingRight: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderRight: `0.0625rem solid ${theme.palette.grey["800"]}`
  }
}));

function Error(): React.FunctionComponentElement<{}> {
  const styles = useStyles();

  return (
    <SectionContainer>
      <Grid
        container
        className={styles.root}
        justify="center"
        alignItems="center"
      >
        <Typography className={styles.errorCode} variant="h3">
          404
        </Typography>
        <Typography variant="h5">Page not found</Typography>
      </Grid>
    </SectionContainer>
  );
}

export default Error;
