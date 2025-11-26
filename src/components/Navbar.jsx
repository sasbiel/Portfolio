import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='flex fixed w-full pt-[6vh]'>
        <div className='flex w-350 justify-end'>
            <div className='flex flex-row bg-[#4E95CB] rounded-[50px] items-center justify-center gap-15 px-10 py-2 mr-10'>
                <Link to="/" className='font-poppins-semibold text-[16px] text-white'>Home</Link>
                <Link to="/project/design" className='font-poppins-semibold text-[16px] text-white'>Project</Link>
                <p className='font-poppins-semibold text-[16px] text-white'>Contact</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar 
