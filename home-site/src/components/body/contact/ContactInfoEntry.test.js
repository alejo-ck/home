import { render } from '@testing-library/react';
import ContactInfoEntry from './ContactInfoEntry';

test('ContactInfoEntry should render ContactInfoEntry options and routes', () => {
  const contactInfoEntry = render(<ContactInfoEntry network="network" href="href" displayString="display"/>);
  const contactInfoEntryContainer = contactInfoEntry.container.firstChild;
  expect(contactInfoEntryContainer.className).toBe('ContactInfoEntryContainer');
  
  expect(contactInfoEntryContainer.childNodes[0].className).toBe('ContactInfoEntryElement')
  expect(contactInfoEntryContainer.childNodes[1].className).toBe('ContactInfoEntryElement')
  expect(contactInfoEntryContainer.childNodes[1].textContent).toBe('display')
});