import type { ChangeEvent } from "react";
import { StyledCheckbox, StyledWrapper } from "./Checkbox.styled";
import type { CheckboxProps } from "./type";

const Checkbox = (props: CheckboxProps) => {
  const { label, onChange, id, isChecked } = props;
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    onChange(id, checked);
  };
  return (
    <StyledWrapper>
      <StyledCheckbox
        type="checkbox"
        onChange={handleOnChange}
        checked={isChecked}
        className={isChecked ? "checked" : ""}
        id={id}
      />
      {label}
    </StyledWrapper>
  );
};

export default Checkbox;
