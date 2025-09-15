import { type ChangeEvent } from "react";
import type { InputProps } from "./type";
import { StyledInput } from "./Input.styled";

const Input = (props: InputProps) => {
  const { onChange, placeHolder, inputValue } = props;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <StyledInput
      type="text"
      onChange={handleInputChange}
      value={inputValue}
      placeholder={placeHolder}
    />
  );
};

export default Input;
