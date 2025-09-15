import { StyledIcon } from "./Icon.styled";
import type { IconProps } from "./type";

const Icon = (props: IconProps) => {
  const { imagePath, altText, onClick } = props;
  return <StyledIcon src={imagePath} alt={altText} onClick={onClick}/>;
};

export default Icon;
