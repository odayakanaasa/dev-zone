import BlogPostsWhiteLabeling from '../';

export default BlogPostsWhiteLabeling;

export const pageQuery = graphql`
  query BlogPostsWhiteLabelingQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { tags: { in: ["White Labeling"] }, draft: { ne: true } }
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
