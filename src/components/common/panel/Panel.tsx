import { StyledPanel } from "./Panel.styled";
import type { PanelProps } from "./type";

const Panel = (props: PanelProps) => {
  const { children = <></>, bgColor = "black" } = props;
  return <StyledPanel bgColor={bgColor}>{children}</StyledPanel>;
};

export default Panel;
