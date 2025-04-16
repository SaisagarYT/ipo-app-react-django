import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import UpcomingIpo from './components/IpoScreen'
import UpcomingIPO from './pages/UpcomingIPO';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/upcomingipo' element={<UpcomingIPO/>} />
      </Routes>
    </div>
  )
}

export default App
