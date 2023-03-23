import React from "react";
import Card, { CardInfo } from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./css/HomePage.css";

const HomePage = () => {
  const projectCards: CardInfo[] = [
    {
      title: "SWIPS",
      description: "Thie is description",
      imageSrc: "imageSrc",
    },
    {
      title: "Pihu",
      description: "Thie is description",
      imageSrc: "imageSrc",
    },
  ];

  return (
    <div>
      <Header />

      <div className="home-content-container">
        <h3>Project</h3>
        <div className="hstack gap-5">
          {projectCards.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
