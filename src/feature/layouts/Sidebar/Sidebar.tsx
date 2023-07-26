import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/hook'
import { selectorCategories } from '../../../redux/slice/CategorySlice'
import { VscDiffAdded } from 'react-icons/vsc'
import './Sidebar.scss'

const Sidebar = () => {
  const { Allcategories, isLoading } = useAppSelector(selectorCategories)

  return (
    <div className='scrollbar pt-[20px] max-[450px]:hidden pr-4' id='style-1 '>
      <div
        className=' w-[280px] mt-20px h-[700px] !m-0 bg-bgr p-2 overflow-hidden
        shadow-3xl text-black bottom-0 z-50  rounded-[15px] visible max-[768px]:w-[230px]'
      >
        <h2 className='text-black font-bold border-b-[2px] border-black pb-2 ml-3 mb-6 mt-6'>ALL CATEGORY</h2>
        <ul
          className='flex flex-col sidebar force-overflow duration-300 w-full h-full overflow-y-scroll !m-0 bg-bgr 
        text-black z-50 py-4 '
        >
          {isLoading ? (
            <div>loading...</div>
          ) : (
            Allcategories?.map((category, index) => (
              <li key={index}>
                <Link
                  to={`/categories/${category}`}
                  className='flex gap-1 items-center justify-start hover:bg-slate-300 p-3'
                >
                  <VscDiffAdded /> {category}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
