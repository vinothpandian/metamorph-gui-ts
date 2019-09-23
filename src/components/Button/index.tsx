import * as React from "react";
import { Button as CButton } from "@chakra-ui/core";

export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
}

const Button: React.FC<IButtonProps> = ({ onClick, children }) => (
  <CButton onClick={onClick} variantColor="green" variant="solid">
    {children}
  </CButton>
);

Button.defaultProps = {
  children: null,
  onClick: () => {}
};

export default Button;
