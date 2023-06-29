import { toast } from 'react-toastify'

const notification = {
  error: (errorMessage: string): void => {
    toast.error(`${errorMessage}`, {
      theme: 'colored'
    })
  },
  success: (successMessage: string): void => {
    toast.success(`${successMessage}`, {
      theme: 'colored'
    })
  },
  warning: (warningMessage: string): void => {
    toast.warning(`${warningMessage}`, {
      theme: 'colored'
    })
  }
}

export default notification
