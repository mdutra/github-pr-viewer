import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShallowRenderer from 'react-test-renderer/shallow';

import CustomTable from './CustomTable';

afterEach(cleanup);

it('displays the title', () => {
  const repo = 'user/repo';

  const { container } = render(<CustomTable repo={repo} />);

  expect(container).toHaveTextContent('Open pull requests from ' + repo);
});

it('displays row data', () => {
  const data = [
    { title: 'One pull request' },
    { title: 'Another pull request' },
  ];

  const { container } = render(<CustomTable data={data} />);

  data.forEach(({ title }) => {
    expect(container).toHaveTextContent(title);
  });
});

it("shows message when there's no row data", () => {
  const message = 'No records to display';

  let { container } = render(<CustomTable />);

  expect(container).toHaveTextContent(message);

  ({ container } = render(<CustomTable data={[]} />));

  expect(container).toHaveTextContent(message);
});

it('matches snapshot', () => {
  const renderer = new ShallowRenderer();
  const repo = 'user/repo';

  const result = renderer.render(<CustomTable repo={repo} />);

  expect(result).toMatchSnapshot();
});
