import React from 'react'
import MainLanding from './MainLanding/MainLanding'
import Join_us from './why_join_us/Join_us'

function LandingPage() {
  return (
    <div className='text-blue-300 text-2xl'>
      <MainLanding />
      <Join_us />
    </div>
  )
}

export default LandingPage