import { StyledButton } from "./Button.styled";
import type { ButtonProps } from "./type";

const Button = (props: ButtonProps) => {
  const { children, onClick } = props;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
