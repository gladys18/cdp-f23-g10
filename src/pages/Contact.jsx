import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/profile.php",
    icon: "ri-facebook-line",
  },
  {
    url: "https://www.instagram.com/sailingloc68/",
    icon: "ri-instagram-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Restons en contact</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Nom" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Mail" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Envoyez un message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Nos Contacts</h6>
                <p className="section__description mb-0">
                  Dieppe, France
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

export default Contact;
