import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Blog from "./pages/Blog";
import Home from "./pages/Home"; 
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navber from "./component/Navber";
import Protected from './Protected'
const index = () => {
   const[isloggedIn,setloggedIn]=useState(false);
  return (
    <div className="App">
    
      <BrowserRouter>
       <Navber/>
        {isloggedIn ? <button
         onClick={()=>{
          setloggedIn(!isloggedIn)
        }}
        >Loge Out</button>: 
        <button
         onClick={()=>{
          setloggedIn(!isloggedIn)
        }}
        >Log in</button>}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Protected isloggedIn={isloggedIn}>
            <Blog />
          </Protected>} />
        
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default index
