import { render } from '@testing-library/react';
import Contact from './Contact';

test('Contact should render Contact container', () => {
  const projects = render(<Contact />);
  const projectsContent = projects.container.firstChild.firstChild;
  expect(projectsContent.childNodes.length).toBe(4);
  expect(projectsContent.childNodes[0].textContent).toBe('Contact Info');
});