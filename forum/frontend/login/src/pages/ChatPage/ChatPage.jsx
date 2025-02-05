import React from 'react'


import NamesBar from "./NamesBar/NamesBar.jsx";
import MessageContainer from './MessageContainer/MessageContainer.jsx';



const ChatPage = ()=>
  {
  return (
    <div className="flex sm:h-[450px] md:h-[955px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
      <NamesBar/>
      <MessageContainer/>
      
      


      
    </div>
  )
}

export default ChatPage