import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import '../Posts/PostsCard.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart} from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { BiBookmark } from 'react-icons/bi';

const PostsCard = () => {
    
    const [showDropDown, setDropDown] = useState(false);
    const [isPostLike, setIsPostLike] = useState(false);
    const handleClick = ()=>{
       setDropDown(!showDropDown);
    }
    const postLikeClick = () => {
       setIsPostLike(!isPostLike);
    }
  return (
    <div>
      <div>
        <div className=' w-full '>
          <div className='flex items-center justify-between w-full py-4 px-0'>
            <div className='flex items-center '>
                <img className='h-8 w-8 border-spacing-2 border-red-500 rounded-full' 
                 src="https://cdn.pixabay.com/photo/2022/03/21/06/31/woman-7082378_960_720.jpg" 
                 alt="" 
                />
                <div className='pl-2'>
                    <p className='font-semibold text-sm '>username</p>
                    <p className='font-thin text-sm'>location</p>
                </div>
            </div>
            <div className='dropdown'>
              <BsThreeDots onClick={handleClick}/>
              <div className='dropdown-content dots'>
               {showDropDown && <p className='bg-black text-white py-1 px-1 rounded-md cursor-pointer'>Delete</p>}
              </div>
            </div>
          </div>
           <div className='w-full'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2023/12/26/17/38/ai-generated-8470716_1280.png" alt="" />
           </div>

           <div className='flex items-center justify-between mt-4'>
            <div className='flex space-x-3'>
              <AiFillHeart className='text-3xl' onClick={postLikeClick} />
              { postLikeClick && <AiOutlineHeart className='text-3xl'/>}
              <FaRegComment className='text-2xl mt-1' />
             
            </div>
              <BiBookmark className='text-3xl'/>
           </div>
        </div>
      </div>
      
    </div>
  )
}

export default PostsCard
