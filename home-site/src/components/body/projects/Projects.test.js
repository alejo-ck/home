import { render } from '@testing-library/react';
import Projects from './Projects';

test('Projects should render Projects container', () => {
  const projects = render(<Projects />);
  const projectsContent = projects.container.firstChild.firstChild;
  expect(projectsContent.firstChild.nodeName).toBe('#text');
});