import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export interface BreadcrumbItem {
  link: string
  text: string
}

const useBreadcrumbs = (): BreadcrumbItem[] => {
  const location = useLocation()
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([])

  useEffect(() => {
    const pathParts = location.pathname.split('/').filter(Boolean)
    const breadcrumbArray: BreadcrumbItem[] = []

    // Home breadcrumb
    breadcrumbArray.push({ link: '/', text: 'Home' })

    // Category breadcrumb (if available)
    if (pathParts.length >= 2) {
      breadcrumbArray.push({ link: `/${pathParts[1]}`, text: pathParts[1] })
    }

    // ProductDetail breadcrumb (if available)
    if (pathParts.length === 3) {
      breadcrumbArray.push({ link: location.pathname, text: pathParts[1] })
    }

    setBreadcrumbs(breadcrumbArray)
  }, [location.pathname])

  return breadcrumbs
}

export default useBreadcrumbs
