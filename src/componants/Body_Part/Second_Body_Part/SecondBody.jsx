import React from "react";
import Second_Body from "./Second_Body.css";

const SecondBody = () => {
  return (
    <div className="container" style={Second_Body}>
      <div className="second_main">
        <div className="text">
          <h1 className="theText1">The Crunchyroll Anime Awards</h1>
          <i className="ri-shining-fill"></i>
          <h1 className="theText2">And Your Winners Are…</h1>
        </div>
      </div>
      {/* <div className="starlg">
            <img src="https://www.crunchyroll.com/animeawards/static/star-2x2-lg-82c1b94e4c09728396efa02975df0ff9.png" alt="largeStar"/>
        </div> */}
    </div>
  );
};

export default SecondBody;
