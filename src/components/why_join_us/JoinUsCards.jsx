import React from 'react'

function JoinUsCards(props) {

  return (
    <>
      <div className={`group/item card xl:px-6 px-2 text-white text-center md:h-96 xl:w-64 w-56 bg-[#222125] mb-24 cursor-pointer hover:shadow-[0_2px_15px_white] shadow-none hover:h-[25rem]`} style={{borderRadius:'2rem',filter:"opacity(1)", }}>
        <div className='relative bottom-24 flex flex-col items-center justify-between'>
        <img src={props.src} alt="image" className={`w-44 h-48 xl:mb-5 lg:mb-3 relative group-hover/item:bottom-8`}/>
        <div className="title font-bold text-2xl mb-2">{props.title}</div>
        <p className="description text-xs font-[Montserrat] flex-1 group-hover/item:text-sm">{props.description}</p>

        <button className="action relative top-14 rounded-full bg-[#2E2D32] px-12 py-2 text-[#F1F379] pb-2">{props.action}</button>
        </div>
      </div>
    </>
  )
}

export default JoinUsCards