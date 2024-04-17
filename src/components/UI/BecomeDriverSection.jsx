import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/boats-img/8892821_20230606024603764_1_XLARGE.jpg";
import Modal from 'react-modal';
import { PDFViewer, Document, Page, Text, View, StyleSheet, BlobProvider } from '@react-pdf/renderer';
import persona from "../../assets/all-images/persona.png"



const BecomeDriverSection = () => {

  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <div className="d-flex align-items-center gap-2">
              <h2 className="section__title become__driver-title">
                Tu veux gagner avec nous ? Alors ne sois pas en retard
              </h2>
              
            </div>
            <a href="permit"><button className="btn become__driver-btn mt-4">
              Devenez un conducteur de bateau
            </button></a>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
