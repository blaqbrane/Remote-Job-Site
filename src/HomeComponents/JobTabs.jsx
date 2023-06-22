import React from 'react'

const JobTabs = ({tabsArray,activeTab, setActiveTab}) => {
  return (
    <main className='mt-4 px-6 overflow-scroll'>
      <div className='w-[400px] md:mx-auto md:max-w-[800px] flex justify-center items-center px-6'>
        {
          tabsArray.map((item) => (
            <button className={`${activeTab === item ? 'bg-blue-950 text-white' : ''} px-6 py-2 rounded-lg bg-[coral] text-[gray] m-3 md:m-6`} onClick={() => setActiveTab(item)}>
              {item}
            </button>
          ))
        }
      </div>
    </main>
  )
}

export default JobTabs