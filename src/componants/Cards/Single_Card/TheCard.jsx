import Card_Part from "./Card_Part.css";
import React from "react";

export const TheCard = ({ titleName, image, name }) => {
  return (
    <div style={Card_Part}>
      <div className="cardContainer">
        <div className="singleCard">
          <div className="nom">
            <p>{titleName}</p>
          </div>
          <div className="poster">
            <img src={image} alt={name} />
          </div>
          <div className="title">
            <p className="titleName">{name}</p>
            <p className="viewButton">
              View <i class="ri-arrow-right-s-line"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
