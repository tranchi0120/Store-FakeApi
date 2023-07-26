import FooterItem from './FooterItem'

const Footer = () => {
  const shopItems = ['All Collections', 'Winter Edition', 'Discount']
  const companyItems = ['About Us', 'Contact', 'Affilliates']
  const supportItems = ['FAQs', 'Cookie Policy', 'Tearm of Use']

  return (
    <div className='relative bottom-0 left-0 right-0 w-full bg-bgr-footer pt-10 text-white'>
      <div className='container'>
        <div className='footer-top flex justify-between items-center border-b-[1px] border-gray-300 pb-6'>
          <div className=''>
            <h2 className='text-black font-bold text-[30px]'>STORE</h2>
            <p className=' mt-3 w-[450px]'>Specializes in providing high-quality, stylish products for your wardrobe</p>
          </div>
          <FooterItem title='SHOP' items={shopItems} />
          <FooterItem title='COMPANY' items={companyItems} />
          <FooterItem title='SUPPORT' items={supportItems} />
        </div>
        <div className='footer-bottom text-center py-5'>
          <p>Copyright @2022 Store. All right reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
