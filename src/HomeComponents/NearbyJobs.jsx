import React from 'react'
import NearbyJobCard from './NearbyJobCard'
import useFetch from '../UseFetch/useFetch'
import { useState } from 'react'
import loader from '../assets/loader.svg'
import { motion } from 'framer-motion'
const NearbyJobs = () => {
  const [first, setFirst] = useState(true);

  // refecth api data
  const fetch = () => {
    refetch();
    setFirst(false);
  };

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

const{data,error,isLoading,refetch} = useFetch('search',{query:'React developer',num_pages:1})
  return (
    <motion.main className='px-6 mt-10 md:px-32'
    initial={'hidden'}
    exit='exit'
    variants={container}
    whileInView={'show'}
    viewport={{once:false}}>
      <motion.div
      initial={'hidden'}
      exit='exit'
      variants={cards}
      whileInView={'show'}
      viewport={{once:false}}
      >
      <div className='flex items-center justify-between'>
      <h1 className='text-[#1a1a40] font-bold text-3xl'>Nearby Jobs</h1>
      <p className='text-[gray]'>Show all</p>
      </div>
       
      <div className='flex flex-col mt-10'>
        <div className='flex flex-col '>
        {
            isLoading ? ( <div className='max-w-[40px] mx-auto'>
        
              <img src={loader}  className='w-20 h-20 flex flex-col justify-end items-center'/>
              </div>
            ): error ? (
              first ? (
                refetch()
              ):(
                  <div>Something went wrong</div>
              )
            ):(
              data.map((item) => (
                <NearbyJobCard item={item} key={item?.job_id}/>
            ))
            )
          }
        </div>
      </div>
      </motion.div>
    </motion.main>
  )
}

export default NearbyJobs