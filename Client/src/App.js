import React from 'react';
import {Container} from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Auth from './Components/Auth/auth';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Container maxwidth="lg">
          <Navbar/>  
          <Routes>
              <Route path="/" exact element={<Auth/>} /> 
              <Route path="events" element={<Home/>} />               
          </Routes>
        </Container>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
