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
      👋 Hello! Welcome to the Zoomdata Custom Chart Tutorial. This tutorial consists of four parts that'll guide you
      through the process of developing a new custom chart from scratch.
    </p>
    <p>
      If you have some experience with Javascript and you want to learn about connecting your data to charts, you are in
      the right place. No worries if you are not Zoomdata expert, we'll walk you through things step by step.
    </p>

    <ol>
      <li>
        <Link to="/tutorial/part-one/">Introduction to Custom Chart basics</Link>
        {` `}— Configuring the chart CLI, creating a blank chart, editing chart code, and previewing the chart.
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
