import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack ,Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const SignUp = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [pic, setPic] = useState('')

    const postDetails = (pics) => {

    }

    const submitHandler = () => {

    }

    const handleClick = () => {
        setShow(!show)
    }


    return (
        <VStack spacing={'5px'}>

                {/* -------------------------- Name ---------------------------- */}
            <FormControl id='first-name' isRequired>
                <FormLabel >Name</FormLabel>
                <Input
                    placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)}
                >
                </Input>
            </FormControl>

            {/* - ---------------------------- Email ---------------------------- */}

            <FormControl id='email' isRequired>
                <FormLabel >Email</FormLabel>
                <Input
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                >
                </Input>
            </FormControl>

            {/* ----------------------- Password -------------------------*/}

            <FormControl id='password' isRequired>
                <FormLabel >Password</FormLabel>
                <InputGroup >
                    <Input
                        type={show ? "password" : "text"}
                        placeholder='Enter Your Password'
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Input>
                    <InputRightElement >
                        <Button h='1.75em' size='sm' onClick={handleClick}>
                            {show ? "🙈" : "🙉"}    
                            {/* {show ? "Hide" : "Show"} */}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
                                    {/* --------------- Confirm Password ---------------- */}

            <FormControl id='confirm-password' isRequired>
                <FormLabel > Confirm Password</FormLabel>
                <InputGroup >
                    <Input
                        type={show ? "password" : "text"}
                        placeholder='Enter Your Password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Input>
                    <InputRightElement >
                        <Button h='1.75em' size='sm' onClick={handleClick}>
                            {show ? "🙈" : "🙉"}    
                            {/* {show ? "Hide" : "Show"} */}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

                {/* ----------------------- Image ---------------------------- */}

                <FormControl>
                    <FormLabel>Profile Picture</FormLabel>
                    <Input type='file' p={1.5} accept='image/*' onChange={(e) => postDetails(e.target.files[0])} />   
                </FormControl>

            <Button
                colorScheme='blue'
                width={'100%'}
                style={{ marginTop:15 }}
                onClick={submitHandler}
            >Submit</Button>
        </VStack>
    )
}

export default SignUp
