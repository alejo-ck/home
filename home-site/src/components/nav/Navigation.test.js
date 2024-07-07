import { render } from '@testing-library/react';
import Navigation from './Navigation';

test('NavBar should render NavBar options and routes', () => {
  const navigation = render(<Navigation />);
  const navigationContent = navigation.container.firstChild;
  expect(navigationContent.className).toBe('HomeSiteNavbar');
  
  const navigationLogo = navigationContent.firstChild
  expect(navigationLogo.className).toBe('HomeSiteNavbarLogo');
  
  const navOptionsContainer = navigationContent.childNodes[1]
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