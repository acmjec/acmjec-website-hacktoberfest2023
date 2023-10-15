import React from 'react'

function JoinUsCards(props) {
  // hover:shadow-[0_2px_15px_white]
  return (
    <>
      <div className={`group/item card xl:px-6 px-2 text-white text-center md:h-96 xl:w-64 w-56 bg-[#222125] hover:bg-[#132043] mb-24 cursor-pointer  shadow-none hover:h-[27rem] transition duration-[600ms] hover:shadow-[0px_0px_5px_white]`} style={{borderRadius:'2rem',filter:"opacity(1)", }}>
        <div className='relative bottom-24 flex flex-col items-center justify-between'>
        <img src={props.src} alt="image" className={`w-44 h-48 xl:mb-5 lg:mb-3 relative transition group-hover/item:bottom-8 group-hover/item:duration-[600ms]`}/>
        <div className="title font-bold text-2xl mb-8 group-hover/item:text-3xl">{props.title}</div>
        <p className="description text-xs font-[Montserrat] flex-1 group-hover/item:text-sm">{props.description}</p>

        <button className="action relative top-14 rounded-full bg-[#2E2D32] px-12 py-2 text-[#F1F379] pb-2 group-hover/item:text-[#40F8FF]">{props.action}</button>
        </div>
      </div>
    </>
  )
}

export default JoinUsCards