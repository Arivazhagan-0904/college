import React from 'react'

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="  bg-neutral text-neutral-content w-8 rounded-full">
          <span>D</span>

        </div>
      </div>
      <div className={"chat-bubble text-white bg-blue-500 " }>hi! WHAT IS UPP?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center ">12:42</div>

    </div>
  )
}

export default Message