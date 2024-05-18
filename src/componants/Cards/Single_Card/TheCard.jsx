import Card_Part from "./Card_Part.css";
import React from "react";

export const TheCard = () => {
  return (
    <div style={Card_Part}>
      <div className="cardContainer">
        <div className="singleCard">
          <div className="nom">
            <p>Anime of the Year</p>
          </div>
          <div className="poster">
            <img
              src="https://a.storyblok.com/f/174976/2000x3000/e071641086/04_jjk_kv_2x3.png/m/500x0/filters:quality(95):format(webp)"
              alt="Jujutsu Kaisen"
            />
          </div>
          <div className="title">
            <p>Jujutsu Kaisen Season 2</p>
            <p className="viewButton">
              View <i class="ri-arrow-right-s-line"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
