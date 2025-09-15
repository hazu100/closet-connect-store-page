import { Panel } from "../../common/panel";
import { StyledImage } from "./Header.styled";

const Header = () => {
  return (
    <header>
      <nav>
        <Panel>
          <StyledImage></StyledImage>
        </Panel>
      </nav>
    </header>
  );
};

export default Header;
