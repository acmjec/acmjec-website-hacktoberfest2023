import React from 'react'
import "./MeetOurTeam.css"

const MeetOurTeam = () => {
  return (
    <div className='mot_main'>
      <div className="mot_temp">
      <div className="first">
            {/* <img src="" alt="" /> */}
            <div className="ellipse">
              <div className="circle"></div>
            </div>
            <div className="first_content">
                <h3>Faculty Mentor ACM JEC</h3>
                <h1>Dr. Jitendra Singh Thakur</h1>
                <h2>Head of Department <br />Computer Science & Engineering</h2>
                <p>"The ACM JEC Student Chapter is more than just a club; it's a hub of knowledge and collaboration. Our aim is to create an environment where you can thrive, learn from each other, and make a meaningful impact in the world of technology. Your ideas and contributions are invaluable, and I'm here to support you every step of the way."</p>
                <div className="git">
                  <div></div>
                  <p>get in touch</p>
                </div>
            </div>
      </div>
      {/* <div className="second"> */}
            <h1>MEET OUR TEAM</h1>
      {/* </div> */}
      <div className="third first">
            <div className="third_content first_content">
                <h3>CHAIRPERSON</h3>
                <h1>ABC XYZ</h1>
                <h2>DEV/PROG DEPARTMENT</h2>
                <p>I encourage you to get involved, share your ideas, and collaborate with fellow members. This chapter is your platform to learn, innovate, and make a difference. Feel free to reach out to me or any of our dedicated members if you have questions or ideas you'd like to discuss.</p>
                <div className="git">
                  <div></div>
                  <p>get in touch</p>
                </div>
            </div>
            <div className="ellipse ellipse2">
              <div className="circle"></div>
            </div>
      </div>
      <button className="read_more">And More...</button>
      </div>
    </div>
  )
}

export default MeetOurTeam
