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
            <Link
              to={`/categories/${category}`}
              key={index}
              className="cursor-pointer relative before:duration-300
              before:absolute before:content-[''] before:w-full before:h-[2px] before:text-red-800
              before:scale-[0] before:origin-left before:-bottom-[5px] hover:before:scale-[1] before:bg-white "
            >
              {category}
            </Link>
          ))
        )}
      </ul>
    </div>
  )
}

export default Category
