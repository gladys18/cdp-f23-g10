import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Une aventure nautique parfaite ! Grâce à ce site, j'ai pu louer un bateau pour explorer la côte avec mes amis. La navigation était fluide, et le bateau était en parfait état. Nous avons été impressionnés par la réactivité du service client en cas de besoin. Une expérience à renouveler sans hésitation
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        La meilleure façon de découvrir la beauté des côtes françaises ! J'ai loué un bateau pour une journée en famille et nous avons été éblouis par la qualité du service et la facilité de réservation. Des bateaux bien entretenus et un personnel amical ont rendu notre journée sur l'eau mémorable. Merci pour cette expérience exceptionnelle !
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Une expérience inoubliable ! Louer un bateau via ce site était si facile et rapide. Le choix de bateaux était impressionnant, et le service client était excellent. Nous avons passé une journée fantastique sur l'eau. Je recommande vivement cette plateforme de location de bateaux à tous mes amis et ma famille
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Je suis un client régulier de ce site de location de bateaux et je ne suis jamais déçu ! Le processus de réservation est simple, les prix sont compétitifs et le choix de bateaux est vaste. Que ce soit pour une sortie en mer entre amis ou une journée de pêche en famille, je sais que je peux compter sur ce service fiable et de qualité.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
