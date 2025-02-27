import { SearchCard } from '../common/SearchCard';
const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `comes from ${country}` : 'No country known'}</p>
      {!!birthday && <p> Born {birthday}</p>}
      <p>{deathday ? `died ${deathday}` : 'alive'}</p>
    </SearchCard>
  );
};

export default ActorCard;
