import { render } from '@testing-library/react';
import Blog from './Blog';

test('Blog should render Blog container', () => {
  const projects = render(<Blog />);
  const projectsContent = projects.container.firstChild.firstChild;
  expect(projectsContent.firstChild.nodeName).toBe('#text');
});