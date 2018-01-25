import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';
import favicon from '../assets/images/favicon.ico';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Zoomdata Dev Zone"
      meta={[
        {
          name: 'description',
          content:
            "The Zoomdata Developer Zone is your one-stop shop for extending Zoomdata's functionality and embedding it in your own applications.",
        },
        { name: 'keywords', content: 'developers, zoomdata' },
      ]}
      link={[{ rel: 'shortcut icon', href: favicon }]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
