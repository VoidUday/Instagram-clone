import React, { useState } from 'react'
import { BsThreeDots, BsEmojiSmile } from 'react-icons/bs'
import '../Posts/PostsCard.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart} from 'react-icons/ai';
import { FaRegComment,FaBookmark } from 'react-icons/fa';
import { BiBookmark } from 'react-icons/bi';
import { PiShareFat } from 'react-icons/pi';
import CommentsModel from '../Comments/CommentsModel';

const PostsCard = () => {
    const [postComment, setPostComment] = useState(false);
    const [showDropDown, setDropDown] = useState(false);
    const [isPostLike, setIsPostLike] = useState(false);
    const [isBookmarks, setBookmarks] = useState(false);

    const handleBookmarks = ()=> {
      setBookmarks(!isBookmarks);
    }
    const postCommentClick = ()=> {
      setPostComment(!postComment);
    }
    const handleClick = ()=>{
       setDropDown(!showDropDown);
    }
    const postLikeClick = () => {
       console.log("Like button is click");
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
              { isPostLike ? <AiFillHeart className='hover:opacity-50 fill-red-600 cursor-pointer text-3xl' onClick={postLikeClick} /> 
              : <AiOutlineHeart onClick={postLikeClick} className='text-3xl hover:opacity-50'/> }
              <FaRegComment onClick={postCommentClick} className='text-2xl mt-1 hover:opacity-50 cursor-pointer' />
              <PiShareFat className='hover:opacity-50 cursor-pointer text-3xl'/>
            </div>
              { isBookmarks ? <FaBookmark onClick={handleBookmarks} className='text-xl'/> 
              : <BiBookmark onClick={handleBookmarks} className='text-2xl'/> }
           </div>
           {/* like and comment count */}
           <div className='w-full py-2 px-0'>
              <p>10 likes</p>
              <p className='opacity-50 py-1 cursor-pointer'>View all 10 comments</p>
           </div>
           
           <div className='flex w-full items-center border-b-2 py-0'>
            <input className='commentInput' type="text" placeholder='Add a comment'/>
            <BsEmojiSmile className='comment-emoji'/> 
            </div>
        </div>
      </div>
      <CommentsModel />
    </div>
  );
}

export default PostsCard
