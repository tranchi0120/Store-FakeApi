const ProductItem = () => {
  return (
    <>
      <div className='flex flex-col gap-3 bg-white rounded-[8px] pb-4 relative'>
        <div className='w-[130px] h-[30px] bg-orange text-white absolute -left-1 top-3 flex items-center pl-3'>
          categories
        </div>
        <div className=' h-[250px]'>
          <img
            src='https://images.unsplash.com/photo-1682687220866-c856f566f1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            alt='image'
            className='w-full object-cover h-full'
          />
        </div>
        <div className='flex gap-2 items-center justify-center'>
          <span>brand:</span>
          <h3 className='text-[18x] font-[500] block'>Samsung</h3>
        </div>
        <h3 className='text-center font-[500] text-[22px]'>Iphone 9</h3>
        <div className='flex justify-around'>
          <span className='text-gray text-[16px] line-through'>$900</span>
          <span className='block text-[18px] text-black font-bold'>$500</span>
          <span className='text-orange text-[16px] '>( sale $15%)</span>
        </div>
      </div>
    </>
  )
}

export default ProductItem
