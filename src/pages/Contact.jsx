import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";



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

const Contact = () => {
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
    <Helmet title="Контакты">
 
     
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Будьте на связи</h6>
              <Form onClick={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input onChange={handleChange} placeholder="Ваше имя" type="text"  name="name"/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input onChange={handleChange}  placeholder="Телефон" className="for_registr" type="tel"  id="phone" name="phone"/>
                </FormGroup>
                <FormGroup className="contact__form">
                <Input onChange={handleChange}  placeholder="Город" className="for_registr" type="text" name="city" />
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Отправить сообщение
                </button>
              </Form>
            </Col>

            {/* <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Контактные данные</h6>
                <p className="section__description mb-0">
                  Ош, ул. Ленина 318
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+996559007650</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">Itpark@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Подпишитесь</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
