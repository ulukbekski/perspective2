import React from "react";
import inst from '../../assets/all-images/free-icon-instagram-4923005.png'
import what from '../../assets/all-images/whatsapp.png'
import mail from '../../assets/all-images/mail.png'
import face from '../../assets/all-images/facebook.png'
import logos from '../../assets/all-images/p__logo-orange.png'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
const quickLinks = [
  {
    path: "/about",
    display: "О нас",
  },

  {
    path: "#",
    display: "Политика конфиденциальности",
  },
  {
    path: "/countries",
    display: "Страны",
  },

  {
    path: "/contact",
    display: "Связаться",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                <img className="hhh" src={logos} alt="логотип" />
                  
                </Link>
              </h1>
            </div>
      
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Другие страницы</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Наши Офисы:</h5>
              <p className="office__info">Ош, ул. Ленина 318</p>
              <p className="office__info">Phone: +996559007650</p>

              <p className="office__info">Email: Itpark@gmail.com</p>

              <p className="office__info">Открыто: с 10:00 утра до 19:00 вечера
              </p>
            </div>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4 " id="adapt">
              <h5 className="footer__link-title">Соц. сети</h5>
                  <p className="office__info flexos">instagram: <img src={inst} alt="" className="logo__icons" /> </p>
                  <p className="office__info flexos">Faceboock: <img src={face} alt="" className="logo__icons" /> </p>
                  <p className="office__info flexos">Whats App: <img src={what} alt="" className="logo__icons kot" /> </p>
                  <p className="office__info flexos">Gmail: <img src={mail} alt="" className="logo__icons" /> </p>
            </div>
          </Col>

          

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Авторские права {year}, Разработано академией ItPark. Все права защищены.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
