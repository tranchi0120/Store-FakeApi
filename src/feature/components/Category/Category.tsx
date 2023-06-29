import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/hook'
import { selectorCategories } from '../../../redux/slice/CategorySlice'

const Category = () => {
  const { Allcategories, isLoading } = useAppSelector(selectorCategories)
  const SliceCategories = Allcategories?.slice(10)

  return (
    <div className=''>
      <ul className='flex justify-between mt-[20px] '>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          SliceCategories?.map((category, index) => (
            <Link to={`/categories/${category}`} className='cursor-pointer hover:text-gray' key={index}>
              {category}
            </Link>
          ))
        )}
      </ul>
    </div>
  )
}

export default Category
