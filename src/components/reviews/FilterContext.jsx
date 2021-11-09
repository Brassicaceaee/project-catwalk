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
  // Filter is an object that stores whether a review of a certain rating should be shown or not. Each rating defaults to true and can be toggled with the updateFilter function
  const [filter, setFilter] = useState({
    5: true,
    4: true,
    3: true,
    2: true,
    1: true
  });

  const updateFilter = (rating) => {
    // setFilter won't recognize changes if we change filter and try to use that to setFilter so we need to make a copy.
    let newFilter = Object.assign({}, filter);
    if (newFilter[rating] !== undefined) {
      newFilter[rating] = !newFilter[rating];
      setFilter(newFilter);
    }
  }

  return (
    <FilterContext.Provider value={filter}>
      <FilterUpdate.Provider value={updateFilter}>
        {children}
      </FilterUpdate.Provider>
    </FilterContext.Provider>
  )
}