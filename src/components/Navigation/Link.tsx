import React from "react";
import { Link as MLink, Theme, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { RouterNavLink as RouterLink } from "../RouterLink";

type LinkProps = {
  exact?: boolean;
  to: string;
  onClick?: () => void;
  children: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    paddingRight: "2rem",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  }
}));

const Link: React.FC<LinkProps> = ({ exact, to, onClick, children }) => {
  const styles = useStyles();
  const theme: Theme = useTheme();

  return (
    <MLink
      component={RouterLink}
      className={styles.link}
      color="textPrimary"
      to={to}
      exact={exact}
      onClick={onClick}
      activeStyle={{
        color: theme.palette.primary.main
      }}
      underline="none"
    >
      {children}
    </MLink>
  );
};

export default Link;
