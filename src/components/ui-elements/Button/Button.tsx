import React from "react";
import * as s from "./Button.styled";

interface Props {
  height?: string;
}

export const Button: React.FC<Props> = ({
  children,
  height = "40px",
}): React.ReactElement => {
  return <s.Button height={height}>{children}</s.Button>;
};
