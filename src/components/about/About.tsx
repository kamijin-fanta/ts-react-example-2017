import * as React from 'react';
import { FormSubmitHandler } from 'redux-form';
import { ContactForm, ContactFormValues } from '../contact/ContactForm';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

export function About() {
  let submit: FormSubmitHandler<ContactFormValues> = values => {
    console.log(values.firstName, values.lastName, values.email);
  };
  return (
    <div className="about">
      <h1>about</h1>
      <Switch>
        <Route path="/about" exact={true}>
          <div>
            <p>this company founded in 2017</p>
            <p>
              <Link to="/about/contact">
                <span>contact</span>
              </Link>
            </p>
          </div>
        </Route>
        <Route path="/about/contact">
          <div>
            <h2>contact</h2>
            <ContactForm onSubmit={submit} />
          </div>
        </Route>
      </Switch>
    </div>
  );
}
