import React from 'react'

const Navbar = () => {
  return (
    <main className='absolute z-10 w-full left-0'>
      <div className='md:px-40 px-6 text-white flex justify-between items-center py-3 '>
        <h1 className='font-bold text-xl'>RemoteJs</h1>
        <div>
              <button className='px-6 py-1 rounded-full bg-[coral]' >Login</button>
          
        </div>
      </div>
    </main>
  )
}

export default Navbar