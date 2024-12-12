import React from 'react'

const Songsitem = ({name,image,desc,id}) => {
  return (
    <div className='min-2-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='font-bold mt-2 mb-1' src={image} alt="" />
        <p className='text-slate-200 text-sm'>{name}</p>
      
    </div>
  )
}

export default Songsitem