import React from 'react'
import {Modal,ModalOverlay, ModalContent,ModalBody } from '@chakra-ui/react'

const CommentsModel = (onClose, isOpen) => {
  return (
    <div>
        <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
  
          <ModalBody>
            <div className='flex w-full '>
              <div className='w-[45%]' >
                <img className='w-full max-h-full mr-1' src="https://cdn.pixabay.com/photo/2023/12/26/17/38/ai-generated-8470716_1280.png" alt="" />
              </div>
              <div className='w-[55%] bg-white'>
                 
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentsModel
