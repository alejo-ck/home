import ContentBody from '../ContentBody';
import Markdown from 'react-markdown';
import { readTopProjects } from '../../../dal/DataAccessUtils'

function Projects() {
  var projectEntries = readTopProjects().map((projectEntry) => <Markdown>{ projectEntry }</Markdown>);
  return (
    <ContentBody>
      {projectEntries}
    </ContentBody>
  );
}

export default Projects;