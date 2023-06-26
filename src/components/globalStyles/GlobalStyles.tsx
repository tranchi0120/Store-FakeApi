import { ReactNode } from "react"
import './GlobalStyles.scss'

interface IProps {
  children: ReactNode
}

const GlobalStyles = ({ children }: IProps) => {
  return (
    <div>{children}</div>
  )
}

export default GlobalStyles