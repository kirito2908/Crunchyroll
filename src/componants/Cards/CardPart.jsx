import React from "react";
import { TheCard } from "./Single_Card/TheCard.jsx";
import Card_Div_Part from "./Card_Div_Part.css";

export const CardPart = () => {
  return (
    <div className="AllCards" style={Card_Div_Part}>
      <div className="mainDiv">
        <div className="theText">
          <div className="textContainer">
            <div className="winners">
              <h1>2024 Grand Winners</h1>
            </div>
          </div>
        </div>
        <div className="theContainer">
          <TheCard />
          <TheCard />
          <TheCard />
          <TheCard />
          <TheCard />
          <TheCard />
        </div>
      </div>
    </div>
  );
};
