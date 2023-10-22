import React from 'react'
import './Events.css'
import firstEvent from '../../../public/images/interactive session.jpg'
import secondEvent from '../../../public/images/java session.jpg'
import grid2 from '../../../public/images/grid2.jpg'

const Event = () => {

  const upcomingEvents = [
    {
      h1: "Codeathon",
      p: "March 2024",
      RSPV: true
    },
    {
      h1: "Republic Coders 3.0",
      p: "January 2024",
      RSPV: false
    },
    {
      h1: "HactoberFest 2023",
      p: "October 2023",
      RSPV: true
    },
    {
      h1: "Codepentry",
      p: "March 2024",
      RSPV: true
    },
    {
      h1: "Tech Trends Seminar",
      p: "April 2024",
      RSPV: false
    },
    {
      h1: "Interactive Session",
      p: "May 2024",
      RSPV: false
    },
  ]

  return (
    <div className='evnt_cont'>
      <div className="evnt_main">
        <img src={grid2} alt="" />
        <div className="evnt_card">
            <img src={firstEvent} alt="" />
            <div className="content1">
                <h1>SAMEER BAMANHA</h1>
                <h3>Guest Speaker</h3>
            </div>
            <div className="content2">
                <h1>ONLINE</h1>
                <h3>Google Meet</h3>
            </div>
            <button>Read More</button>
        </div>
        <div className="evnt_card">
            <img src={secondEvent} alt="" />
            <div className="content1">
                <h1>SAMEER BAMANHA</h1>
                <h3>Guest Speaker</h3>
            </div>
            <div className="content2">
                <h1>ONLINE</h1>
                <h3>Google Meet</h3>
            </div>
            <button>Read More</button>
        </div>
      </div>

      <div className="all_about_event">
        <h1>ALL ABOUT EVENTS</h1>
        <h2>OF JEC ACM</h2>
        <p>Stay connected and informed about upcoming events and activities organized by ACM JEC Student Chapter. Our events are designed to enhance your knowledge, provide hands-on experience, and foster networking within the tech community. Join us for these exciting opportunities!</p>
      </div>

      <div className="upcoming_events">
        <h1>UPCOMING EVENTS</h1>
        <div className="upcoming_events_cont">
            {
              upcomingEvents.map((item) => (
                <div>
                <div className="upcoming_event_card">
                    <div className="ue_circle"></div>
                    <div className="ue_content">
                      <h1>{item.h1}</h1>
                      <p>{item.p}</p>
                    </div>
                    {item.RSPV ? (<h2>RSPV</h2>): null}
                </div>
                </div>
              ))
            }
        </div>
        <div className="ue_btn">
          <button>See More</button>
        </div>
      </div>
    </div>
  )
}

export default Event
