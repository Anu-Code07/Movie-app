import React from 'react';
import Actorcard from './ActorCard';
import IMG from '../../images/not-found.png';
import { FlexGrid } from '../styled';

function Actorgrid({ data }) {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <Actorcard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMG}
        />
      ))}
    </FlexGrid>
  );
}

export default Actorgrid;
