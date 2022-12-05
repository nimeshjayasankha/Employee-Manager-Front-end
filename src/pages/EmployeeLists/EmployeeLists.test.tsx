import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from '../../store';
import Employee from './EmployeeLists';

const queryClient = new QueryClient();

beforeEach(() => {
  render(
    <Router>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Employee />
        </QueryClientProvider>
      </Provider>
    </Router>
  );
});

describe('Employee Lists', () => {
  test('add employee button should be available in the design', async () => {
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /Add Employee/i })
      ).toBeInTheDocument();
    });
  });
  test('Should display loading icon', async () => {
    await waitFor(() => {
      const loadingText = screen.getByRole('loading');
      expect(loadingText).toBeInTheDocument();
    });
  });
  test('Should disappear loading icon when successfully loaded', async () => {
    await waitFor(() => {
      const loadingText = screen.queryByText(/Add Employee/i);
      expect(loadingText).toBeInTheDocument();
    });
  });
});
