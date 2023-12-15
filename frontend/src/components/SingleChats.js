import React, { useEffect, useState } from 'react'
import {
    Box,
    FormControl,
    IconButton,
    Input,
    Spinner,
    Text,
    Toast,
    cookieStorageManager,
    useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { ArrowBackIcon } from '@chakra-ui/icons';
import CSS from '../components/SingleChats.module.css';
import { ChatState } from '../Context/ChatProvider'
import { getSender, getSenderFull } from './Config/ChatsLogic';
import ProfileModal from './miscellaneous/ProfileModal';
import UpdateGroupChatModal from './miscellaneous/UpdateGroupChatModal';
import ScrollableChat from './ScrollableChat';

const SingleChats = ({ fetchAgain, setFetchAgain }) => {
    const { user, selectedChat, setSelectedChat } = ChatState();

    const [message, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState();
    const toast = useToast();

    const fetchMessages = async () => {
        if (!selectedChat) {
            return;
        }
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            setLoading(true);
            const { data } = await axios.get(`/api/messages/${selectedChat._id}`, config);
            setMessages(data)
            setLoading(false);
        } catch (error) {
            toast({
                title: "Something went wrong",
                description: "failed to load messages",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            })
        }
    }

    useEffect(() => {
        fetchMessages();
    }, [selectedChat])

    const handleSendMessage = async (e) => {
        if (e.key === "Enter" && newMessage) {
            try {
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user.token}`,
                    },
                }

                setNewMessage("");

                const { data } = await axios.post(`/api/messages`, {
                    content: newMessage,
                    chatId: selectedChat._id,
                }, config);

                setMessages([...message, data]);

            } catch (error) {
                toast({
                    title: "Something went wrong",
                    description: "failed to send message",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom",
                })
            }
        }
    }

    const typingHandler = (e) => {
        setNewMessage(e.target.value);
    }

    return (
        <>
            {selectedChat ? (
                <>
                    <Text
                        fontSize={{ base: "20px", md: "25px" }}
                        pb={3}
                        px={2}
                        w="100%"
                        fontFamily="Work sans"
                        display='flex'
                        justifyContent={{ base: "space-between" }}
                        alignItems='center'
                    >
                        <IconButton
                            display={{ base: "flex", md: "none" }}
                            icon={<ArrowBackIcon />}
                            onClick={() => setSelectedChat("")}
                        />
                        {!selectedChat.isGroupChat ? (
                            <>
                                {getSender(user?.result, selectedChat.users)}
                                <ProfileModal user={getSenderFull(user?.result, selectedChat.users)} />
                            </>
                        ) : (
                            <> {selectedChat.chatName.toUpperCase()}
                                <UpdateGroupChatModal
                                    fetchAgain={fetchAgain}
                                    setFetchAgain={setFetchAgain}
                                    fetchMessages={fetchMessages}
                                />
                            </>
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
                        {loading ? (
                            <Spinner
                                size='xl'
                                w={20}
                                h={20}
                                alignSelf='center'
                                margin='auto'
                                color='blue.500'
                            />
                        ) : (
                            <div className={CSS.messages}>
                                <ScrollableChat
                                    messages={message}
                                />
                            </div>
                        )}

                        <FormControl
                            onKeyDown={handleSendMessage}
                            isRequired mt={3}
                        >
                            <Input
                                variant={'filled'}
                                value={newMessage}
                                bg="#E0E0E0"
                                placeholder='Type a message .......'
                                onChange={typingHandler}
                            />
                        </FormControl>
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