import { StyledText } from "./Text.styled";
import type { TextProps } from "./type";

const Text = (props: TextProps) => {
  const { text, fontSize = 1, color = "white" } = props;
  return (
    <StyledText fontSize={fontSize} color={color}>
      {text}
    </StyledText>
  );
};

export default Text;
