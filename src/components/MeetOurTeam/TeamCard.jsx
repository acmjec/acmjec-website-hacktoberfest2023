import React from 'react'
import "./TeamCard.css"
import DemoImage from "./images/demo.jpg"

const TeamCard = (props) => {
  return (
    <div className='team-card'>
        <div className="team-card-image">
            <img src={DemoImage} alt="akshat" srcSet="" />
        </div>
        <div className="team-card-name">
            <p>{props.name}</p>
        </div>
        <div className="team-card-content">
            <p>{props.content}</p>
        </div>
    </div>
  )
}

export default TeamCard