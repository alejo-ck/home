import { render } from '@testing-library/react';
import Home from './Home';

test('Home should render Home Image', () => {
  const home = render(<Home />);
  const homeImg = home.getByAltText('Home');
  expect(homeImg.className).toBe('HomeImage');
});