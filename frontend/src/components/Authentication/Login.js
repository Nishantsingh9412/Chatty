import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack ,Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const postDetails = (pics) => {

  }

  const submitHandler = () => {

  }

  const handleClick = () => {
      setShow(!show)
  }


  return (
      <VStack spacing={'5px'}>

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
                               
          <Button
              colorScheme='blue'
              width={'100%'}
              style={{ marginTop:15 }}
              onClick={submitHandler}
          >Login</Button>
      </VStack>
  )
}

export default Login
