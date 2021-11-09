import React, { useContext, useState } from 'react';

const FilterContext = React.createContext();
const FilterUpdate = React.createContext();

export const useFilterContext = () => {
  return useContext(FilterContext);
}

export const updateFilterContext = () => {
  return useContext(FilterUpdate);
}

export const FilterProvider = ({children}) => {
  // Filter will someday be an object that stores which ratings of reviews shouldn't be filtered out.
  const [filter, setFilter] = useState(null);

  const updateFilter (item) => {
    // Somehow add or remove the input item from filter.
  }

  return (
    <FilterContext value={filter}>
      <FilterUpdate value={}>
        {children}
      </FilterUpdate>
    </FilterContext>
  )
}