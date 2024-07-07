import { render } from '@testing-library/react';
import NavBar from './NavBar';

test('NavBar should render NavBar options and routes', () => {
  const navBar = render(<NavBar />);
  const navBarContent = navBar.container.firstChild;
  expect(navBarContent.className).toBe('HomeSiteNavbar');
  
  const navBarLogo = navBarContent.firstChild
  expect(navBarLogo.className).toBe('HomeSiteNavbarLogo');
  
  const navOptionsContainer = navBarContent.childNodes[1]
  expect(navOptionsContainer.className).toBe('nav-option-container')
  expect(navOptionsContainer.childNodes.length).toBe(4)

  const navLinks = []
  for (const navLinkDiv of navOptionsContainer.childNodes) {
    navLinks.push(navLinkDiv.firstChild)
  }
  expect(navLinks[0].textContent).toBe('Home')
  expect(navLinks[1].textContent).toBe('Blog')
  expect(navLinks[2].textContent).toBe('Projects')
  expect(navLinks[3].textContent).toBe('Contact')
});