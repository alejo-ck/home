import { render } from '@testing-library/react';
import App from './App';

test('App should render App content', () => {
  const app = render(<App />);
  const appContent = app.container.firstChild;
  expect(appContent.className).toBe('App');
  const navContent = appContent.firstChild
  expect(navContent.className).toBe('HomeSiteNavbar')
});
