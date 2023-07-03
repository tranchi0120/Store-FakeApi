import { toast } from 'react-toastify'

const notification = {
  error: (errorMessage: string): void => {
    toast.error(`${errorMessage}`, {
      theme: 'colored',
      position: 'bottom-right'
    })
  },
  success: (successMessage: string): void => {
    toast.success(`${successMessage}`, {
      theme: 'colored',
      position: 'bottom-right'
    })
  },
  warning: (warningMessage: string): void => {
    toast.warning(`${warningMessage}`, {
      theme: 'colored',
      position: 'bottom-right'
    })
  }
}

export default notification
