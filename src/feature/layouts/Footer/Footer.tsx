const Footer = () => {
  return (
    <div className=' relative bottom-0 left-0 right-0 w-full'>
      <div className=' bg-red-bold text-white h-[120px] flex items-center justify-center mt-9 max-[590px]:h-full '>
        <div className='container mt-6  '>
          <div className=' flex justify-center items-center gap-6  flex-col'>
            <div className='flex gap-8 max-[590px]:flex-col'>
              <span>Privacy policy</span>
              <span className='border-x-[3px] px-6 max-[590px]:px-0 max-[590px]:border-none max-[590px]:py-[10px]'>
                term service
              </span>
              <span>About SnapUp</span>
            </div>
            <p>2023 SnapUp. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
