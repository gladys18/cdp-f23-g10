import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/boats-img/image6.jpeg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">À propos de nous</h4>
              <h2 className="section__title">Bienvenue chez SAILINGLOC</h2>
              <p className="section__description">
              Chez Sailingloc , nous sommes passionnés par la voile et déterminés à partager cette passion avec nos clients. Forts d’expérience dans l’industrie maritime, nous avons créé notre entreprise pour offrir des expériences de navigation inoubliables à tous ceux qui cherchent à explorer les merveilles de l’océan. En tant que propriétaire, je met un point d’honneur à garantir que chaque voyage en mer avec nous soit non seulement sûr et confortable, mais aussi empreint de moments magiques et de découvertes inattendues. Nous sommes impatients de vous accueillir à bord et de vous aider à créer des souvenirs précieux sur les flots.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
