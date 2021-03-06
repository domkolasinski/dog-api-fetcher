/* eslint-disable no-console */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { setLogger } from 'react-query';
import { handlers } from './hooks/testUtils';

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// silence react-query errors
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});
