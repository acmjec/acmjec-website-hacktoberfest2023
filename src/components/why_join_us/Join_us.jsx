import React from 'react'
import JoinUsCards from './JoinUsCards';

function JoinUs() {
    let cardDetails = [
        {
            img_src:'images/professional development.png',
            title:'Professional Development',
            description:'Enhance your skills and knowledge in computing and other technological advancement.',
            action:'Explore',
        },
        {
            img_src:'images/networking opportunities.png',
            title:'Networking Opportunities',
            description:'Connect with like-minded peers, mentors, and industry professionals all across the world.',
            action:'Explore',
        },
        {
            img_src:'images/events and activities.png',
            title:'Events & Activities',
            description:'Participate and encourage others for regular workshops, hackathons, and tech talks.',
            action:'Explore',
        },
        {
            img_src:'images/access to resources.png',
            title:'Access to Resources',
            description:'Access valuable educational materials and resources and be regularly updated.',
            action:'Explore',
        }
    ];
  return (
    <div className='h-screen' >
    <h1 className='text-5xl md:text-8xl pt-10 text-center text-transparent font-[Bayon] bg-clip-text bg-gradient-to-r from-[#FCFF73] from-30% to-70% to-[#0085FF]'>WHY JOIN US</h1>

    <p className='h-9 text-center mb-20 px-4  text-xs md:text-sm lg:text-lg text-white font-[Montserrat]'>Become a part of the world's largest scientific and educational computing society.</p>

    <div className='flex justify-center mt-8 md:mt-auto'>
    <div 
    className="justify-center justify-items-center container xl:w-4/5 lg:w-11/12  w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
    " style={{position: "static", filter: "opacity(1)", marginTop: "6rem"}}>
      {cardDetails.map((card)=>(
        <JoinUsCards src={card.img_src} title={card.title} description={card.description} action={card.action} />
      ))}
    </div>
    </div>
    </div>
  )
}

export default JoinUs