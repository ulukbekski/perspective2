import React from "react";
import {Route, Routes, Link, useNavigate, Navigate, Switch } from "react-router-dom";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import SimpleGallery from "../components/UI/SimpleGallery";
import images from '../assets/data/USAImages'


const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Gallery = () => {
  const navigate = useNavigate()
  return (
    <Helmet title="Галерея">
      <section>
     
      <Switch>
        <Route path="/gallery" element={<Navigate to="/gallery/USA"/> }/>
        <Route path="/gallery/USA" element={  <SimpleGallery galleryID="USA-gallery" images={images}/>}/>
        </Switch>
      </section>
    </Helmet>
  );
};

export default Gallery;

