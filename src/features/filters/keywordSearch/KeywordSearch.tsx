import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../../../assets/Search_Icon.svg.png";
import { Icon } from "../../../components/common/icon/button";
import { Input } from "../../../components/common/input";
import { content } from "../../../constants/content";
import type { AppDispatch, RootState } from "../../../store";
import { useEffect, useState } from "react";
import { setSearchedText } from "../filterSlice";
const { KEYWORD_SEARCH_PLACEHOLDER } = content;

const KeywordSearch = () => {
  const [keyword, setKeyword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const handleChangeSearchedText = (value: string) => setKeyword(value);
  const handleSearch = () => dispatch(setSearchedText(keyword));
  const keywordInRedux = useSelector(
    (state: RootState) => state.filters.searchedText
  );

  useEffect(() => {
    // when we reset everything, we need to reset the keyword as well
    if (keywordInRedux === "" && keyword !== "") {
      setKeyword(keywordInRedux);
    }
  }, [keywordInRedux]);

  return (
    <>
      <Input
        onChange={handleChangeSearchedText}
        placeHolder={KEYWORD_SEARCH_PLACEHOLDER}
        inputValue={keyword}
      />
      <Icon
        imagePath={SearchIcon}
        altText="Keyword Search"
        onClick={handleSearch}
      />
    </>
  );
};

export default KeywordSearch;
