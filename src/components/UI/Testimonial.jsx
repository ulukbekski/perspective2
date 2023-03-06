import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <div className="mt-3 d-flex align-items-end justify-content-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Paul Miller</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
        <p className="section__description">
          The amount of the deposit depends on the class and model of the car
          (the exact amount is indicated in the catalogue). The deposit is paid
          at the conclusion of the car rental agreement and is returned after it
          is handed over to the employees of the car dealership in full, except
          for insured events.
        </p>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Rent is paid by the day, starting from the receipt of the car by the
          tenant. If the car is returned earlier than the period set during the
          preliminary booking, a recalculation is made with the subsequent
          return of the corresponding part of the payment.
        </p>

        <div className="mt-3 d-flex align-items-end justify-content-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Isabel Lopez</h6>
            <p className="section__description ">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Rent is paid by the day, starting from the receipt of the car by the
          tenant. If the car is returned earlier than the period set during the
          preliminary booking, a recalculation is made with the subsequent
          return of the corresponding part of the payment.
        </p>

        <div className="mt-3 d-flex align-items-end justify-content-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Dave Green</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          You can rent a car on the spot, but due to the increased demand during
          the high season, we recommend booking the desired model in advance.
          This is especially true for economy class cars.
        </p>

        <div className="mt-3 d-flex align-items-end justify-content-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Alison Russell</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
