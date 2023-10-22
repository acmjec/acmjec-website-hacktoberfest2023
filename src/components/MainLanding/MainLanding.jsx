import React from 'react'
import './MainLanding.css'
import logo from '../../../public/images/ACM JEC Logo.png'
import SessionCard from './SessionCard'
import grid from '../../../public/images/grid.png'
import lines from '../../../public/images/lines.png'

const MainLanding = () => {
  return (
    <div className='main w-full bg-black'>
      <img src={grid} alt="" className="grid absolute top-[100px]" /> 
      {/* <div className=' '> */}
          <img src={logo} alt="" className="w-1/2 m-auto absolute z-[1] opacity-10"/>
      {/* </div>  */}
      <div className="content">
        <div className="temp">
          <img src={lines} alt="" className="left md:w-28 lg:w-48 xl:w-72" />
          <div className="temp1">
          <h3 className='px-4 text-lg md:text-2xl lg:text-3xl z-[2]'>UNLOCK YOUR POTENTIAL WITH</h3>
          <h1 className='xl:text-8xl md:text-6xl lg:text-7xl xxl:text-9xl  z-[2]'><span>ACM JEC</span> STUDENT'S <div className="text-center">CHAPTER</div></h1>
          </div>
          <img src={lines} alt="" className="right md:w-28 lg:w-48 xl:w-72  z-[2]"  />
        </div>
        <h2 className='md:text-2xl xl:text-4xl  z-[2]'>YOUR GATEWAY TO TECH EXCELLENCE</h2>
      </div>

      <div className="session flex-col lg:flex-row">
        <SessionCard h2="Beginner To Expert: JAVA" p="Practical workshop" c1="green" c2="yellow"/>
        <SessionCard h2="HacktoberFest:Session 01" p="Coming soon" c1="rgb(0, 255, 166)" c2="rgb(0, 181, 241)"/>
      </div>

      <div className="learnmore">
        <button>Learn More</button>
      </div>

    </div>
  )
}

export default MainLanding
