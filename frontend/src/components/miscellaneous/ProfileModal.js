import { ViewIcon } from '@chakra-ui/icons';
import { IconButton,Image,Text,useDisclosure,Modal,ModalHeader,ModalContent,ModalOverlay,Button,ModalCloseButton,ModalBody,ModalFooter } from '@chakra-ui/react';
import React from 'react'

const ProfileModal = ({user,children}) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();

    console.log(user);


    return (
    <>
        {children ?
            (
                <span onClick={onOpen}> {children} </span>
            ) : (
                <IconButton 
                    d={{base:"flex"}}
                    icon={<ViewIcon />}
                    onClick={onOpen}
                />
            )
        }
        <Modal size='lg'  isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
            height='410px'
        >
          <ModalHeader
            fontSize='40px'
            fontFamily='Work sans'
            display='flex'
            justifyContent='center'
          > {user.result.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody 
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='space-between'
          >
                <Image 
                    borderRadius='full'
                    boxSize='150px'
                    src={user.result.pic}
                    alt={user.result.name}
                > 
                </Image>

                <Text
                    fontSize={{base:"28px",md:"30px"}}
                    fontFamily='Work sans'
                >
                    Email : {user.result.email}
                </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal> 
    </>
  )
}

export default ProfileModal
