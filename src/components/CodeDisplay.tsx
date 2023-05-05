import React from 'react'

interface CodeDisplayProp{
  text: string
}

const CodeDisplay = ({text}:CodeDisplayProp)=> {
  return (
    <div className='code-display'>
        <div className='buttons'>
            <button className='button first'></button>
            <button className='button middle'></button>
            <button className='button last'></button>
        </div>
        <div className='code-output'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default CodeDisplay