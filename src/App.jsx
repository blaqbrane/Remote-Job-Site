import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Home , JobDetails, JobSearch} from './components';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/job-details/:id' element={<JobDetails/>} />
      <Route exact path='/search/:searchTerm' element={<JobSearch/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
