import React from 'react'
import MainLanding from './MainLanding/MainLanding'
import Join_us from './why_join_us/Join_us'
import MeetOurTeam from './MeetOurTeam/MeetOurTeam'

function LandingPage() {
  return (
    <div className='text-blue-300 text-2xl overflow-x-hidden overflow-y-hidden'>
      <MainLanding />
      <Join_us />
      <MeetOurTeam />
    </div>
  )
}

export default LandingPage