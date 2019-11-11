import React from 'react';
import { render, cleanup, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShallowRenderer from 'react-test-renderer/shallow';

import PullRequestList from './PullRequestList';
import ghAxios from '../config/ghAxios';

jest.mock('../config/ghAxios');

afterEach(cleanup);

it("displays message when there's no PR to show", async () => {
  const user = 'test';
  const repo = 'test';

  ghAxios.get.mockResolvedValueOnce({
    data: [],
  });

  const { container } = render(
    <PullRequestList match={{ params: { user, repo } }} />,
  );

  await wait(expect(container).toBeInTheDocument());

  expect(container).toHaveTextContent('No records to display');
});

it('matches snapshot', async () => {
  const renderer = new ShallowRenderer();
  const user = 'test';
  const repo = 'test';

  const result = renderer.render(
    <PullRequestList match={{ params: { user, repo } }} />,
  );

  expect(result).toMatchSnapshot();
});
