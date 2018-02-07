import BlogPostsOperations from '../../../templates/template-blog-page';

export default BlogPostsOperations;

export const pageQuery = graphql`
  query BlogPostsOperationsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { tags: { in: ["Operations"] }, draft: { ne: true } }
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
