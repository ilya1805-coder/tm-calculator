import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

it('renders a heading', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );

  const pageElement = await Page();
  render(pageElement);

  const heading = screen.getByRole('heading', {
    name: 'Trademark Registration Calculator',
    level: 1,
  });

  expect(heading).toBeInTheDocument();
});
