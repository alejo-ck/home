import { render, screen } from '@testing-library/react';
// import App from './App';
import Home from './components/body/home/Home';

test('Renders Home', () => {
  const home = render(<Home />);
  const homeImg = home.getByAltText('Home');
  expect(homeImg.className).toBe('HomeImage');
});
