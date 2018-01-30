import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import Container from '../components/container';

export default () => (
  <Container>
    <Helmet>
      <title>Tutorial</title>
    </Helmet>
    <h1 css={{ marginTop: 0 }}>Custom Chart Tutorial</h1>
    <p>
      Welcome to the custom chart tutorial. This tutorial consist of four parts
      that'll walk you through the process of developing a new custom chart from
      scratch.
    </p>

    <ol>
      <li>
        <Link to="/tutorial/part-one/">Part One</Link>
        {` `}— Description of part one
      </li>
      <li>
        <Link to="/tutorial/part-two/">Part Two</Link>. Description of part two
      </li>
      <li>
        <Link to="/tutorial/part-three/">Part 3</Link>. Description of part
        three
      </li>
      <li>
        <Link to="/tutorial/part-four/">Part Four</Link>
        {` `}
        Description of part four
      </li>
    </ol>
  </Container>
);
