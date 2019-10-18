import styled from "@emotion/styled";
import * as React from "react";

interface Props extends React.Attributes {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

function Button({ ...props }: Props) {
  return <Root tabIndex={0} {...props} />;
}

const Root = styled.span`
  display: inline-flex;
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: min-width 150ms ease-in-out 0ms, height 150ms ease-in-out 0ms,
    padding 150ms ease-in-out 0ms, background-color 150ms ease-in-out 0ms,
    border-color 150ms ease-in-out 0ms;
`;

export default Button;
