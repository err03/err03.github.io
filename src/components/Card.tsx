import React from "react";
import coverImage from "../assets/cover-image.png";

export interface CardInfo {
    title: string;
    description: string;
    imageSrc: string;
}

const Card = ( card:CardInfo ) => {
  return (
    <div className="card ml-auto" style={{ width: "18rem" }}>
      <img src={coverImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">
          {card.description}
        </p>
        <a href="#" className="btn btn-primary">
          View
        </a>
      </div>
    </div>
  );
};

export default Card;
