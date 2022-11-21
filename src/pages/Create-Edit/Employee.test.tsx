import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from '../../store';
import EmployeeAdd from './Employee';
import userEvent from '@testing-library/user-event';

const queryClient = new QueryClient();

beforeEach(() => {
  render(
    <Router>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <EmployeeAdd />
        </QueryClientProvider>
      </Provider>
    </Router>
  );
});

const typeIntoForm = async (inputName: any, value: any) => {
  const firstName: HTMLInputElement = screen.getByRole('textbox', {
    name: inputName,
  });
  userEvent.type(firstName, value);
  const submitButton = screen.getByRole('button', {
    name: /Add/i,
  });
  userEvent.click(submitButton);
};

describe('Employee creation and edit', () => {
  test('first name field should be available in the design', () => {
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  });
  test('last name field should be available in the design', () => {
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
  });
  test('email input field should be available in the design', () => {
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  });
  test('phone number field should be available in the design', () => {
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
  });
  test('gender field should be available in the design', () => {
    expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
  });
   test('list view button should be available in the design', () => {
     expect(
       screen.getByRole('button', { name: /List View/i })
     ).toBeInTheDocument();
   });
   

  test('first name should be only allowed alphabets characters', async () => {
    typeIntoForm(/First Name/i, 'Nimesh22');
    await waitFor(() => {
      const email = screen.getByText(/Invalid first name/i);
      expect(email).toBeInTheDocument();
    });
  });
  test('first name must be greater than 6 characters', async () => {
    typeIntoForm(/First Name/i, 'amal');
    await waitFor(() => {
      const email = screen.getByText(
        /First Name must be at least 6 characters/i
      );
      expect(email).toBeInTheDocument();
    });
  });
  test('first name must be less than 10 characters', async () => {
    typeIntoForm(/First Name/i, 'amalpereranewuser');
    await waitFor(() => {
      const email = screen.getByText(
        /First Name must be at most 10 characters/i
      );
      expect(email).toBeInTheDocument();
    });
  });
  test('last name should be allowed only alphabets characters', async () => {
    typeIntoForm(/Last Name/i, 'Nimesh22');
    await waitFor(() => {
      const email = screen.getByText(/Invalid last name/i);
      expect(email).toBeInTheDocument();
    });
  });
  test('last name must be greater than 6 characters', async () => {
    typeIntoForm(/Last Name/i, 'amal');
    await waitFor(() => {
      const email = screen.getByText(
        /Last Name must be at least 6 characters/i
      );
      expect(email).toBeInTheDocument();
    });
  });
  test('last name must be less than 10 characters', async () => {
    typeIntoForm(/Last Name/i, 'amalpereranewuser');
    await waitFor(() => {
      const email = screen.getByText(
        /Last Name must be at most 10 characters/i
      );
      expect(email).toBeInTheDocument();
    });
  });

  test('should not allowed invalid email address', async () => {
    typeIntoForm(/Email/i, 'Jayasanka2.com');
    await waitFor(() => {
      const email = screen.getByText(/Invalid email address/i);
      expect(email).toBeInTheDocument();
    });
  });
  test('phone number must be less than 12 characters', async () => {
    typeIntoForm(/Phone/i, '+947755555');
    await waitFor(() => {
      const email = screen.getByText(
        /Phone Number must be at least 12 characters/i
      );
      expect(email).toBeInTheDocument();
    });
  });
  test('phone number must be less than 12 characters', async () => {
    typeIntoForm(/Phone/i, '+947777777777');
    await waitFor(() => {
      const email = screen.getByText(
        /Phone Number must be at most 12 characters/i
      );
      expect(email).toBeInTheDocument();
    });
  });
   test('should not be able to enter the invalid phone number', async () => {
     typeIntoForm(/Phone/i, '+93777777777');
     await waitFor(() => {
       const email = screen.getByText(/Invalid phone number/i);
       expect(email).toBeInTheDocument();
     });
   });
  test('email is a required field', async () => {
    const submitButton = screen.getByRole('button', {
      name: /Add/i,
    });
    userEvent.click(submitButton);
    await waitFor(() => {
      const email = screen.getByText(/Email is a required field/i);
      expect(email).toBeInTheDocument();
    });
  });
  test('should not able to submit without gender', async () => {
    const submitButton = screen.getByRole('button', {
      name: /Add/i,
    });
    userEvent.click(submitButton);
    await waitFor(() => {
      const email = screen.getByText(/Gender is a required field/i);
      expect(email).toBeInTheDocument();
    });
  });
});
