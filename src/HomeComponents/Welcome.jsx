import React from 'react'
import { checkImageURL } from '../utils'

const Welcome = ({companyLogo,jobTitle,companyName,Location}) => {
  return (
    <main className=' mt-10 '>
      <div className='md:mx-auto md:max-w-[800px] flex flex-col justify-center items-center'>
          <img src={checkImageURL(companyLogo) ? companyLogo: "https://static6.depositphotos.com/1037613/650/i/950/depositphotos_6509200-stock-photo-searching-for-jobs.jpg"} className='w-24 h-24 rounded-full object-cover '/>
          <h1 className='text-[#212150] mt-8 md:text-4xl '>{jobTitle}</h1>
          <div className='flex items-center gap-x-2 mt-2'>
            <h1 className='text-[#212150] '>{companyName}/</h1>
            <div>
                <p className='text-[gray]'>{Location}</p>
            </div>
          </div>
      </div>
    </main>
  )
}

export default Welcome