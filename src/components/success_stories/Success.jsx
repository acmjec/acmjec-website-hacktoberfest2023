import React from 'react'
import Spline from '@splinetool/react-spline'
import './Success.css'

const Success = () => {
    return (

        <div className='success-container'>
            <div className="success-text">
                <div className="success-main-text">
                    <h1>READ OUR SUCCESS STORIES</h1>
                </div>
                <div className="success-sub-text">
                    <p>Read success stories of former members who have</p>
                    <p>benefited from the chapter's activities.</p>
                </div>
            </div>
            <div className="success-button-div">
                <button className='relative top-6 rounded-full bg-[#2E2D32] px-12 py-2 text-[#38B7FE] pb-2'>Learn More</button>
            </div>
            <div className="success-component">
                <Spline scene="https://prod.spline.design/CrstQwwaG8URiQlW/scene.splinecode" />
            </div>
        </div>
    )
}

export default Success