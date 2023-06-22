import React from 'react'
import logo from '../assets/google.jpg'
import { Link } from 'react-router-dom'
import { checkImageURL,getTimeDiffrence } from '../utils'
const PopularJobcard = ({item}) => {
  const {days, hours} = getTimeDiffrence(item.job_posted_at_datetime_utc)
  const time_posted = days > 2 ? `${days - 1} days ago`: days === 2 ? `${days-1} day ago`: days === 1 ? `${hours} hours ago` : `${hours} hours a0go`
  return (
    <Link to={`/job-details/${item.job_id}`}>
    <div className='shadow-[gray] shadow-md px-6 py-8 ml-2 mb-4 w-[280px] rounded-lg md:w-[380px]'>
      <div className='px-3 py-3 rounded-md bg-[coral] w-fit'>
      <img src={checkImageURL(item.employer_logo) ? item?.employer_logo : "https://static6.depositphotos.com/1037613/650/i/950/depositphotos_6509200-stock-photo-searching-for-jobs.jpg"} className='w-10 h-10 rounded object-contain '/>
      </div>
      <h1 className='py-4 text-[gray]'>{item.employer_name}</h1>
      <h1 className='truncate text-[#1a1a40] font-bold' >
        {item.job_title}
      </h1>
      <p className='text-[gray]'> {item.job_country}/{time_posted}</p>
    </div>
    </Link>
  )
}

export default PopularJobcard