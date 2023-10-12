import React from 'react'

const SessionCard = ({h2,p,c1,c2}) => {
  return (
    <div className="sess_main">
    <div className='sess_card'>
      <div className="box" style={{background: `linear-gradient(90deg,${c1},${c2})`}}></div>
      <div className="card_content">
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
    </div>
      <div className="triangle" style={{background: `linear-gradient(${c1},${c2})`}}></div>
    </div>
  )
}

export default SessionCard
