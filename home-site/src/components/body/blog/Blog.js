import Markdown from 'react-markdown'
import ContentBody from '../ContentBody'
import '../ContentBody.css'

function Blog() {
    var blogEntryHeader = "# July 6, 2024 - Starting Again\n"
    var blogEntryBody = "And here we start again... WIP..."
    return (
      <ContentBody>
        <Markdown>{blogEntryHeader}</Markdown>
        <Markdown>{blogEntryBody}</Markdown>
      </ContentBody>
    );
}

export default Blog;