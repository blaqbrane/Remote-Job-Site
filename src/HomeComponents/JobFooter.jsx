import React from 'react'
import { AiOutlineHeart,AiFillHeart} from 'react-icons/ai';
import { useState } from 'react';

const JobFooter = ({url}) => {
  const[isLike, setIsLike] = useState(false)
  return (
    <div className='flex justify-start w-full px-3 mb-0 bg-white'>
      <div className='flex items-center w-full'>
        <div className='px-6 py-2 mb-0 bg-white rounded-md'>
        <h1 onClick={() => setIsLike(true)} className={`px-6 text-[coral]`}>{isLike ? <AiFillHeart size={32}/> : <AiOutlineHeart size={32}/>}</h1>
        </div>
        <div className='px-6 py-2 bg-white rounded-md block w-full'>
        <button onClick={() => window.open(url)} className='block outline-none w-full px-3 py-2 rounded-md bg-[coral] text-white'>Apply</button>
        </div>
        
      </div>
    </div>
  )
}

export default JobFooter