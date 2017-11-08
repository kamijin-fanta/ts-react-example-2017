import * as React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <h1>about</h1>
      <Link to="/">Link to home</Link>
    </div>
  );
}

export default About;
