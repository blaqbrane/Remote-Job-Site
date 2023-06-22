import React, { useState,useEffect } from 'react'
import { Navbar,Hero,NearbyJobs,PopularJobs,Footer,Category, SearchSection } from '../HomeComponents'
const Home = () => {
  const[searchTerm, setSearchTerm] = useState('')
  return (
    <main className='overflow-hidden'>
      <Navbar
      />
      <Hero
      searchTerm={searchTerm}
      setSearchTerm = {setSearchTerm}
      />
      <Category/>
      <PopularJobs/>
      <SearchSection
      searchTerm={searchTerm}
      setSearchTerm = {setSearchTerm}
      />
      <NearbyJobs/>
      <Footer/>
    </main>
  )
}

export default Home