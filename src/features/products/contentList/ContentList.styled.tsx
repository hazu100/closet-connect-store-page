import styled from "styled-components";

export const StyledGridCardContainer = styled.div`
  display: grid;
  margin: 3rem 0;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`;
export const StyledSentinel = styled.div`
  height: 1px;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: bold;
  font-size: 1.2rem;
`;
