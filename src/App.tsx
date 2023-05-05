import { useState } from "react";
import CodeDisplay from "./components/CodeDisplay";
import MessagesDisplay from "./components/MessagesDisplay";

interface ChatData {
  role: string,
  content: string,
}

const App = ()=> {

  const [chat, setChat] = useState<ChatData[]>([])
  const [value, setValue] = useState('')

  const getQuery = async () =>{
    try {
      const options ={
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: value
        })
      }
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      const userMessage = {
        role: 'user',
        content: value
      }
      // console.log(data)
      setChat(oldChat => [...oldChat, data, userMessage])
     
    } catch (error) {
      console.log(error)
    }
  }

  const clearChat = () =>{
    setChat([])
    setValue('')
  }

  console.log(chat)

  const filteredUserMessages = chat.filter(message => message.role ==='user')
  const latestCode = chat.filter(message=> message.role === 'assistant').pop()

  return (
    <div className="app">
      <MessagesDisplay userMessages = {filteredUserMessages}/>
      <input placeholder="Type here to generate SQL Code " value={value} onChange={e=> setValue(e.target.value)}/>
      <CodeDisplay text={latestCode?.content || ''}/>
      <div className="button-container">
        <button id='get-query' onClick={getQuery}>Get Query!</button>
        <button id="clear-chat" onClick={clearChat}>Clear</button>
      </div>
    </div>
  );
}

export default App;
