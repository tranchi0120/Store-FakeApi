const Footer = () => {
  return (
    <div className=' bg-red-bold text-white h-[120px] flex items-center justify-center mt-9 '>
      <div className='container mt-6 '>
        <div className=' flex justify-center items-center gap-6  flex-col'>
          <div className='flex gap-8'>
            <span>Privacy policy</span>
            <span className=' border-x-[3px] px-6'>term service</span>
            <span>About SnapUp</span>
          </div>
          <p>2023 SnapUp. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
