import { KeywordSearch } from "../../../features/filters/keywordSearch";
import { PricingOptions } from "../../../features/filters/pricingOptions";
import { ContentList } from "../../../features/products/contentList";
import { Panel } from "../../common/panel";

const Main = () => {
  return (
    <main>
      <Panel bgColor="#202020">
        <KeywordSearch />
      </Panel>
      <Panel>
        <PricingOptions />
      </Panel>
      <ContentList />
    </main>
  );
};

export default Main;
