import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttende from './EventListAttende';

const EventListItem = () => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src='/assets/user.png' />
            <Item.Content>
              <Item.Header content='Event Title' />
              <Item.Description>Hosted By Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> Date
          <Icon name='marker' /> Venue
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          <EventListAttende />
          <EventListAttende />
          <EventListAttende />
        </List>
      </Segment>
      <Segment clearing>
        <div>Description of event</div>
        <Button color='teal' floated='right' content='View' />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;