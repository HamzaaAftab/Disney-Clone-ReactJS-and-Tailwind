

function HeaderItem({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3
    text-[18px] font-semibold cursor-pointer hover:underline
    underline-offset-4 mb-2 mt-4'>
        <Icon/>
        <h2 className='hidden md:block'>{name}</h2>
    </div>
  )
}

export default HeaderItem