import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormSubmitHandler } from 'redux-form';
import ContactForm from './ContactForm'

function About() {
  let submit: FormSubmitHandler = (values) => {
    console.log(values);
  }
  return (
    <div className="about">
      <h1>about</h1>
      <Link to="/">Link to home</Link>
      <ContactForm onSubmit={submit}></ContactForm>
    </div>
  );
}

export default About;
