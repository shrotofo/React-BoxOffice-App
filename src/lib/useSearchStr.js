import { useEffect, useState } from 'react';
const usePersistedState = (intialState, sessionStorageKey) => {
  const [state, setState] = useState(() => {
    const persistedValue = sessionStorage.getItem(sessionStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : intialState;
  });
  useEffect(() => {
    localStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [state, sessionStorageKey]);
  return [state, setState];
};

export const useSearchStr = () => {
  return usePersistedState('', 'searchString');
};
