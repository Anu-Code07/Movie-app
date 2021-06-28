/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import {} from '../misc/config';
import ShowMainData from '../shows/ShowMainData';
import Details from '../shows/Details';
import Seasons from '../shows/Seasons';
import Cast from '../shows/Cast';
import { InfoBlock, ShowPageWrapper } from './Show.styled';
import { useShow } from '../misc/custom-hook';

const Show = () => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();

  const { show, isLoading, error } = useShow(id);

  // const [show, setShow] = useState(null);
  // const [isloading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error Ocuured:{error}</div>;
  }
  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
