import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cards = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };
 
  return (
    <main className="bg-[coral] py-8 text-white"
    initial={'hidden'}
    variants={container}
    whileInView={'show'}
    viewport={{once:false}}
    >
      <div
      initial={'hidden'}
      variants={cards}
      whileInView={'show'}
      viewport={{once:false}}
      >
        <h1 className="text-center text-white ">
          &copy; {new Date().getFullYear()} blaqbrane. All rights reserved.
        </h1>
      </div>
    </main>
  );
};

export default Footer;
