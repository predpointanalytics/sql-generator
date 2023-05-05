import React from 'react'

interface UserMessage{
  role: string,
  content: string
}

interface MessageDisplayProp{
  message: UserMessage
}

const MessageDisplay = ({message}: MessageDisplayProp)=> {
  return (
    <div className='message-display'>
        <p id='icon'></p>
        <p id='user'>⊚</p>
        <p>{message.content}</p>
    </div>
  )
}

export default MessageDisplay