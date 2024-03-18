import React from "react";
import { Container } from "./style";

const Button = ({ onClick, children, $borderRadius }) => {
  return (
    <Container onClick={onClick} $borderRadius={$borderRadius}>
      {children}
    </Container>
  );
};

export default Button;
