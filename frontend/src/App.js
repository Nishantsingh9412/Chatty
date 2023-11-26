import { Button } from '@chakra-ui/react';
import {Routes,Route} from 'react-router-dom';  

import './App.css';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} exact   />
        <Route path='/chats' element={<ChatPage />}  />
      </Routes>
      {/* <Button colorScheme='blue'>Button</Button> */}
      {/* <h2> Hello </h2> */}
    </div>
  );
}

export default App;
