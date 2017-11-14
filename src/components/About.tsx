import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormSubmitHandler } from 'redux-form';
import { ContactForm, ContactFormValues } from './ContactForm';

function About() {
  let submit: FormSubmitHandler<ContactFormValues> = values => {
    console.log(values.firstName, values.lastName, values.email);
  };
  return (
    <div className="about">
      <h1>about</h1>
      <Link to="/">Link to home</Link>
      <ContactForm onSubmit={submit} />
    </div>
  );
}

export default About;
