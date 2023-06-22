import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NearbyJobCard from "../HomeComponents/NearbyJobCard";
import loader from '../assets/loader.svg'
import { FaLessThan, FaGreaterThan} from 'react-icons/fa'
const JobSearch = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [first, setFirst] = useState(true);
  const [page, setPage] = useState('1');
  const [error, setError] = useState(null);
  const { searchTerm} = useParams()
  

  const fetchSearchResult = async () => {
    setIsSearchLoading(true);
    setSearchResult([])
    try {
      const options = {
        method: "GET",
        url: "https://jsearch.p.rapidapi.com/search",
        params: {
          query: searchTerm,
          page:page.toString()
        },
        headers: {
          "X-RapidAPI-Key":process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      console.log(response.data);
      setSearchResult(response.data.data)
    } catch (error) {
      console.error(error);
      setError(error)
    } finally{
      setIsSearchLoading(false)
    }
  };


  // refecth api data
  const fetch = () => {
    fetchSearchResult()
    setFirst(false);
  };
  const handlePagination = (direction) => {
    if (direction === 'left' && page > 1) {
        setPage(page - 1)
        fetchSearchResult()
    } else if (direction === 'right') {
        setPage(page + 1)
        fetchSearchResult()
    }
}
  useEffect(() => {
  fetchSearchResult()
}, [])

  return(
    <main className="px-10 md:px-40 md:py-10">
      <div>
        <h1 className="text-[#242448] text-3xl">{searchTerm}</h1>

        <h2 className="text-[gray] ">Job opportunity</h2>
      </div>
      {
            isSearchLoading ? ( <div className='max-w-[40px] mx-auto'>
        
              <img src={loader}  className='w-20 h-20 flex flex-col justify-end items-center'/>
              </div>
            ): error ? (
              first ? (
                fetch()
              ):(
                  <div>Something went wrong</div>
              )
            ):(
              searchResult.map((item) => (
                <NearbyJobCard item={item} key={item?.job_id}/>
            ))
            )
          }
      <div className="flex items-center justify-center gap-x-6 mt-10">
        <button className="outline-none text-[coral]" onClick={() => handlePagination('left')}><FaLessThan size={32}/></button>
        <h1>{page}</h1>
        <button  className="outline-none text-[coral]" onClick={() => handlePagination('right')}><FaGreaterThan size={32}/></button>
      </div>
    </main>
  );
};

export default JobSearch;
