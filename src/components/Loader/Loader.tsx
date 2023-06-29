import { CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <div className='flex items-center justify-center h-[800px]'>
      <CircularProgress color='error' />
    </div>
  )
}

export default Loader
