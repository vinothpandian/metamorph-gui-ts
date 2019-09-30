import React from "react";
import { Link, LinkProps, NavLink, NavLinkProps } from "react-router-dom";

const RouterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link innerRef={ref} {...props} />
);

RouterLink.displayName = "RouterLink";

const RouterNavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => <NavLink innerRef={ref} {...props} />
);

RouterNavLink.displayName = "RouterNavLink";

export { RouterLink, RouterNavLink };
