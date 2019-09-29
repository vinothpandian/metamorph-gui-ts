/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

type ContainerProps = { children: React.ReactNode } & React.ComponentProps<
  typeof Container
>;

const useStyles = makeStyles({
  root: {
    height: "calc(100vh - 4.75rem)",
    background: `linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) 59.57%,
      rgba(135, 163, 48, 0.8) 97.07%
    )`
  }
});

const FirstContainer: React.FC<ContainerProps> = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container
      maxWidth={false}
      component="main"
      className={styles.root}
      {...props}
    >
      {children}
    </Container>
  );
};

export default FirstContainer;
