import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Project from '../pages/Project'
import Homes from '../pages/Homes'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Homes/>}/>
            <Route path='/project/design' element={<Project/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default Router