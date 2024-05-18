import React from "react";
import Second_Body from "./Second_Body.css";

const SecondBody = () => {
  return (
    <div className="container" style={Second_Body}>
      <div className="second_main">
        <div className="coverup">
          <div className="gradient_top"></div>
          <img
            src="https://www.crunchyroll.com/animeawards/static/vector-top-lg-89b9d27de020bf6dd07d9d8f1fc4c17d.png"
            alt="CoverUp"
          />
          <img id="dustIMG" src="/assets/dust.png" alt="The_Dust" />
          <img id="largeStar" src="/assets/large_star.png" alt="starLG" />
          <img id="smallStar" src="/assets/small_star.png" alt="starSM" />
          <video
            src="/assets/top-thread.mp4"
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>
        <div className="text">
          <h1 className="theText1">The Crunchyroll Anime Awards</h1>
          <i className="ri-shining-fill"></i>
          <h1 className="theText2">And Your Winners Are…</h1>
        </div>

        
      </div>
      
    </div>
  );
};

export default SecondBody;
