import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

export interface ContactFormProps extends InjectedFormProps<ContactFormValues> {}

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

function Contact(props: ContactFormProps) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export const ContactForm = reduxForm({
  form: 'contact',
})(Contact);
