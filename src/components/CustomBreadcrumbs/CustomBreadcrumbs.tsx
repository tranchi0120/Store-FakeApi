// CustomBreadcrumbs.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { BreadcrumbItem } from 'src/hooks/useBreadcrumbs'

interface Props {
  breadcrumbs: BreadcrumbItem[]
}

const CustomBreadcrumbs: React.FC<Props> = ({ breadcrumbs }) => {
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          {index === 0 ? (
            <Link to={breadcrumb.link}>{breadcrumb.text}</Link>
          ) : (
            <span className='text-black pointer-events-none'>{breadcrumb.text}</span>
          )}
        </React.Fragment>
      ))}
    </Breadcrumbs>
  )
}

export default CustomBreadcrumbs
