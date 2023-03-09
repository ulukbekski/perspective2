import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import Edil from "../../assets/all-images/Edil.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import nursultan from "../../assets/all-images/IMG_0007.JPG";

const OUR__MEMBERS = [
  {
    name: "Имран Токтосунов",
    experience: "5 лет опыта",
    description: "Менеджер",
    instUrl: "#",
    imgUrl: ava02,
  },
  {
    name: "Эдил Аптандилов",
    experience: "2 года опыта",
    description:"Просто красавчик",
    instUrl: "#",
    imgUrl: Edil,
  },
  {
    name: "Марат Тунтеев",
    experience: "7 лет опыта",
    description:"Сооснователь и управляющий",
    instUrl: "#",
    imgUrl: ava02,
  },
  {
    name: "Нурсултан Кубанов",
    experience: "10 лет опыта",
    description:"Основатель компании",

    instUrl: "#",
    imgUrl: nursultan,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              {/* <div className="single__member-social">
                <p>{item.description}</p>
              </div> */}
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
            <p className="section__description text-center">{item.description}</p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
