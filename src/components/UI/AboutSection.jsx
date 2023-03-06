import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import img from "../../assets/all-images/USAImages/IMG_6360.JPG";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "90px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              {/* <h4 className="section__subtitle">О нас</h4> */}
              <h2 className="section__titlen">
                Добро пожаловать в Perspective
              </h2>
              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. . Minus
                labore culpa ipsa quisquam nobis assumenda explicabo recusandae
                provident, fuga iure!
              </p>
              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                sint harum debitis accusamus eligendi. Nulla molestiae
                asperiores at.
              </p>

              <div className="about__section-item d-flex align-items-center"></div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img id="fff" src={img} alt="" className="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
