
import React from 'react'
import jobsearch from '../assets/searchimg4.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from 'framer-motion';

const SearchSection = ({searchTerm,setSearchTerm}) => {
   const container = {
    show: {
      transition:{
        staggerChildren: 0.2,
      }
    }
   }
  
   const cards ={
    hidden:{y:100 , opacity: 0},
    show:{
      y : 0,
      opacity: 1,
      transition:{
        ease : 'easeInOut',
        duration: 1
      }
    }
   }
  const[category, setCategory] = useState(['Contractor','Full Time', 'Part time','Internship','Freelance','Remote'])
  return (
    <motion.main className='px-6 md:px-32
    3 mt-10 md:space-y-0'
    initial={'hidden'}
    exit='exit'
    variants={container}
    whileInView={'show'}
    viewport={{once:false}}
    
    >
    <motion.div
     initial={'hidden'}
     exit='exit'
     variants={cards}
     whileInView={'show'}
     viewport={{once:false}}
     className='md:space-y-0'
    >
    <h1 className='text-3xl font-bold text-[#1b1b3d] text-center md:text-left'>Search</h1>
   <div className='flex  md:flex-row-reverse flex-col mt-1'>
   <div className='md:w-1/2 mt-1'>
      <img src={jobsearch} alt='jobsearch' className='w-full h-full object-contain'/>
    </div>
    <div className='md:w-1/2 md:mt-4'>
      
      <p className='text-[#202043] max-w-md text-center md:text-left mt-4 md:mt-0'>Discover the perfect job for you, Use our advanced search filters to narrow down thousands of listings. Search by industry, location, experience level and more . Your ideal job is just a few clicks away</p>
      <div className='mt-16 gap-x-3'>
      <div className="bg-white shadow-[gray] shadow-md flex items-center text-[gray] px-6 py-2 w-full md: max-w-md rounded-full">
          <input
            type="text"
            placeholder="what are you looking for .."
            className="w-full outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          {searchTerm && (
            <Link to={`./search/${searchTerm}`}>
              <AiOutlineSearch size={23} className="text-[gray]" />
            </Link>
          )}
        </div>
      </div>
    </div>
   </div>
   </motion.div>
  </motion.main>
  )
}

export default SearchSection