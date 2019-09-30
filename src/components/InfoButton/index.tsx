import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/styles";

type InfoButtonProps = {} & ButtonProps;

const useStyles = makeStyles(() => ({
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
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default InfoButton;
