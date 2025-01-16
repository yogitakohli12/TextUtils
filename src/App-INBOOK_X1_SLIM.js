import React from 'react';
import Navbar from './components/Navbar';
import  Textfield from './components/Textfield';


import {
  BrowserRouter, Route, Routes ,
  

  
} from "react-router-dom";
import About from './components/About';
function App() {
  return (
    < >
    <BrowserRouter>
     <Navbar title="WordCounter" about="About" />
     <Routes>
      <Route  exact path="/Textutils" element={<Textfield heading="word counter/character counter/manipulation on words" />} />
      <Route exact path='/About' element={<About/>} />
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
