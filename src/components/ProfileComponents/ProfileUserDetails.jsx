import React from 'react'
import { IoIosSettings } from 'react-icons/io'

const ProfileUserDetails = () => {
  return (
    <div className='py-8 px-40 w-full '>
      <div className='flex items-center'>
        <div>
            <img className='w-40 h-40 rounded-full object-cover' src="https://cdn.pixabay.com/photo/2024/02/17/05/42/ai-generated-8578756_640.jpg" alt="" />
        </div>
        <div>
          <div className='flex space-x-2 items-center mx-20 '>
            <p className='mx-2 font-semibold'>Miss Sahani</p>
            <button className='bg-gray-200 hover:bg-gray-400 text-gray-600 font-semibold py-0.5 px-2 rounded inline-flex items-center'>Edit profile</button>
            <button className='bg-gray-200 hover:bg-gray-400 text-gray-600 font-semibold py-0.5 px-2 rounded inline-flex items-center'>View archive</button>
            <IoIosSettings className='text-2xl mr5 cursor-pointer'></IoIosSettings>
          </div>

          <div className='flex items-center mx-20  p-2 mt-5 space-x-10'>
            <div className='space-x-1 '>
              <span className='font-semibold'>10</span>
              <span>Posts</span>
            </div>
            <div className='space-x-1'>
              <span className='font-semibold'>5</span>
              <span>Followers</span>
            </div>
            <div className='space-x-1'>
              <span className='font-semibold'>500</span>
              <span>Following</span>
            </div>
          </div>

             
          <div className='space-y-5 text-xs mx-20 p-2'>
            <div>
               <p>BJ Sahni</p>
               <p>Enginerr Grads || Cool boys || BJP || SP || Ab ki bar Modi Sarkar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserDetails
