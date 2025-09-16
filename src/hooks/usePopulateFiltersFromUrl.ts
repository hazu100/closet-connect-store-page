import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFiltersFromUrl } from "../features/filters/filterSlice";
import type { AppDispatch } from "../store";
import { content } from "../constants/content";

export const usePopulateFiltersFromUrl = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { PRICING_OPTION_QUERY_PARAM } = content;

  useEffect(() => {
    const searchString = window.location.search;
    if (searchString.includes(PRICING_OPTION_QUERY_PARAM)) {
      const params = new URLSearchParams(searchString);
      const pricingOptionsParam = params.get(PRICING_OPTION_QUERY_PARAM);

      if (pricingOptionsParam) {
        const pricingOptions = pricingOptionsParam
          .split(",")
          .map((value) => Number(value));
        dispatch(setFiltersFromUrl(pricingOptions ?? []));
      }
    }
  }, [location.search]);
};
