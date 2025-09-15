import {
  StyledCreator,
  StyledCreatorAndTitleWrapper,
  StyledDetails,
  StyledGridCard,
  StyledImage,
  StyledPricingDetail,
} from "./GridCard.styled";
import type { GridCardProps } from "./type";
import "react-loading-skeleton/dist/skeleton.css";

const pricingOptionsMap: { [key: number]: string } = {
  0: "PAID",
  1: "FREE",
  2: "View Only",
};

const GridCard = (props: GridCardProps) => {
  const { creator, imagePath, price, pricingOption, title } = props;

  const pricingDetail =
    pricingOption === 0
      ? `$${price.toFixed(2)}`
      : pricingOptionsMap[pricingOption];

  return (
    <StyledGridCard>
      <StyledImage src={imagePath} alt={title} />
      <StyledDetails>
        <StyledCreatorAndTitleWrapper>
          <StyledCreator>{creator}</StyledCreator>
          <span>{title}</span>
        </StyledCreatorAndTitleWrapper>
        <StyledPricingDetail>{pricingDetail}</StyledPricingDetail>
      </StyledDetails>
    </StyledGridCard>
  );
};

export default GridCard;
