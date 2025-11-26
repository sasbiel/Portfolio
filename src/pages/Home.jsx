import React from 'react'
import bubble from '../../public/images/bubble.png'
import ig from '../../public/images/ig.png'
import linkedin from '../../public/images/in.png'
import github from '../../public/images/github.png'
import cv from '../../public/images/cv.png'
import chara from '../../public/images/chara.png'
import figma from '../../public/images/figma.png'
import vs from '../../public/images/vs.png'
import js from '../../public/images/js.png'

const Home = () => {
  return (
    <div className='flex flex-col items-center h-screen w-full bg-[radial-gradient(circle,#FFFFFF,#FEBEDD)]'>
      <div className='flex flex-col justify-center items-center w-350 pt-[20vh]'>
        <img className='w-250 h-auto object-contain' src={bubble} alt="" />
        <div className='absolute flex flex-col w-180 mb-12 gap-4 flex-start text-white'>
          <p className='font-poppins-semibold text-[18px]'>Hi, I’m Salsabila Sausan</p>
          <p className='font-poppins-bold text-[32px]'>UI & UX Designer and <br />Front End Developer</p>
          <p className='font-poppins-medium text-[14px] w-150'>a System Informatics Network and Application student at SMKN 26 Jakarta. Passionate in creativity and love turning ideas into visual experiences, user experiences, and bringing it into reality in a website that everyone can use.</p>
        <div className='flex flex-row gap-4'>
          <img className='w-[36px]' src={ig} alt="" />
          <img className='w-[36px]' src={linkedin} alt="" />
          <img className='w-[36px]' src={github} alt="" />
          <img className='h-[36px]' src={cv} alt="" />
        </div>
        </div>
      </div>
      <img className='absolute w-120 h-auto object-contain right-13 top-18' src={chara} alt="" />
      <img className='absolute w-45 h-auto object-contain left-25 top-22' src={figma} alt="" />
      <img className='absolute w-35 h-auto object-contain left-25 bottom-22' src={js} alt="" />
      <img className='absolute w-38 h-auto object-contain right-120 top-18' src={vs} alt="" />
    </div>
  )
}

export default Home