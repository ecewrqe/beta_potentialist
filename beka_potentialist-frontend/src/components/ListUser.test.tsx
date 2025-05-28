import { render, screen, waitFor } from '@testing-library/react';
import ListUser from './ListUser';

describe('ListUser', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
          { id: 1, username: 'alice', email: 'alice@example.com' },
          { id: 2, username: 'bob', email: 'bob@example.com' },
        ]),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders user list with usernames and emails', async () => {
    render(<ListUser />);
    await waitFor(() => {
      expect(screen.getByText('alice')).toBeInTheDocument();
      expect(screen.getByText('alice@example.com')).toBeInTheDocument();
      expect(screen.getByText('bob')).toBeInTheDocument();
      expect(screen.getByText('bob@example.com')).toBeInTheDocument();
    });
  });
});