import { render } from '@testing-library/react';
import Footer from './Footer';

test('NavBar should render NavBar options and routes', () => {
  const footer = render(<Footer />);
  const footerContent = footer.container.firstChild;
  expect(footerContent.className).toBe('home-site-footer');
  expect(footerContent.textContent).toContain('Copyright');
});