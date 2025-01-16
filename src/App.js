import React from 'react';
import Navbar from './components/Navbar';
import  Textfield from './components/Textfield';


import {
  BrowserRouter ,
  

  
} from "react-router-dom";
function App() {
  return (
    < >
    <BrowserRouter>
     <Navbar title="TextUtils" about="" />
     
     <Textfield heading="TextUtils APP- word counter/character counter/manipulation on words" />
     
     
    </BrowserRouter>
    </>
  );
}

export default App;
