import React from 'react'
import Messages from "./Messages.jsx"
import MessageInput from '../MessageInput.jsx'

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450] flex flex-col">
      <>
      {/*Header*/}
            <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="">To:</span>{" "}
              <span className="text-gray-900 font-bold">
                Dhanusree
              </span>
            </div>
            <Messages/>
            <MessageInput/>
      </>

      
    </div>
  )
}

export default MessageContainer