
import { formatPrice } from './../../../utils/FormatPrice';

interface Props {
  totalMoney: number
}

const CheckoutCart = ({ totalMoney }: Props) => {
  return (
    <div className='w-[400px] h-[200px] shadow-xl p-4 rounded-[5px] max-[1024px]:w-full max-[1024px]:mb-[30px] '>
      <div className=' border-b-[1px] border-gray pb-6'>
        <div className='flex gap-3 justify-between '>
          <span className='text-gray'>ToTal Price </span><span className='text-black text-[18px] font-[500]'>{formatPrice(totalMoney)}</span>
        </div>
        <div className='flex gap-3 justify-between mt-4 '>
          <span className='text-gray'>Discount </span><span className='text-black text-[18px] font-[500]'>{formatPrice(0)}</span>
        </div>
      </div>
      <button className=' w-full mt-6 bg-black text-white px-10 py-3 rounded-[4px] border-t-2  '>Checkout</button>
    </div>
  )
}

export default CheckoutCart
