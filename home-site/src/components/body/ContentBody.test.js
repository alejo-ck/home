import { render } from '@testing-library/react';
import ContentBody from './ContentBody';

test('ContentBody should render ContentBody container', () => {
  const contentBody = render(<ContentBody />);
  const contentBodyContainer = contentBody.container.firstChild;
  expect(contentBodyContainer.className).toBe('ContentBodyContainer');
  
  const contentBodyDiv = contentBodyContainer.firstChild
  expect(contentBodyDiv.className).toBe('ContentBody');
});