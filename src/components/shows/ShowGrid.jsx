import React, { useReducer } from 'react';
import ShowCard from './ShowCard';
import { starredShowsReducer } from '../../lib/useStarredShows';
import  FlexGrid from '../common/FlexGrid';

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useReducer(starredShowsReducer, []);

  const ids = localStorage.getItem('starredShowsids');

  const onStarMeClick = showId => {
    let arr = JSON.parse(ids) || [];
    let newids = [...arr]

    const isStarred = starredShows.includes(showId);
    console.log(isStarred);
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });  
      newids.push(showId)
      localStorage.setItem('starredShowsids', JSON.stringify(newids));
    } else {
      newids.push(showId)
      dispatchStarred({ type: 'STAR', showId });
      localStorage.setItem('starredShowsids', JSON.stringify(newids));

    }
  };

  return (
    <FlexGrid>
      {shows && shows.map(data => (
        <ShowCard
          key={data?.show?.id}
          name={data?.show?.name}
          image={data?.show?.image ? data?.show?.image?.medium : '/not-found-image.png'}
          summary={data?.show?.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data?.show?.id)}
          id={data?.show?.id}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
