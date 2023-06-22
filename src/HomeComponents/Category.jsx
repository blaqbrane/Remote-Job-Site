import React from 'react'
import jobsearch from '../assets/jobsearch.avif'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Category = () => {
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
    <motion.main className='px-6 md:px-32 mt-10 '
    initial={'hidden'}
    variants={container}
    whileInView={'show'}
    viewport={{once:false}}
    >
      <motion.div
      initial={'hidden'}
      variants={cards}
      whileInView={'show'}
      viewport={{once:false}}
      >
      <h1 className='text-3xl font-bold text-[#1b1b3d] text-center md:text-left'>Browse Category</h1>
     <div className='flex md:flex-row md:items-center flex-col mt-5'>
     <div className='md:w-1/2 mt-6'>
        <img src={jobsearch} alt='jobsearch' className='w-full h-full object-contain'/>
      </div>
      <div className='md:w-1/2'>
        
        <p className='text-[#202043] text-center md:text-left'>Explore diverse industries. Browse through our extensive range of job categories, including IT, finance, healthcare, marketing and more. Whether you are an experienced professional or just starting your carrer, we have oppoetunity for every field</p>
        <div className='mt-10 grid grid-cols-3 gap-x-3'>
          {
            category.map((item, index) => (
              
              <button key={index + 1} className='hover:opacity-50 shadow-[gray] shadow-md my-6 text-[#151551] border py-1 outline-none rounded-full '>
                <Link to={`./search/${item}`}>
                {item}
                </Link>
              </button>
              
            ))
          }
        </div>
      </div>
     </div>
     </motion.div>
    </motion.main>
  )
}

export default Category