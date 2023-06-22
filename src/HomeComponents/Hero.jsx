
import ReactPlayer from "react-player";
import videos from "../assets/banner.mp4";
import google from "../assets/google.jpg";
import github from "../assets/github.png";
import shopify from "../assets/shopify.png";
import microsoft from "../assets/microsoft.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useEffect } from 'react'
import { useState } from 'react'
import { motion } from "framer-motion";

const Hero = ({ searchTerm, setSearchTerm}) => {
  
  const[communityName, setCommunityName] = useState('')
  const[img, setImg] = useState('')
  const[file, setFile] = useState('')
  
 const container = {
  show: {
    transition:{
      staggerChildren: 0.2,
    }
  }
 }
 const card ={
  hidden:{x:100 , opacity: 0},
  show:{
    x : 0,
    opacity: 1,
    transition:{
      ease : 'easeInOut',
      duration: 1
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
  


  return (
    <motion.main className="relative h-screen w-full"
    initial={'hidden'}
    exit = 'exit'
    variants={container}
    whileInView={'show'}
    viewport={{once:false}}
    >
      <video
        src={videos}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover "
      />
      {/* <ReactPlayer controls={false} url={video} playing={true} loop={false} /> */}
      <div className="w-full h-full top-0 left-0 absolute bg-gray-900/40 "></div>
      <div className="top-0 left-0 absolute flex flex-col text-white h-full w-full justify-center items-center">
        <motion.h1 className="text-4xl font-bold"
         initial={'hidden'}
         exit = 'exit'
         variants={card}
         whileInView={'show'}
         viewport={{once:false}}
        >
          {" "}
          Find your Dream{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[coral] to-[#f95013]">
            Job
          </span>
        </motion.h1>
        <motion.p className=" mt-2 mb-3 max-w-md text-white  text-center"
         initial={'hidden'}
         exit = 'exit'
         variants={card}
         whileInView={'show'}
         viewport={{once:false}}
        >Unlock your career potential and explore a world of endless opportunities. Work remotely from anywhere.</motion.p>
        
        <motion.div  initial={'hidden'}
    exit = 'exit'
    variants={card}
    whileInView={'show'}
    viewport={{once:false}} className="bg-white flex items-center text-[gray] px-6 py-2 w-[300px] md:max-w-[300px] rounded-full">
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
        </motion.div>
      </div>


      <motion.div 
        initial={'hidden'}
        exit = 'exit'
        variants={cards}
        whileInView={'show'}
        viewport={{once:false}}
       className="absolute gap-x-3 bottom-0 px-10 flex justify-center items-center w-full py-2">
        <div className="flex gap-x-1">
          <h1 className="font-bold text-white ">trusted </h1>
          <h1 className="font-bold text-white ">by</h1>
        </div>
        <div className=" bg-white px-6 py-1 flex w-full md:w-[400px] overflow-hidden items-center rounded-full gap-x-6">
       
         <img
            src={google}
            alt=""
            className="h-10 hover:opacity-50 cursor-pointer"
            onClick={() => window.open('https://google.com')}
          />
        
          <img
            src={github}
            alt=""
            className="h-10 hover:opacity-50 cursor-pointer "
            onClick={() => window.open('https://github.com')}
          />
          <img
            src={shopify}
            alt=""
            className="h-10  hover:opacity-50 cursor-pointer"
            onClick={() => window.open('https://shopify.com')}
          />
          <img
            src={microsoft}
            alt=""
            className="h-10 hover:opacity-50 cursor-pointer"
            onClick={() => window.open('https://microsoft.com')}
          />
          <img
            src={microsoft}
            alt=""
            className="h-10 hover:opacity-50 cursor-pointer"
            onClick={() => window.open('https://microsoft.com')}
          />
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Hero;
