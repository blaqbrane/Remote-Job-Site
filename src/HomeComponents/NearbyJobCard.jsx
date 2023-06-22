import React from "react";
import logo from "../assets/google.jpg";
import { Link } from "react-router-dom";
import { checkImageURL,getTimeDiffrence } from '../utils'
const NearbyJobCard = ({item}) => {
  const {days, hours,months} = getTimeDiffrence(item.job_posted_at_datetime_utc)
  const time_posted = days > 2 ? `${days - 1} days ago`: days === 2 ? `${days-1} day ago`: days === 1 ? `${hours} hours ago` : days > 31 ? `${months} ago` : `${hours} hours a0go`
  return (
    <Link to={`/job-details/${item.job_id}`}>
      <div className="shadow-[gray] flex items-center justify-between shadow-md px-6 py-8 ml-2 mb-4 rounded-lg md:w-full">
        <div className="truncate">
          <div className="px-3 py-3 rounded-md bg-[coral] w-fit">
          <img src={checkImageURL(item.employer_logo) ? item?.employer_logo : "https://static6.depositphotos.com/1037613/650/i/950/depositphotos_6509200-stock-photo-searching-for-jobs.jpg"} className='w-10 h-10 rounded object-contain '/>
          </div>
          
          <h1 className="py-4 text-[gray]">{item.employer_name}</h1>
          <h1 className="truncate text-[#1a1a40] font-bold">
          {item.job_title}
          </h1>
        
          <div className="px-1 flex justify-between md:hidden">
          <p className="text-[gray]">{item.job_country}</p>
       <h1 className="">{time_posted}</h1>
       </div>
        </div>
        <div className="hidden md:flex px-1 justify-between">
          <p className="text-[gray]">{item.job_country}/</p>
       <h1 className="">{time_posted}</h1>
       </div>
       
      </div>
    </Link>
  );
};

export default NearbyJobCard;
