import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ChatPage = () => {

  const [chats,setChats] = useState([]);

  const fetchChats = async() => {
    const {data} = await axios.get('/api/chat');
    console.log(data)
    setChats(data);
  }


  useEffect(() => {
    fetchChats();
  },[]);

  return (
    <div>
        {
          chats.map(chat => (
            <div key={chat._id}>
              <h2 key={chat._id}>{chat.chatName}</h2>
              <p>{chat.message}</p>
            </div>
          ))
        }
      <h2 > Cjkv saj sjk s </h2>
    </div>
  )
}

export default ChatPage
