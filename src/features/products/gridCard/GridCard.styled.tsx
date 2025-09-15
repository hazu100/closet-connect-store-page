import styled from "styled-components";

export const StyledGridCard = styled.div`
  display: grid;
  color: white;
  border-radius: 0.2rem;
`;
export const StyledImage = styled.img`
  border-radius: inherit;
  width: 100%;
  height: 32rem;
`;
export const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;
export const StyledCreatorAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
export const StyledCreator = styled.span`
  font-weight: bold;
`;
export const StyledPricingDetail = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;
