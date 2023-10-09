import React from 'react'

export default function JoinUsCards(props) {
  return (
    <>
      <div className="card xl:px-6 px-2 text-white text-center h-80 xl:w-64 w-56 bg-[#222125] mb-24" style={{borderRadius:'60px'}}>
        <div className='relative bottom-24 flex flex-col items-center justify-between'>
        <img src={props.src} alt="image" className='w-44 h-48 xl:mb-5 lg:mb-3'/>
        <div className="title font-bold text-2xl mb-2">{props.title}</div>
        <p className="description text-xs font-[Montserrat] flex-1">{props.description}</p>

        <button className="action rounded-full bg-[#2E2D32] px-12 py-2 text-[#F1F379] mt-5">{props.action}</button>
        </div>
      </div>
    </>
  )
}
