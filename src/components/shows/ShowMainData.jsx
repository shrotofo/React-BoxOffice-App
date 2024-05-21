import styled from 'styled-components';
import { StarIcon } from '../common/StarIcon';

const ShowMainData = ({ image, name, rating, summary, genres }) => {
  return (
    <MainDataWrapper>
      <div className="img-wrap">
        <img src={image ? image.original : '/not-found-image.png'} alt={name} />
      </div>
      <DataSection>
        <Headline>
          <h1>{name}</h1>
          <div>
            <StarIcon active />
            <span>{rating.average || 'N/A'}</span>
          </div>
        </Headline>
        <SummaryText dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
         <SummaryText>Genres:</SummaryText> 
          <TagList>
            {genres.map(genre => (
              <span key={genre}>{genre}</span>
            ))}
          </TagList>
        </div>
      </DataSection>
    </MainDataWrapper>
  );
};

export default ShowMainData;

const SummaryText = styled.div`
  color: white; // Change the summary text color to white
`;

const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;

  .img-wrap {
    min-width: 250px;
    width: 300px;
    max-height: 450px;
    border: 1px solid #ddd;
    border-radius: 40px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;

    .img-wrap {
      margin-bottom: 20px;
      margin: auto;
    }
  }
`;

export const DataSection = styled.div`
  margin-left: 20px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
    color:#b8adad
  }

  div {
    display: flex;
    align-items: center;
  

    span {
      margin-left: 10px;
    }
  }
`;

export const TagList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  span {
    margin: 6px;
    margin-bottom: 0;
    color: blue;
    background-color: #d0c9ff;
    padding: 3px 13px;
    border-radius: 20px;
    font-size: 14px;
  }
  
`;
