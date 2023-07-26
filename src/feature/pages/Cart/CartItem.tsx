import { AiOutlineMinus } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { useAppDispatch } from '../../../hooks/hook';
import { addToCart, decreaseCart, removeCart } from '../../../redux/slice/CartSlice';
import { IProduct } from '../../../types/interfaces';
import { formatPrice } from '../../../utils/FormatPrice';
import { CustomSlider } from '../../pages/Cart/Cart';
import { Link } from 'react-router-dom';

interface Props {
  cartAll: IProduct[];
  handleItemCheck: (itemId: number) => void;
  selectedItems: number[];
}

const CartItem = ({ cartAll, handleItemCheck, selectedItems }: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleRemoveCart = (id: number) => {
    dispatch(removeCart(id));
  };

  return (
    <div>
      {cartAll.length > 0 &&
        cartAll.map((item) => (
          <div className='p-3 text-black mt-5 flex justify-between items-center' key={item.id}>
            <div className='flex items-center gap-7'>
              <input
                type='checkbox'
                className='checked:bg-black w-4 h-4 rounded-[5px] text-black'
                onChange={() => handleItemCheck(item.id)}
                checked={selectedItems.includes(item.id)}
              />
              <Link to={`/product/${item.id}`} className='w-[150px] h-[150px]'>
                <img src={item.thumbnail} alt='#!' className='w-full object-cover h-full rounded-[8px]' />
              </Link>
              <Link to={`/product/${item.id}`} className='block text-[18px] font-[500] w-[315px]'>
                {item.title}
              </Link>
            </div>

            <div className='px-2 outline-none flex items-center justify-start border w-[120px] h-[40px] rounded-[5px] border-black'>
              <span className='p-1 cursor-pointer h text-black' onClick={() => dispatch(decreaseCart(item))}>
                <AiOutlineMinus size='22px' />
              </span>
              <p className='w-[50px] text-center pointer-events-none'>{item.quantity}</p>
              <span className='px-1 cursor-pointer p-1 text-black' onClick={() => dispatch(addToCart({ ...item, quantity: +1 }))}>
                <IoMdAdd size='22px' />
              </span>
            </div>
            <div className='flex items-center gap-6 w-[450px] justify-end'>
              <span className='text-black font-bold text-[22px] ml-4'>{formatPrice((item?.price - item?.price * (item.discountPercentage / 100)) * item.quantity)}</span>
              <div className='flex justify-end' onClick={() => handleRemoveCart(item.id)}>
                <CustomSlider />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartItem;