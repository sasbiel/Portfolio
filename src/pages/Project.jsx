import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import cacah from '../../public/images/cacah.png'
import figmaLogo from '../../public/images/figma-logo.png'
import rasio from '../../public/images/rasio.png'
import Data from '../data/data'

const Project = () => { 
  const [data, setData] = useState(Data)
  return (
    <div className='flex flex-col w-full h-full bg-[radial-gradient(circle,#FFFFFF,#FEBEDD)] items-center'>
      <div className='flex flex-col w-280 items-center pt-30'>
        <div className=' flex flex-row w-fit bg-white rounded-[50px] px-3 py-2 gap-10 font-poppins-bold'>
          <p className='bg-[#FFD6EA] text-[#4E95CB] rounded-[50px] text-[20px] px-12'>Design</p>
          <p className='text-[#4E95CB] text-[20px] px-12'>Development</p>
        </div>

      <div className='flex flex-row flex-wrap justify-center w-full h-full mt-10 mb-10 gap-y-8 gap-x-5'>
        {data.map((project, i) => (
          <div key={i} className='flex flex-col bg-white rounded-[20px] px-5 py-5'>
          <img className='w-80 h-auto object-contain rounded-[20px]' src={project.Image} alt="" />
          <div className='flex flex-row font-poppins-semibold justify-between mt-4'>
            <p className='text-[16px]'>{project.FirstName}<br/>{project.LastName}</p>
            <p className='h-fit bg-linear-to-b from-[#4E95CB] to-[#80C2FF] text-[14px] text-white rounded-[12px] px-4'>{project.Category}</p>
          </div>
          <div className='flex flex-row mt-2 font-poppins-regular justify-between items-center'>
            <p className='text-[12px]'>{project.Description}</p>
            <img className='w-7' src={figmaLogo} alt="" />
          </div>
        </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Project