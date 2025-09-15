import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/layout/header";
import { Main } from "./components/layout/main";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import {
  fetchContentList,
  setFilteredContentList,
} from "./features/products/productSlice";
import { usePopulateFiltersFromUrl } from "./hooks/usePopulateFiltersFromUrl";

function App() {
  usePopulateFiltersFromUrl();
  const dispatch = useDispatch<AppDispatch>();
  const { filters, searchedText } = useSelector(
    (state: RootState) => state.filters
  );
  const data = useSelector((state: RootState) => state.products.contentList);
  useEffect(() => {
    dispatch(fetchContentList());
  }, []);

  useEffect(() => {
    data.length > 0 &&
      dispatch(setFilteredContentList({ filters, searchedText }));
  }, [filters.length, searchedText, data.length]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
