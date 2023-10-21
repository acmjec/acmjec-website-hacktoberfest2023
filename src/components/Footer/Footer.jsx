import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="bg-[#07060E] px-4 py-20">
        <div className="footer-card lg:w-5/12 relative bottom-32 bg-white rounded-3xl px-4 py-4 text-black font-bold mx-auto flex justify-around md:w-7/12 md:flex-row flex-col">
            <div className='md:w-64 text-center md:text-start'>
            <h3 className='text-lg'>Confused about the 'WHAT', 'WHERE' & 'HOW' to start your tech journey?</h3>
            <p className='text-xs'>We provide a treasure trove of valuable resources designed to enhance your knowledge, sharpen your skills, and fuel your passion for emerging technologies.</p>
            <button className='bg-[#1E1E2D] text-white text-xs px-4 py-2 rounded-3xl mt-4'>Resource Hub</button>
            </div>
            <div className="footer-card-img md:mt-0 mt-8 mx-auto md:mx-0">
                <img src="images/left ellipse.jpg" className='rounded-tl-3xl rounded-br-3xl relative md:bottom-12' alt="img" width={150} />
            </div>
        </div>
        <div className="flex justify-center md:mb-20 mb-8 md:flex-row flex-col md:items-center">
        <button className='bg-gradient-to-r from-[#FFF500] to-[#00CCFF] md:mx-8 rounded-3xl text-xs text-black font-bold px-12 py-3 w-44 mx-auto'>SIGN UP</button>
        <div className='flex justify-center items-center mt-8 md:mt-0'>
        <i className='fa-brands fa-google px-3 py-1 text-lg mx-2 ' style={{border: '1px solid #00E0FF', borderRadius:'50%', cursor:'pointer'}}></i>
        <i className='fa-brands fa-linkedin-in px-3 py-1 text-lg mx-2' style={{border: '1px solid #00E0FF', borderRadius:'50%', cursor:'pointer'}}></i>
        <i className='fa-brands fa-facebook-f px-4 py-1 text-lg mx-2' style={{border: '1px solid #00E0FF', borderRadius:'50%', cursor:'pointer'}}></i>
        </div>
        </div>

        <div className="flex justify-around items-center md:flex-row flex-col">
            <div className="logo flex items-center">
                <img src="images/ACM JEC Logo.png" alt="logo" width={110}/>
                <h3 className='font-[Bayon] bg-[#00F0FF] bg-clip-text text-transparent md:text-4xl relative bottom-2' > <span className='bg-[#FBFF49] bg-clip-text text-transparent'>JEC</span> ACM</h3>
            </div>
            <div className="links text-white text-xs font-bold">
                <a href="#" className='lg:mx-12 relative bottom-2 md:mx-4 mx-1'>Home</a>
                <a href="#" className='lg:mx-12 relative bottom-2 md:mx-4 mx-1'>Office</a>
                <a href="#" className='lg:mx-12 relative bottom-2 md:mx-4 mx-1'>Resources</a>
                <a href="#" className='lg:mx-12 relative bottom-2 md:mx-4 mx-1'>Join Us</a>
            </div>
        </div>
        <div className="container mx-auto">
            <hr />
        </div>
        <div className="flex items-center justify-around flex-col md:flex-row">
        <div className="mt-8 text-center">
            <div className='text-xs text-[#FEFEFE66]'>Contact us at:</div>
            <div className='text-lg'>
                <i style={{cursor:'pointer'}} className='me-4 fa-brands fa-twitter'></i>
                <i style={{cursor:'pointer'}} className='me-4 fa-brands fa-linkedin'></i>
                <i style={{cursor:'pointer'}} className='me-4 fa-brands fa-instagram'></i>
                <i style={{cursor:'pointer'}} className='me-4 fa-brands fa-discord'></i>
                <i style={{cursor:'pointer'}} className='me-4 fa-regular fa-envelope'></i>
            </div>
        </div>
            <div className='text-xs text-[#FEFEFE66] text-center mt-4 md:mt-0'>JEC ACM, Jabalpur Engineering College, Jabalpur</div>
        </div>
        <div className="flex xl:justify-evenly text-white mt-4 justify-center items-center">
          
            <div className='text-xs text-[#FEFEFE66] flex flex-col text-center md:flex-row'>
                <a href="#" className='lg:mx-8 md:mx-2 md:mb-0 mb-2'>Privacy Policy</a>
                <a href="#" className='lg:mx-8 md:mx-2 md:mb-0 mb-2'>Terms of Use</a>
                <a href="#" className='lg:mx-8 md:mx-2 md:mb-0 mb-2'>© ACM-JEC 2022 - All rights reserved</a>
            </div>
        </div>

      </div>
    </>
  )
}
