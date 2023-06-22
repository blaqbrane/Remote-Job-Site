import React from 'react'

const Pointer = ({info,title}) => {
  return (
    <main className='mb-10'>
      <div className='max-w-[1200px] mx-auto px-2 py-3 rounded-md bg-white shadow-[gray] shadow-md' >
        <h1 className='mb-5 text-[#2b2b4d] font-bold'>{title}</h1>
        <p>
          {info}
        </p>
      </div>
    </main>
  )
}

export default Pointer