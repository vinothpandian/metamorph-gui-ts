import React from "react";
import Container, { ContainerProps } from "@material-ui/core/Container";
import { makeStyles, CSSProperties } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

type StyleProps<T> = {
  gradientBackground?: boolean;
  solidBackground?: string;
  fullPage?: boolean;
};

type SectionContainerProps = {
  children: React.ReactNode;
} & StyleProps<boolean> &
  ContainerProps;

const useStyles = makeStyles((theme: Theme) => ({
  root: ({
    gradientBackground,
    solidBackground,
    fullPage
  }: StyleProps<boolean>): CSSProperties => ({
    height: fullPage ? "100vh" : "calc(100vh - 4.25rem)",
    background: gradientBackground
      ? `linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) 59.57%,
      rgba(135, 163, 48, 0.8) 97.07%
    )`
      : solidBackground || theme.palette.common.white
  })
}));

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  gradientBackground,
  solidBackground,
  fullPage,
  ...props
}) => {
  const styles = useStyles({ gradientBackground, solidBackground, fullPage });

  return (
    <Container
      maxWidth={false}
      component="section"
      className={styles.root}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </Container>
  );
};

export default SectionContainer;
