import Markdown from 'react-markdown'
import ContentBody from '../ContentBody'
import { readLatestBlogPosts} from '../../../dal/DataAccessUtils'
import '../ContentBody.css'

function Blog() {

  var blogPostEntries = readLatestBlogPosts().map((blogPost) => <Markdown>{ blogPost }</Markdown>);
  return (
    <ContentBody>
      {blogPostEntries}
    </ContentBody>
  );
}

export default Blog;