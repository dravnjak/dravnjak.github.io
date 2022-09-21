import Application from 'Application'
import Projects from 'Projects'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/*'} element={<Application />} />
          <Route path={'/projects'} element={<Projects />  }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Home
