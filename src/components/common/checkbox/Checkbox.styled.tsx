import styled from "styled-components";

export const StyledWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledCheckbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 1.2rem;
  width: 1.2rem;
  background-color: #47474e;
  border-radius: 0.2rem;
  border: 1px solid white;
  cursor: pointer;
  position: relative;
  &.checked {
    background-color: rgb(66, 205, 221);
    &::after {
      content: "";
      position: absolute;
      width: 0.3rem;
      height: 0.5rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      border: solid black;
      border-width: 0 0.3rem 0.3rem 0;
    }
  }
`;
