import React from 'react'
import { Box , IconButton, Text, cookieStorageManager } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import { ChatState } from '../Context/ChatProvider'
import { getSender , getSenderFull } from './Config/ChatsLogic';
import ProfileModal from './miscellaneous/ProfileModal';
import UpdateGroupChatModal from './miscellaneous/UpdateGroupChatModal';

const SingleChats = ({fetchAgain,setFetchAgain}) => {
    
    // const { user , selectedChat, setSelectedChat , chats,setChats } = ChatState();
    const { user , selectedChat, setSelectedChat} = ChatState();

    console.log(selectedChat);
    console.log(user);

    return (
    <>
        {selectedChat ? (
            <>
                <Text
                    fontSize={{base:"20px",md:"25px"}}
                    pb={3}
                    px={2}
                    w="100%"
                    fontFamily="Work sans"
                    display='flex'
                    justifyContent={{base:"space-between"}}
                    alignItems='center'
                >
                    <IconButton
                        display={{base:"flex",md:"none"}}
                        icon={<ArrowBackIcon />}
                        onClick={() => setSelectedChat("")}
                    />
                    {!selectedChat.isGroupChat ? (
                        <>
                            {getSender(user?.result, selectedChat.users)}
                            <ProfileModal user={getSenderFull(user?.result, selectedChat.users)}/>
                            {console.log(user)}
                        </>
                    ) : (
                        <> {selectedChat.chatName.toUpperCase()}                            
                                <UpdateGroupChatModal

                                    fetchAgain={fetchAgain}
                                    setFetchAgain={setFetchAgain}
                                >
                                
                                </UpdateGroupChatModal>
                        </> 
                        // <h2> Hello </h2>
                    )}
                </Text>

                        <Box
                            display='flex'
                            flexDir='column'
                            justifyContent='flex-end'
                            p={3}
                            bg="#E8E8E8"
                            w="100%"
                            h="100%"
                            borderRadius="lg"
                            overflowY="hidden"
                            
                        >
                            {/* Messages Here  */}
                        </Box>
            </>
        ) : (
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    h='100%'
                >
                    <Text fontSize='3xl' pb={3} fontFamily='Work sans'>
                        Click on a user to start Chatting
                    </Text>
                    
                </Box>
        )}
    </>
  )
}

export default SingleChats
