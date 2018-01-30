import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import SidebarBody from '../../components/sidebar-body';
import docsSidebar from './doc-links.yaml';
import Container from '../../components/container';
import presets from '../../utils/presets';

class IndexRoute extends React.Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Docs</title>
        </Helmet>
        <h1 css={{ marginTop: 0 }}>Get started</h1>
        <p>
          Zoomdata Chart CLI is designed to help you manage all aspects of the
          custom chart creation process in Zoomdata .
        </p>
        <h2>Install Zoomdata{`'`}s Custom Chart CLI</h2>
        <p>
          <code>npm install zoomdata-chart-cli -g</code>
        </p>
        <h2>Using the Zoomdata Custom Chart CLI</h2>
        <ol>
          <li>
            Configure the CLI.
            {` `}
            <code>zd-chart config</code>
          </li>
          <li>
            Create a new custom chart.
            {` `}
            <code>zd-chart create</code> - Follow the prompts and select the{' '}
            <code>Blank</code> template.
          </li>
          <li>
            <code>zd-chart edit</code> — On the chart selection prompt, select
            the newly created chart. When presented with a list of options,
            select <code>Visibility</code> and enter <code>Yes</code>
          </li>
          <li>
            Enable the custom chart for a source by navigating to the Sources
            page <code>/zoomdata/admin.html#sources</code> and selecting a
            source. Switch to the <code>Charts->Custom</code> tab and ensure the
            custom chart's checkbox is checked.
          </li>
          <li>
            Create a new dashboard with your blank custom chart. You should see
            a chart widget with a single <code>Group</code> chart picker.
          </li>
          <li>You are now ready to continue building out your custom chart.</li>
        </ol>
        <h2>Adding custom chart packages</h2>
        <p>
          Running <code>zd-chart add {`<name> <filepath.zip>`} </code> adds the specified custom chart to the Zoomdata server.
          There are{` `}
          <Link to="/docs/custom-chart-examples/">
            various custom chart examples
          </Link>
          {` `}
          you can use to add to your server.
        </p>
        <h2>Work through the tutorial</h2>
        <p>
          It walks you through building a custom chart from scratch.
          {` `}
          <Link to="/tutorial/">Go to the tutorial</Link>.
        </p>
        <div
          css={{
            display: `block`,
            [presets.Tablet]: {
              display: `none`,
            },
          }}
        >
          <h2>Documentation</h2>
          <SidebarBody inline yaml={docsSidebar} />
        </div>
      </Container>
    );
  }
}

export default IndexRoute;
