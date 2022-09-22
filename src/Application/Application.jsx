import React from 'react'
import Home from 'Home'
import Projects from 'Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Info from 'Info'

function Application() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/*'} element={<Home />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path ={'/info'} element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Application
