import ContentBody from '../ContentBody';
import Markdown from 'react-markdown';

function Projects() {
  var projectEntryHeader = "# My Personal React Site\n"
  var projectEntryBody = "After 13+ years of having a career as a software developer working for the same company, I have found myself with the need to re-invent myself."
  return (
    <ContentBody>
      <Markdown>{projectEntryHeader}</Markdown>
      <Markdown>{projectEntryBody}</Markdown>
    </ContentBody>
  );
}

export default Projects;