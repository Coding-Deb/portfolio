import React, { useEffect, useState } from "react";
import "../CSS/mainpage.css";
import Links from "../Apis/Links";
import Services from "../Apis/services";
import { Navbar } from "../Components/navbar";
const MainPage = () => {
  const [Link, setLink] = useState(Links);
  const [Service, setService] = useState(Services);
  useEffect(() => {
    return () => {
      setLink(Links);
      setService(Services);
    };
  }, []);
  return (
    <div className="main-container">
      <Navbar/>
      <div className="inner-container1">
        <div className="text-column">
          <p className="p1">
            Welcome To Define World Of <span className="title"> Coding </span>
          </p>
          <p className="p1">
            Hi, I am <span className="name1">Debanshu Brahma</span>
          </p>
          <p className="p2">Full Stack Developer</p>
          <p className="p3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            optio, aliquam quae nulla veniam repudiandae. Quas modi culpa magnam
            libero. Neque, eius perspiciatis vero ab similique recusandae
            quaerat voluptas, sed inventore est deserunt ad praesentium, odio
            quos veniam dolores.
          </p>
          <div className="btn">
            <div className="btn1">KNOW MORE</div>
            <div className="btn2">SEE MY PROJECTS</div>
          </div>
          <div className="links">
            {Link.map((item, index) => (
              <div className="innerlinks" key={index}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="image-column">
          <img
            src={require("../Images/3d-rendering-kid-playing-digital-game-removebg-preview.png")}
            alt="Placeholder 1"
            className="img1"
          />
          {/* <img src="https://via.placeholder.com/150" alt="Placeholder 2" />
        <img src="https://via.placeholder.com/150" alt="Placeholder 3" /> */}
        </div>
      </div>
      <div className="inner-container2">
        <h2 className="heading">My Main Services</h2>
        <div className="services">
          {Service.map((item, index) => (
            <div className="inner-service" key={index}>
              {/* <div className="service-img-contain"> */}
              <img src={item.img} alt="" className="serviceimg" />
              {/* </div> */}
              <p>{item.name}</p>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="inner-container3">
        <h2 className="heading">My All Known Programming Language</h2>
        
      </div>
    </div>
  );
};

export default MainPage;
