import { useReducer, useEffect } from 'react';

export const usePersistantReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persistedValue = localStorage.getItem(localStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

export const starredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return [...currentStarred, action.showId];
    case 'UNSTAR':
      return currentStarred.filter((showId) => showId !== action.showId);
    default:
      return currentStarred;
  }
};
