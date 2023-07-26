import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/hook'
import { selectorCategories } from '../../../redux/slice/CategorySlice'
import { VscDiffAdded } from 'react-icons/vsc'
import './Sidebar.scss'

interface Props {
  isShow: boolean;
}

const Sidebar = ({ isShow }: Props) => {
  const { Allcategories, isLoading } = useAppSelector(selectorCategories)

  return (
    <div className={`scrollbar pt-[20px]  pr-4 
    max-[450px]:absolute duration-150 z-50 
    ${isShow ? 'max-[450px]:translate-x-0 ' : 'max-[450px]:-translate-x-[500px] '}`} id='style-1 '>
      <div
        className=' w-[280px] mt-20px h-[700px] !m-0 bg-bgr p-2 overflow-hidden
        shadow-3xl text-black bottom-0 z-50  rounded-[15px] visible max-[768px]:w-[230px]  max-[450px]:w-[300px] max-[450px]:h-[100%]
         
        '
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
