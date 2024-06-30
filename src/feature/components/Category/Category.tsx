import { Link } from 'react-router-dom'
import { VscDiffAdded } from 'react-icons/vsc'

import { useAppSelector } from '../../../hooks/hook'
import { selectorCategories } from '../../../redux/slice/CategorySlice'

interface IProps {
  isShow: boolean
  handleShowCategoryList: () => void
}

const Category = ({ isShow, handleShowCategoryList }: IProps) => {
  const { Allcategories, isLoading } = useAppSelector(selectorCategories)

  return (
    <div className=''>
      <ul
        className={`duration-300 w-[280px] flex flex-col justify-between mt-20px fixed top-0 
        left-0 w-280px overflow-scroll !m-0 bg-bgr shadow-3xl 
        text-red-bold bottom-0 z-50 pl-6 pt-7 
        ${isShow ? 'translate-x-0' : '-translate-x-full '}`}
      >
        {isLoading ? (
          <div>loading...</div>
        ) : (
          Allcategories?.map((category, index) => (
            <Link
              to={`/categories/${category.name}`}
              key={index}
              className="cursor-pointer relative before:duration-300 flex items-center gap-2
              before:absolute before:content-[''] before:w-full before:h-[2px] before:text-red-800
              before:scale-[0] before:origin-left before:-bottom-[5px] hover:before:scale-[1] before:bg-red-bold hover:pl-4"
              onClick={() => handleShowCategoryList()}
            >
              <VscDiffAdded /> {category.name}
            </Link>
          ))
        )}
      </ul>
    </div>
  )
}

export default Category
