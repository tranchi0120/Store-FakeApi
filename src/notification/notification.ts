import { toast } from 'react-toastify';

const notification = {
  error: (errorMessage: string): void => {
    toast.error(`${errorMessage}`, { autoClose: 1500 });
  },
  success: (successMessage: string): void => {
    toast.success(`${successMessage}`, { autoClose: 1500 });
  },
  warning: (warningMessage: string): void => {
    toast.warning(`${warningMessage}`, { autoClose: 1500 });
  },
};

export default notification;