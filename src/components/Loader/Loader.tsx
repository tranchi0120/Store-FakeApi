import { CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <div className='flex items-center justify-center h-[800px] text-black'>
      <CircularProgress />
    </div>
  )
}

export default Loader
