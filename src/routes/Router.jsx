import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Navbar from '../components/Navbar'
import Project from '../pages/Project'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/project/design' element={<Project/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default Router