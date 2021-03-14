import React from "react";
import * as s from "./Button.styled";

interface Props {
  height?: string;
  onClick?: any;
}

export const Button: React.FC<Props> = ({
  children,
  height = "40px",
  onClick,
}): React.ReactElement => {
  return (
    <s.Button type="button" height={height} onClick={onClick}>
      {children}
    </s.Button>
  );
};
