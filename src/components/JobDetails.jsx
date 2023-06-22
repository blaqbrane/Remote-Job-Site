import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../UseFetch/useFetch'
import { useEffect , useState} from 'react';
import loader from  '../assets/loader.svg'
import Welcome from '../HomeComponents/Welcome';
import JobTabs from '../HomeComponents/JobTabs';
import AboutJob from '../tabs/AboutJob';
import JobFooter from '../HomeComponents/JobFooter';
import { Navbar} from '../HomeComponents'
import Pointer from '../tabs/Pointer';
import { BsArrowLeft} from 'react-icons/bs'
const JobDetails = () => {
  const[tabsArray, setTabsArray] = useState(["About", "Qualification", "Responsibilities"])
  const [first, setFirst] = useState(true);
  const [activeTab, setActiveTab] = useState('About');
  const{id} = useParams()
  console.log(id)
  const{data,isLoading,error,refetch} = useFetch("job-details" , {
    job_id : id,
  })


  const renderComponent =()=>{
    switch(activeTab){
      case 'About':
        return <AboutJob 
        title='About'
        info={data[0]?.job_description ?? 'No data provided'}
        />
      case 'Responsibilities':
        return <Pointer
        title='Responsibilities'
        info={data[0]?.job_highlights?.Responsibilities ?? ['N/A']}
        />
      case 'Qualification':
        return <Pointer
        title='Qualification'
        info={data[0]?.job_highlights?.Qualifications ?? ['N/A']}
        />
      default: return <div>Coming ...</div>
    }
  }

  useEffect(() => {
    console.log(data[0]?.employer_name)
  }, [])
  return (
    <main>
      <Link to='/'><h1 className='px-3 py-2 text-[coral]'><BsArrowLeft size={23}/></h1></Link>
      <div>
      {isLoading ? ( <div className='mx-auto max-w-[40px] md:max-w-[300px] mt-56'>
        
        <img src={loader}  className='w-20 h-20 flex flex-col justify-center items-center'/>
        </div>
      ): error ? (
        first ? (
          refetch()
        ):(
            <div>Something went wrong</div>
        )
      ):(
      
      <div className='px-3'>
      <Welcome 
         companyLogo = {data[0]?.employer_logo ?? ['N/A']}
         jobTitle = {data[0]?.job_title ?? ['Frontend Developer']}
         companyName= {data[0]?.employer_name ?? ['Upwork']}
         Location= {data[0]?.job_country ?? ['US']}
        />
        <JobTabs
        tabsArray={tabsArray}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
        {renderComponent()}

        
      </div>
      )
      }
      

       
      </div>
      <div className='fixed bottom-0 w-full left-0'>
      <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'}/>
      </div>
    </main>
  )
}

export default JobDetails