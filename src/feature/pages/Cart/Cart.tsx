import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { clearCart, selectCarts } from '../../../redux/slice/CartSlice'

import { Link, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import { AiFillDelete } from 'react-icons/ai'
import CartItem from './CartItem'
import CheckoutCart from './CheckoutCart'
import { useEffect, useState } from 'react'
import getToken from './../../../utils/getToken';
import { ERouterLink } from '../../../router/RouterLink'

export const CustomSlider = styled(AiFillDelete)({
  width: '20px',
  height: '20px',
  color: 'black',
  cursor: 'pointer'
})

const Cart = () => {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      navigate(ERouterLink.login);
    }
  }, [])



  const dispatch = useAppDispatch()
  const carts = useAppSelector(selectCarts)
  const cartAll = carts.carts

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);


  /* ======= when checkbox item in cartItem =============  */
  const handleItemCheck = (itemId: number) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const handleSelectAll = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    if (!selectAll) {
      setSelectedItems(cartAll.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  /* ========= If all items are already selected, then setSelectAll(true), otherwise setSelectAll(false) ============*/
  useEffect(() => {
    const allItemIds = cartAll.map((item) => item.id);
    if (selectedItems.length === allItemIds.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedItems, cartAll]);


  /* ========= Calculate total amount based on selectedItems and cartAll ============== */
  const calculateTotalMoney = (): number => {
    let totalMoney = 0;
    selectedItems.forEach((selectedItemId) => {
      const selectedItem = cartAll.find((item) => item.id === selectedItemId);
      if (selectedItem) {
        const itemPrice = selectedItem?.price - selectedItem?.price * (selectedItem.discountPercentage / 100);
        totalMoney += itemPrice * selectedItem.quantity;
      }
    });
    return totalMoney;
  };

  const totalMoney = calculateTotalMoney();


  return (
    <div className='mt-8 fontFamily'>
      <div className='container '>
        <div className='flex gap-5 justify-between'>
          <div className='pb-7 w-full '>
            <div className='flex justify-between items-center  p-3 shadow-3xl border-none mb-4 rounded-[5px]'>
              <h2 className='font-bold text-[30px]'>Cart</h2>
              <div onClick={() => dispatch(clearCart())}>
                <CustomSlider />
              </div>
            </div>
            <div className=' flex justify-between items-center  p-3 border-b-[1px] border-black mb-4 '>
              <div className='flex gap-3 items-center'>
                <input
                  className=' checked:bg-black w-4 h-4 rounded-[5px] text-black'
                  type='checkbox'
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                <span className=' font-[500] text-gray '>PRODUCT ({cartAll.length})</span>
              </div>
              <span className=' font-[500] text-gray '>QUANTITY</span>
              <span className=' font-[500] text-gray '>PRICE</span>
            </div>
            {cartAll.length > 0 && (
              <CartItem cartAll={cartAll} handleItemCheck={handleItemCheck} selectedItems={selectedItems} />
            )}
            {cartAll.length === 0 && (
              <div className='flex flex-col gap-9 items-center justify-center h-[500px] bg-white rounded-[8px] border-none my-5'>
                <span className='text-[22px]'> Your shopping cart is empty.</span>
                <Link to='/' className='shopping-btn bg-orange text-white fw-5 bg-black px-[15px] py-[10px]'>
                  Go shopping Now
                </Link>
              </div>
            )}
          </div>
          <div>
            <CheckoutCart totalMoney={totalMoney} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
