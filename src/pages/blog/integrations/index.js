import BlogPostsIntegrations from '../';

export default BlogPostsIntegrations;

export const pageQuery = graphql`
  query BlogPostsIntegrationsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { tags: { in: ["Integrations"] }, draft: { ne: true } }
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
