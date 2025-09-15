import styled from "styled-components";
import type { StyledTextProps } from "./type";

export const StyledText = styled.span<StyledTextProps>`
  font-size: ${({ fontSize }) => fontSize + "rem"};
  color: ${({ color }) => color};
`;
