import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";

import { makeStyles, CSSProperties } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

type InfoButtonProps = {} & ButtonProps;

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    borderRadius: "1.25rem"
  }
}));

const InfoButton: React.FC<InfoButtonProps> = ({
  children,
  ...buttonProps
}: InfoButtonProps) => {
  const styles = useStyles();
  return (
    <Button
      className={styles.button}
      color="primary"
      size="large"
      fullWidth
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default InfoButton;
