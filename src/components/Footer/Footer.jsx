import React from "react";
import logo from "../../assets/all-images/logo-2.jpg"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "A propos",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Liste des Bateaux",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                <img src={logo} style={{width:"40px", height:"40px"}} /> <span  className="color-white">SAILINGLOC</span> 
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Explorez notre voilier de 35 pieds, polyvalent et adaptable à toutes sortes de locations. Que vous partiez en couple, en famille ou entre amis, ce voilier offre confort et performance pour une expérience de navigation exceptionnelle, quel que soit votre projet en mer.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Lien</h5>
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
              <h5 className="footer__link-title mb-4">Siège social</h5>
              <p className="office__info">1 Quai du Tonkin,
76200 Dieppe</p>
              <p className="office__info">Phone: +33 6 58 97 66 11</p>

              {/* <p className="office__info">Email: muhib5532@gmail.com</p> */}

              <p className="office__info">Heure de bureau : 10h à 19h</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">bulletins d'information</h5>
              <p className="section__description">Abonnez-vous à notre newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, SAILINGLOC. Tous droits réservés.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
