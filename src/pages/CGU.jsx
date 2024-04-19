
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/profile.php?id=61557114965962",
    icon: "ri-facebook-line",
  },
  {
    url: "https://www.instagram.com/sailingloc68/",
    icon: "ri-instagram-line",
  },
  {
    url: "https://pin.it/3jxLVacjG ",
    icon: "ri-pinterest-line",
  },
];

const CGU = () => {
  return (
    <Helmet title="Conditions générale d'utilisation">
      <CommonSection title="Conditions générale d'utilisation" />
      <section style={{alignItems:'center', justifyContent:'center'}}>
        <Container>
          <Row>
            
          
            <Col lg="12" md="12">
           
              <div className="contact__info">
              <h6 className="fw-bold">Propriété intellectuelle</h6>
              <p className="section__description mb-0">
              Le contenu du site Sailingloc, y compris les textes, images, vidéos et sons, est protégé par le droit d'auteur et le droit de la propriété intellectuelle. Toute reproduction, représentation, modification, adaptation, distribution ou diffusion, intégrale ou partielle, du contenu du site est interdite sans l'autorisation expresse et écrite de Sailingloc.

              </p>
              
                <h6 className="fw-bold">Liens hypertextes</h6>
                
                <p className="section__description mb-0">
                Le site Sailingloc peut contenir des liens hypertextes vers d'autres sites web. Sailingloc n'exerce aucun contrôle sur ces sites web et n'assume aucune responsabilité quant à leur contenu.

                </p>
                <h6 className="fw-bold">Limitation de responsabilité</h6>
                <p className="section__description mb-0">
                Sailingloc ne peut être tenu responsable des dommages directs ou indirects, consécutifs ou non, résultant de l'utilisation du site Sailingloc ou de l'impossibilité d'y accéder.

                </p>
                <h6 className="fw-bold">Droit applicable et juridiction compétente</h6>
                <p className="section__description mb-0">
                Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'interprétation ou à l'exécution des présentes mentions légales relève de la compétence exclusive des tribunaux de Dieppe.
                </p>
                <h6 className="fw-bold">Nos Contacts</h6>
                <p className="section__description mb-0">
                1 quai du Tokin, 76200 ,Dieppe, France
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Téléphone:</h6>
                  <p className="section__description mb-0">+33 6 58 97 66 11</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">sailingloc@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Abonnez vous</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a 
                    href={item.url} // Change 'Link' to 'a' for external links
                    key={index}
                    className="social__link-icon"
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Recommended for security reasons
                    >
                      <i class={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CGU;
