import React from 'react'
import User from './User';
 const About=()=> {
  return (
    <div>
      <h1>About</h1>
      <h2>This is about component</h2>
      <User name={"Ronat Kumar"} location={"Aska"} contact={"ronatkumar@mail.com"}/>
    </div>
  );
};
export default About;