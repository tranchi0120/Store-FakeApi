import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/hook'
import { selectorCategories } from '../../../redux/slice/CategorySlice'
import { VscDiffAdded } from 'react-icons/vsc'
import { GrClose } from 'react-icons/gr'

interface IProps {
  isShow: boolean
  handleShowCategoryList: () => void
}

const Sidebar = ({ isShow, handleShowCategoryList }: IProps) => {
  const { Allcategories, isLoading } = useAppSelector(selectorCategories)

  return (
    <div className='scrollbar' id='style-1'>
      <ul
        className={`force-overflow duration-300 w-[280px] flex flex-col gap-6 mt-20px fixed top-0 left-0 w-280px overflow-scroll !m-0 bg-bgr shadow-3xl text-black bottom-0 z-50 pl-6 pt-7 ${
          isShow ? 'translate-x-0' : '-translate-x-full '
        }`}
      >
        <div className='flex justify-end text-[22px] cursor-pointer mr-7' onClick={() => handleShowCategoryList()}>
          <GrClose />
        </div>
        <h3 className='text-black'>ALL CATEGORY</h3>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          Allcategories?.map((category, index) => (
            <li>
              <Link
                to={`/categories/${category}`}
                key={index}
                className="cursor-pointer relative before:duration-300 flex items-center gap-2
              before:absolute before:content-[''] before:w-full before:h-[2px] before:text-black
              before:scale-[0] before:origin-left before:-bottom-[5px] hover:before:scale-[1] before:bg-black hover:pl-4"
                onClick={() => handleShowCategoryList()}
              >
                <VscDiffAdded /> {category}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Sidebar
