import { Link, useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Cast from '../components/shows/Cast';
import Seasons from '../components/shows/Seasons';
import Details from '../components/shows/Details';
import { TextCenter } from '../components/common/TextCenter';
import styled from 'styled-components';

const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  if (showError) {
    return <TextCenter>We have an error: {showError.message}</TextCenter>;
  }

  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Go back home</Link>
        </BackHomeWrapper>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  return <TextCenter>Data is loading...</TextCenter>;
};

export default Show;

const ShowPageWrapper = styled.div`
  padding: 0 20px;
  @media only screen and (min-width: 516px) {
    padding: 0 40px;
  }
  @media only screen and (min-width: 768px) {
    padding: 0 60px;
  }
  @media only screen and (min-width: 992px) {
    padding: 0 80px;
  }
`;

const BackHomeWrapper = styled.div`
  margin: 20px 0;
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
    color:#b8adad
  }
`;
