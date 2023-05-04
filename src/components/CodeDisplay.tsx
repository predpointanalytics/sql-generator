import React from 'react'

const CodeDisplay = ()=> {
  return (
    <div className='code-display'>
        <div className='buttons'>
            <button className='button first'></button>
            <button className='button middle'></button>
            <button className='button last'></button>
        </div>
        <div className='code-output'>
            <p></p>
        </div>
    </div>
  )
}

export default CodeDisplay