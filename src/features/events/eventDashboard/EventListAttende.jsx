import React from 'react';
import { List, Image } from 'semantic-ui-react';

const EventListAttende = ({ attendee }) => {
  return (
    <List.Item>
      <Image circular size='mini' src={attendee.photoURL} alt='user' />
    </List.Item>
  );
};

export default EventListAttende;
