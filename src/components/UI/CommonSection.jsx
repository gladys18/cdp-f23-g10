import React from "react";
import { Container } from "reactstrap";
import "../../styles/common-section.css";
import persona from "../../assets/all-images/persona.png"
const CommonSection = ({ title }) => {
  return (
    <section className="common__section mb-5">
      <Container className="text-center">
      <div className=" d-flex align-items-center gap-2">
        <img src={persona} style={{width:"40px"}} />
        <h1 className="text-light">{title}</h1>
            </div>
        
      </Container>
    </section>
  );
};

export default CommonSection;
