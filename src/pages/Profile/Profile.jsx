import React from 'react'
import ProfileUserDetails from '../../components/ProfileComponents/ProfileUserDetails'
import ReqUserPostPart from '../../components/ProfileComponents/ReqUserPostPart'
import ReqUserPPostCard from '../../components/ProfileComponents/ReqUserPostCard'

const Profile = () => {
  return (
    <div className=''>
      <div className='px-0'>
        <ProfileUserDetails />
      </div>
      <div>
        <ReqUserPostPart />
      </div>
      <div>
        <ReqUserPPostCard />
      </div>
    </div>
  )
}

export default Profile
