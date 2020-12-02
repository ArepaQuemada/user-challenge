import { useState, createContext } from 'react';

export const FiltersContext = createContext();

export const initialStateFilters = {
  name: '',
  email: '',
  cities: [],
};

/**
 * Global state management provider to handle filters
 * @param {Object} props 
 */
export const FiltersProvider = (props) => {
  const [filters, setfilters] = useState(initialStateFilters);
  return (
    <FiltersContext.Provider value={{ filters, setfilters }}>
      {props.children}
    </FiltersContext.Provider>
  );
};
