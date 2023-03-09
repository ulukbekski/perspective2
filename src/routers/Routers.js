import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";

import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import SimpleGallery from "../components/UI/SimpleGallery";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/perspective" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/countries" element={<Blog />} />
      <Route path="/countries/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};


export default Routers;
