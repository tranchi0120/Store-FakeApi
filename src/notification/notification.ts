import { toast } from 'react-toastify'

const notification = {
  error: (errorMessage: string): void => {
    toast.error(`${errorMessage}`, {
      theme: 'colored',
      position: 'bottom-right',
      autoClose: 1000
    })
  },
  success: (successMessage: string): void => {
    toast.success(`${successMessage}`, {
      theme: 'colored',
      position: 'bottom-right',
      autoClose: 1000
    })
  },
  warning: (warningMessage: string): void => {
    toast.warning(`${warningMessage}`, {
      theme: 'colored',
      position: 'bottom-right',
      autoClose: 1000
    })
  }
}

export default notification
