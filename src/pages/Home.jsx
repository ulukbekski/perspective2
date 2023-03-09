import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import OutFlipImg from "../components/UI/FlipImg/FlipImg";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";
import "../styles/hero-slider.css";
import AboutSection2 from "../components/UI/AboutSection2";

const Home = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    city: '',
    phone:''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
    
    fetch('/api/my-endpoint', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
  return (
    <Helmet title="Главная">
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <form onSubmit={handleSubmit} className="consalting">
          <input
            placeholder="ФИО"
            className="for_registr"
            type="text"
            name="name"
            onChange={handleChange}
          />
          <input
            placeholder="Телефон"
            className="for_registr"
            type="tel"
            id="phone"
            name="phone"
            onChange={handleChange}
          />
          <input
            placeholder="Город"
            className="for_registr"
            type="text"
            name="city"
            onChange={handleChange}
          />
          <button className="button_for_registr" type="submit">
            Консультация
          </button>
        </form>
      </section>

      <AboutSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle"></h6>
              <h2 className="section__title">Почему выбирают PERSPECTIVE</h2>
            </Col>

            <OutFlipImg/>
          </Row>
        </Container>
      </section>
      <AboutSection2/>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle"> </h6>
              <h2 className="section__title">Отзывы наших студентов</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle"></h6>
              <h2 className="section__title">Последние блоги</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
