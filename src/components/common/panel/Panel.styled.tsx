import styled from "styled-components";
import type { StyledPanelProps } from "./type";

export const StyledPanel = styled.div<StyledPanelProps>`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 2.5rem;
  border-radius: 0.2rem;
  background-color: ${({ bgColor }) => bgColor};
  margin-bottom: 2rem;
`;
