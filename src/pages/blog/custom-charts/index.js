import BlogPostsCustomCharts from '../../../templates/template-blog-page';

export default BlogPostsCustomCharts;

export const pageQuery = graphql`
  query BlogPostsCustomChartsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { tags: { in: ["Custom Charts"] }, draft: { ne: true } }
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
