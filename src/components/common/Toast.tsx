import { toast } from 'react-toastify';

export const successAlert = (message: string) => {
  return toast(message, {
    position: 'top-right',
    autoClose: 1000,
    theme: 'light',
    type: 'success',
  });
};

export const errorAlert = (message: string) => {
  toast(message, {
    position: 'top-right',
    autoClose: 1000,
    theme: 'light',
    type: 'error',
  });
};
