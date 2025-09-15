import { StyledGridCardContainer, StyledSentinel } from "./ContentList.styled";
import { GridCard } from "../gridCard";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreData, setLoaderState } from "../productSlice";
import type { AppDispatch, RootState } from "../../../store";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";

const ContentList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loadMore = () => dispatch(loadMoreData());
  const setLoader = () => dispatch(setLoaderState());
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const visibleData = useSelector(
    (state: RootState) => state.products.visibleContentList
  );
  const hasMore = useSelector((state: RootState) => state.products.hasMore);

  const sentinelRef = useInfiniteScroll({
    callback: loadMore,
    isLoading,
    hasMore,
    setLoader,
  });

  return (
    <>
      <StyledGridCardContainer>
        {visibleData.map((cardItem) => {
          const { id, ...rest } = cardItem;
          return <GridCard key={id} {...rest} />;
        })}
      </StyledGridCardContainer>
      <StyledSentinel ref={sentinelRef}>
        {isLoading && "...Loading"}
      </StyledSentinel>
    </>
  );
};

export default ContentList;
