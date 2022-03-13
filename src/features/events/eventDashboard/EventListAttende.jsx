import React from 'react';
import { List, Image } from 'semantic-ui-react';

const EventListAttende = () => {
  return (
    <List.Item>
      <Image circular size='mini' src='/assets/user.png' alt='user' />
    </List.Item>
  );
};

export default EventListAttende;
