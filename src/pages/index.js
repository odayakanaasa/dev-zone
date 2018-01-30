import React from 'react';
import Link from 'gatsby-link';

import presets, { colors } from '../utils/presets';
import { rhythm, scale, options } from '../utils/typography';
import { D3Icon, HighchartsIcon } from '../assets/logos';
import { vP, vPHd, vPVHd, vPVVHd } from '../components/gutters';
import Container from '../components/container';
import MastheadContent from '../components/masthead';
import MastheadBg from '../components/masthead-bg';
import Cards from '../components/cards';
import Card from '../components/card';
import CardHeadline from '../components/card-headline';
import BlogPostPreviewItem from '../components/blog-post-preview-item';
import FuturaParagraph from '../components/futura-paragraph';
import CtaButton from '../components/cta-button';
import TechWithIcon from '../components/tech-with-icon';

class IndexRoute extends React.Component {
  render() {
    const blogPosts = this.props.data.allMarkdownRemark;
    return (
      <div css={{ position: `relative` }}>
        <MastheadBg />
        <div
          css={{
            display: `flex`,
            flexDirection: `row`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
          }}
        >
          <MastheadContent />
          <div
            css={{
              padding: rhythm(presets.gutters.default / 2),
              flex: `0 0 100%`,
              [presets.Hd]: {
                padding: vP,
                paddingTop: 0,
              },
            }}
          >
            <Cards>
              <Card>
                <CardHeadline>
                  Extend Zoomdata’s Native Charting Capabilities
                </CardHeadline>
                <FuturaParagraph>
                  Create custom chart templates to suit your data analytics
                  needs with Zoomdata's Custom Chart CLI. You can make use of
                  popular charting libraries like {` `}
                  <TechWithIcon icon={D3Icon}>D3</TechWithIcon> and{` `}
                  <TechWithIcon icon={HighchartsIcon}>
                    Highcharts
                  </TechWithIcon>,{` `}
                  while connecting to your own data sources — all within your
                  own IDE or code editor of choice.
                </FuturaParagraph>
              </Card>
              <Card>
                <CardHeadline>
                  Embed Zoomdata into your application
                </CardHeadline>
                <FuturaParagraph>
                  Zoomdata’s JS client lets you embed and control any of the
                  existing charts in Zoomdata. Additionally, you'll get access
                  to methods that will let your retrieve data, with full control
                  of your queries.
                </FuturaParagraph>
              </Card>
              <Card>
                <CardHeadline>
                  Accelerate tasks with Zoomdata's REST API{' '}
                </CardHeadline>
                <FuturaParagraph>
                  Zoomdata provides a REST API with methods for creating,
                  retrieving, updating, and deleting Zoomdata metadata objects.
                </FuturaParagraph>
              </Card>

              <div css={{ flex: `1 1 100%` }}>
                <Container hasSideBar={false}>
                  <div
                    css={{
                      textAlign: `center`,
                      padding: `${rhythm(1)} 0 ${rhythm(2)}`,
                    }}
                  >
                    <h1 css={{ marginTop: 0 }}>Want to learn more?</h1>
                    <FuturaParagraph>
                      Fast data rich applications are just a few steps away!
                    </FuturaParagraph>
                    <CtaButton to="/docs/" overrideCSS={{ marginTop: `1rem` }}>
                      Get Started
                    </CtaButton>
                  </div>
                </Container>
              </div>

              <div
                css={{
                  borderTop: `1px solid ${colors.ui.light}`,
                  flex: `1 1 100%`,
                  [presets.Tablet]: {
                    paddingTop: rhythm(1),
                  },
                }}
              >
                <Container
                  hasSideBar={false}
                  css={{ maxWidth: rhythm(30), paddingBottom: `0 !important` }}
                >
                  <h2
                    css={{
                      textAlign: `left`,
                      marginTop: 0,
                      color: colors.zoomdata,
                      [presets.Tablet]: {
                        paddingBottom: rhythm(1),
                      },
                    }}
                  >
                    Latest from the Zoomdata blog
                  </h2>
                  {blogPosts.edges.map(({ node }) => (
                    <BlogPostPreviewItem
                      post={node}
                      key={node.fields.slug}
                      css={{ marginBottom: rhythm(2) }}
                    />
                  ))}
                  <CtaButton
                    to="/blog/"
                    overrideCSS={{ marginBottom: rhythm(2) }}
                  >
                    Read More
                  </CtaButton>
                </Container>
              </div>
            </Cards>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "gatsby-explanation.png" }) {
      childImageSharp {
        sizes(maxWidth: 870) {
          src
          srcSet
          sizes
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/docs.blog/" }
      }
    ) {
      edges {
        node {
          ...BlogPostPreview_item
        }
      }
    }
  }
`;
