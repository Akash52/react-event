import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

const EventForm = ({ setFormOpen, setEvents }) => {
  const initialValues = {
    title: '',
    category: '',
    description: '',
    venue: '',
    city: '',
    date: '',
  };

  const [values, setValues] = useState(initialValues);

  const handleSubmit = () => {
    console.log(values);
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content='Create new Event' />
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event Title'
            name='title'
            onChange={(e) => handleInputChange(e)}
            value={values.title}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            name='category'
            onChange={(e) => handleInputChange(e)}
            value={values.category}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            name='description'
            onChange={(e) => handleInputChange(e)}
            value={values.description}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            name='city'
            onChange={(e) => handleInputChange(e)}
            value={values.city}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            onChange={(e) => handleInputChange(e)}
            value={values.venue}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            name='date'
            onChange={(e) => handleInputChange(e)}
            value={values.date}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          onClick={() => {
            setFormOpen(false);
          }}
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
