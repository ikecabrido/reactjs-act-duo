import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import  Home from "./components/pages/Home";
import  About  from "./components/pages/About";
import  HowitWorks  from "./components/pages/HowitWorks";
import  Tuition  from "./components/pages/Tuition";
import  Partners  from "./components/pages/Partners";
import  Blogs from "./components/pages/Blogs";
import  Faqs from "./components/pages/Faqs";
import  Sign from "./components/pages/Sign";
import  Apply from "./components/pages/Apply";
import  Careers from "./components/pages/Careers";
import Courses from "./components/pages/Courses";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/howitworks" element={<HowitWorks/>} />
        <Route path="/tuition" element={<Tuition/>} />
        <Route path="/partners" element={<Partners/>} />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/sign" element={<Sign/>} />
        <Route path="/apply" element={<Apply/>} />
        <Route path="/courses" element={<Courses/>} />

      </Routes>
    </div>
  );
}
export default App;