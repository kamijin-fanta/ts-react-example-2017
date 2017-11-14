import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form'

export interface FormProps extends InjectedFormProps {
}

function ContactForm(props: FormProps) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
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
  )
}

export default reduxForm({
  form: 'contact'
})(ContactForm)
