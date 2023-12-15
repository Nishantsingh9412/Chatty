import React from 'react'
import ScrollableFeed from 'react-scrollable-feed'
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from './Config/ChatsLogic'
import { Avatar, Tooltip } from '@chakra-ui/react';
import { ChatState } from '../Context/ChatProvider';


const ScrollableChat = ({messages}) => {

    const { user } = ChatState();

    return (
    <ScrollableFeed>
        {messages && messages.map((m,i) => (
            <div style={{display:'flex'}} key={m.id}>
                {
                    (isSameSender(messages,m,i,user?.result?._id) 
                    || isLastMessage(messages,i,user?.result?._id)) && (
                    <Tooltip label = {m.sender.name} placement='bottom-start' hasArrow >
                    <Avatar 
                        mt='7px'
                        mr={1}
                        size="sm"
                        cursor={'pointer'}
                        name={m.sender.name}
                        src={m.sender.pic}
                    />

                    </Tooltip>
                )}
                <span style={{backgroundColor:`${
                    m.sender._id === user?.result?._id ? "#BEE3F8" : "#B9F5DO"
                    }`,
                
                    borderRadius:'20px',
                    padding:'5px 15px',
                    maxWidth:'75%',
                    marginLeft:isSameSenderMargin(messages,m,i,user?.result?._id),
                    marginTop:isSameUser(messages,m,i,user?.result?._id) ? 3 : 10,
                }}>

                  {m.content}
                </span>
            </div>
        ))}
    </ScrollableFeed>
  )
}

export default ScrollableChat
