import React from 'react'
import "./Category-Styles.css"
import hackthons from "./assets/hackthon.png"
import seminars from "./assets/seminars.png"
import techtalks from "./assets/techtalks.png"

const Category = () => {
    return (
        <div className='category-section'>
            <div className="category-heading text-5xl md:text-8xl pt-10 text-center text-transparent font-[Bayon] bg-clip-text bg-gradient-to-r from-[#FCFF73] from-30% to-70% to-[#0085FF]">Explore</div>
            <div className="category-subheading text-4xl md:text-5xl text-center text-transparent font-[Bayon] bg-clip-text bg-gradient-to-r from-[#FCFF73] from-30% to-70% to-[#0085FF]">By Category</div>
            <div className="category-section-cards">
                <div className="category-card">
                    <img src={hackthons} alt="hackthons" />
                    <p className='category-section-text'>Hackthons</p>
                </div>
                <div className="category-card">
                    <img src={seminars} alt="seminar" />
                    <p className='category-section-text'>Seminars</p>
                </div>
                <div className="category-card">
                    <img src={techtalks} alt="techtalk" />
                    <p className='category-section-text'>Tech Talks</p>
                </div>
            </div>
            <div className="see-more">
                <button className='see-more-button'>SEE MORE</button>
            </div>
        </div>
    )
}

export default Category