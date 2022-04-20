import React from 'react';

function useDebounceSearch(search, delay) {
  const [value, setValue] = React.useState();
  React.useEffect(() => {
    // update search value after delay
    const handler = setTimeout(() => {
      setValue(search);
    }, delay);
    // clear delay
    return () => {
      clearTimeout(handler);
    };
  }, [search, delay]);
  // return delay
  return value;
}

export default useDebounceSearch;
