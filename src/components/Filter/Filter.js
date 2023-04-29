import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "redux/constants";
import { getStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filtersSlice";

import { FilterWrap, FilterInput } from "./Filter.styled";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = e => dispatch(setStatusFilter(e.target.value));

  return (
    <FilterWrap>
      <FilterInput value={filter} onChange={handleFilterChange}>
        <option value={statusFilters.all}>all</option>
        <option value={statusFilters.follow}>follow</option>
        <option value={statusFilters.followings}>followings</option>
      </FilterInput>
    </FilterWrap>
  );
};
