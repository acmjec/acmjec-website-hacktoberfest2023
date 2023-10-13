import React from 'react'
import './MainLanding.css'
import logo from '../../../public/images/ACM JEC Logo.png'
import SessionCard from './SessionCard'
import grid from '../../../public/images/grid.png'
import lines from '../../../public/images/lines.png'

const MainLanding = () => {
  return (
    <div className='main w-full bg-black'>
      <img src={grid} alt="" className="grid" />
      <img src={logo} alt="" className='logo'/>
      <div className="content">
        <div className="temp">
          <img src={lines} alt="" className="left" />
          <div className="temp1">
          <h3>UNLOCK YOUR POTENTIAL WITH</h3>
          <h1><span>ACM JEC</span> STUDENT'S CHAPTER</h1>
          </div>
          <img src={lines} alt="" className="right" />
        </div>
        <h2>YOUR GATEWAY TO TECH EXCELLENCE</h2>
      </div>

      <div className="session">
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
