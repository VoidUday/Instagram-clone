import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
const ReqUserPPostCard = () => {
  return (
    <div>
      <div className='flex items-center mx-20 mt-2'>
        <img className='cursor-pointer w-80 h-80 border ' src="https://cdn.pixabay.com/photo/2021/04/07/17/01/woman-6159648_960_720.jpg" alt="" />
        <div>
            <div>
                <AiFillHeart></AiFillHeart><span>10</span>
            </div>
            <div>
                <FaComment></FaComment><span>10</span>
            </div>
        </div>

        <img className='cursor-pointer w-80 h-80 border ' src="https://cdn.pixabay.com/photo/2021/04/07/17/01/woman-6159648_960_720.jpg" alt="" />
        <div>
            <div>
                <AiFillHeart></AiFillHeart><span>10</span>
            </div>
            <div>
                <FaComment></FaComment><span>10</span>
            </div>
        </div>

        <img className='cursor-pointer w-80 h-80 border ' src="https://cdn.pixabay.com/photo/2021/04/07/17/01/woman-6159648_960_720.jpg" alt="" />
        <div>
            <div>
                <AiFillHeart></AiFillHeart><span>10</span>
            </div>
            <div>
                <FaComment></FaComment><span>10</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ReqUserPPostCard
