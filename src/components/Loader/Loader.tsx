import { CircularProgress } from '@mui/material'
interface Props {
  className: string
}

const Loader = ({ className }: Props) => {
  return (
    <div className={className}>
      <CircularProgress />
    </div>
  )
}

export default Loader
