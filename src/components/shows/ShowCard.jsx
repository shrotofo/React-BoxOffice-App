import ShowGrid from './ShowGrid';
import { SearchCard, SearchImgWrapper, StarIcon } from './../common/SearchCard';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShowCard = ({ name, image, id, summary, onStarMeClick, isStarred }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + '...'
    : 'No description';

  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <SummaryText><h1>{name}</h1></SummaryText>
      <SummaryText>{summaryStripped}</SummaryText>
      <ActionSection>
        <Link to={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </Link>
        <StarBtn type="button" onClick={() => onStarMeClick(id)}>
          {isStarred ? 'Unstar Me' : 'Star Me'}
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};

export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration-color: #ffffff;
    color: #ffffff;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
const SummaryText = styled.p`
  color: white; // Change the font color to white
`;