import React from 'react'
import MessageDisplay from './MessageDisplay'

interface UserMessage{
  role: string,
  content: string
}

interface MessagesDisplayProp {
  userMessages: UserMessage[]
}

const MessagesDisplay = ({userMessages} : MessagesDisplayProp)=> {
  return (

    <div className='messages-display'>
      {
      userMessages.map((message, _index) => {
        return <MessageDisplay key={_index} message={message}/>
      }
      
    )
    }
    </div>
    

    // <div className='messages-display'>
        
    //     <MessageDisplay/>
    //     <MessageDisplay/>
    //     <MessageDisplay/>
    //     <MessageDisplay/>
    //     <MessageDisplay/>
    //     <MessageDisplay/>
    //     <MessageDisplay/>
    //     <MessageDisplay/>
    //     <MessageDisplay/>
    // </div>
  )
}

export default MessagesDisplay