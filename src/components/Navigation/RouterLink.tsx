import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

const RouterLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  // eslint-disable-next-line react/jsx-props-no-spreading
  (props, ref) => <NavLink innerRef={ref} {...props} />
);

RouterLink.displayName = "Link";

export default RouterLink;
