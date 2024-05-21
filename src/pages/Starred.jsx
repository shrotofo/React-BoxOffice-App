import React from 'react';
import { usePersistantReducer, starredShowsReducer } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { getShowByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';
import { TextCenter } from '../components/common/TextCenter';

const Starred = () => {
  const [starredShowsIds] = usePersistantReducer(starredShowsReducer, [], 'starredShows');

  const ids = localStorage.getItem('starredShowsids');
  const showIds = JSON.parse(ids) || [];
  

  const { data: starredShows, error: starredShowsError, isLoading } = useQuery({
    queryKey: ['starred', showIds],
    queryFn: () => getShowByIds(showIds || []),
    enabled: showIds.length > 0,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Shows loading...</div>;
  }

  if (starredShowsError) {
    return <div>Error occurred: {starredShowsError.message}</div>;
  }

  if (starredShows?.length === 0) {
    return <TextCenter>No shows</TextCenter>;
  }

  return <ShowGrid shows={starredShows} />;
};

export default Starred;
