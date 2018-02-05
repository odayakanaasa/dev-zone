import React from 'react';
import EditIcon from 'react-icons/lib/md/create';

import { rhythm, scale } from '../utils/typography';
import presets, { colors } from '../utils/presets';

export default class MarkdownPageFooter extends React.Component {
  render() {
    return [
      <hr css={{ marginTop: rhythm(2) }} key="hr" />,
      <div
        css={{
          marginBottom: rhythm(1),
        }}
        key="div"
      >
        <a
          css={{
            '&&': {
              display: `block`,
              color: colors.gray.calm,
              fontSize: scale(-1 / 5).fontSize,
              fontWeight: `normal`,
              border: `none`,
              boxShadow: `none`,
              padding: rhythm(1 / 2),
              '&:hover': {
                background: `transparent`,
                color: colors.zoomdata,
              },
            },
          }}
          href={`https://github.com/jonavila/dev-zone/blob/master/docs/${
            this.props.page.parent.relativePath
          }`}
        >
          <EditIcon css={{ fontSize: 20, position: `relative`, top: -2 }} />
          {` `}
          edit this page on GitHub
        </a>
      </div>,
    ];
  }
}

export const fragment = graphql`
  fragment MarkdownPageFooter on MarkdownRemark {
    parent {
      ... on File {
        relativePath
      }
    }
  }
`;
