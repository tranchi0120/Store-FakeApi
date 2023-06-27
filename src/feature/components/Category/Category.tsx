import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/hook'
import { selectorCategories } from '../../../redux/slice/CategorySlice'

const Category = () => {
  const { categories, isLoading } = useAppSelector(selectorCategories)
  const SliceCategories = categories.slice(10)

  return (
    <div>
      <ul className='flex justify-between'>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          SliceCategories?.map((item, index) => (
            <Link to={'/'} className='cursor-pointer hover:text-gray' key={index}>
              {item}
            </Link>
          ))
        )}
      </ul>
    </div>
  )
}

export default Category
