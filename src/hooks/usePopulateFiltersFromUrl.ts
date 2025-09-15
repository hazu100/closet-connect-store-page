import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFiltersFromUrl } from "../features/filters/filterSlice";
import type { AppDispatch } from "../store";

export const usePopulateFiltersFromUrl = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pricingOptions = params.get("pricingOptions")?.split(',').map((value) => Number(value));
    dispatch(setFiltersFromUrl(pricingOptions ?? []));
  }, [location.search]);
};
