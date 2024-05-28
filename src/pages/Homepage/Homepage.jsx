import React from 'react'
import StoryCircle from '../../components/Story/StoryCircle'
import HomepageRight from '../../components/HomePageRight/HomepageRight'
import PostsCard from '../../components/Posts/PostsCard'
const Homepage = () => {
  return (
    <div>
      <div className='flex mt-2 w-[100%] justify-center '>
        <div className='w-[65%] px-10 '>
          <div className='storyDiv flex space-x-2 items-center space-y-2 ml-5 justify-start w-full'>
            {[1,1,1,1,1,1,1,1].map((item) => <StoryCircle />)}
          </div>

            <div className='flex-col items-center space-y-25 w-[65%] ml-20 mt-5'>
              {[1,1,1].map((item) => <PostsCard />)}
            </div>

        </div>

        <div className='w-[30%]'>
          <HomepageRight/>
        </div>
      </div>
    </div>
  )
}

export default Homepage
