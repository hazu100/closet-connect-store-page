import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Content } from "./contentList/type";
import { endPoints } from "../../constants/endpoints";

type ContentList = {
  isLoading: boolean;
  error: string | null;
  contentList: Content[];
  filteredContentList: Content[];
  visibleContentList: Content[];
  hasMore: boolean;
  limit: number;
  offset: number;
};

const initialState: ContentList = {
  isLoading: false,
  error: null,
  contentList: [],
  filteredContentList: [],
  visibleContentList: [],
  hasMore: true,
  limit: 12,
  offset: 0,
};

export const fetchContentList = createAsyncThunk(
  "products/fetchContentList",
  async () => {
    const response = await fetch(endPoints.CONTENT_LIST);
    if (!response.ok) throw new Error("Error in fetching content list");
    return await response.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilteredContentList: (state, action) => {
      const { filters, searchedText } = action.payload;
      let filteredData = [];
      const filteredByPricing =
        filters.length === 0
          ? state.contentList
          : state.contentList.filter((listItem) =>
              filters.includes(listItem.pricingOption)
            );

      const searchText = searchedText.trim().toLowerCase();
      if (!searchText) {
        filteredData = filteredByPricing;
      } else {
        filteredData = filteredByPricing.filter(
          ({ creator, title }) =>
            creator.toLowerCase().includes(searchText) ||
            title.toLowerCase().includes(searchText)
        );
      }
      state.filteredContentList = filteredData;
      state.visibleContentList = filteredData.slice(0, state.limit);
      state.offset = state.limit;
      state.hasMore = filteredData.length > state.offset;
    },
    loadMoreData: (state) => {
      const newEndPoint = state.offset + state.limit;
      const newDataSet = state.filteredContentList.slice(
        state.offset,
        newEndPoint
      );
      state.visibleContentList.push(...newDataSet);
      state.offset = newEndPoint;
      state.hasMore = state.filteredContentList.length > state.offset;
      state.isLoading = false;
    },
    setLoaderState : (state) => {
        state.isLoading = true;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchContentList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchContentList.fulfilled,
        (state, action: PayloadAction<Content[]>) => {
          state.isLoading = false;
          state.contentList = action.payload;
        }
      )
      .addCase(fetchContentList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export const { setFilteredContentList, loadMoreData, setLoaderState } =
  productSlice.actions;

export default productSlice.reducer;
