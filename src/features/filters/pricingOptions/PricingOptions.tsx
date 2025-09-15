import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components/common/button";
import { Checkbox } from "../../../components/common/checkbox";
import { Text } from "../../../components/common/text";
import { content } from "../../../constants/content";
import { StyledOptionsWrapper } from "./PricingOptions.styled";
import type { AppDispatch, RootState } from "../../../store";
import { resetAll, setFilters } from "../filterSlice";

const PricingOptions = () => {
  const params = new URLSearchParams();
  const { PAID, FREE, VIEW_ONLY, PRICING_OPTIONS, RESET_BUTTON } = content;
  const dispatch = useDispatch<AppDispatch>();
  const currentFilters = useSelector(
    (state: RootState) => state.filters.filters
  );

  const handleChangeFilters = (id: string, value: boolean) => {
    const pricingOption = Number(id);
    let updatedFilters = [...currentFilters];
    if (value) {
      updatedFilters = [...updatedFilters, pricingOption];
      dispatch(setFilters(updatedFilters));
    } else {
      updatedFilters = updatedFilters.filter(
        (option) => option !== pricingOption
      );
      dispatch(setFilters(updatedFilters));
    }
    params.append("pricingOptions", updatedFilters.join(","));
    const newURL = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newURL);
  };

  const handleResetFilters = () => {
    const cleanURL = window.location.href.split("?")[0];
    window.history.pushState({}, "", cleanURL);
    dispatch(resetAll());
  };

  return (
    <>
      <StyledOptionsWrapper>
        <Text text={PRICING_OPTIONS} color="#47474e" />
        <Checkbox
          label={PAID}
          id={"0"}
          isChecked={currentFilters.includes(0)}
          onChange={handleChangeFilters}
        />
        <Checkbox
          label={FREE}
          id={"1"}
          isChecked={currentFilters.includes(1)}
          onChange={handleChangeFilters}
        />
        <Checkbox
          label={VIEW_ONLY}
          id={"2"}
          isChecked={currentFilters.includes(2)}
          onChange={handleChangeFilters}
        />
      </StyledOptionsWrapper>
      <Button onClick={handleResetFilters}>{RESET_BUTTON}</Button>
    </>
  );
};

export default PricingOptions;
