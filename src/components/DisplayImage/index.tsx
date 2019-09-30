import React from "react";
import { Grid, Theme } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative"
  },
  responsive: {
    width: "100%",
    height: "auto"
  }
}));

type DisplayImageProps = {
  Image: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title: string }
  >;
  alt: string;
};

const DisplayImage: React.FC<DisplayImageProps> = ({ Image, alt }) => {
  const styles = useStyles();

  return (
    <Grid item className={styles.root} xs={10} md={6}>
      <Image title={alt} className={styles.responsive} />
    </Grid>
  );
};

export default DisplayImage;
