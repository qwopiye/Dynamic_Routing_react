import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Blog from "./pages/Blog";
import Home from "./pages/Home"; 
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navber from "./component/Navber";
import Blogs from "./pages/Blogs";



function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
       <Navber/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:title" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
