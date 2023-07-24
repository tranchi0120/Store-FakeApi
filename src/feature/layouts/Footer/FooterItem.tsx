interface Props {
  title: string
  items: string[]
}

const FooterItem = ({ title, items }: Props) => {
  return (
    <div className=''>
      <h2 className='text-black font-bold text-[18px] mb-2'>{title}</h2>
      <ul className='flex flex-col gap-2'>
        {items.map((item) => (
          <li className=' cursor-pointer hover:text-black' key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterItem
