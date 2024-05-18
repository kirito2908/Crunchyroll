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
          <TheCard titleName="Anime of the Year" image="/assets/Jujutsu Kaisen Season 2.webp" name="JUJUTSU KAISEN Season 2"/>
          <TheCard titleName="Best Original Anime" image="/assets/Buddy Daddies.webp" name="Buddy Daddies"/>
          <TheCard titleName="Best Character Design" image="/assets/Jujutsu Kaisen.webp" name="Sayaka Koiso, Tadashi Hiramatsu"/>
          <TheCard titleName="Best Animation" image="/assets/Demon Slayer.webp" name="Demon Slayer: Kimetsu No Yaiba Swordsmith Village Arc"/>
          <TheCard titleName="Best New Series" image="/assets/Chainsaw Man.webp" name="Chainsaw Man"/>
          <TheCard titleName="Best Cinematography" image="/assets/Jujutsu Kaisen Season 2.webp" name="JUJUTSU KAISEN Season 2"/>
          <TheCard titleName="Best Art Direction" image="/assets/Demon Slayer.webp" name="Demon Slayer: Kimetsu No Yaiba Swordsmith Village Arc"/>
          <TheCard titleName="Best Slice Of Life" image="/assets/Bochhi The Rock.webp" name="BOCHHI THE ROCK!"/>
          <TheCard titleName="Best Continuing Series" image="/assets/One Piece.webp" name="ONE PIECE"/>
          <TheCard titleName="Best Opening Sequence" image="/assets/Jujutsu Kaisen.webp" name="Where Our Blue Is"/>
          <TheCard titleName="Best Ending Sequence" image="/assets/Jujutsu Kaisen.webp" name="Akari"/>
          <TheCard titleName="Best Score" image="/assets/Attack On Titan.webp" name="Attack On Titan Final Season THE FINAL CHAPTERS Special 1"/>
          <TheCard titleName="Best Film" image="/assets/Suzume.webp" name="Suzume"/>
          <TheCard titleName="Best Anime Song" image="/assets/Idol.webp" name="Idol"/>
          <TheCard titleName="Best Director" image="/assets/Jujutsu Kaisen.webp" name="Shota Goshozono"/>
          <TheCard titleName="Best Main Character" image="/assets/One Piece.webp" name="Monkey D. Luffy"/>
          <TheCard titleName="Best Supporting Character" image="/assets/Jujutsu Kaisen.webp" name="Satoru Gojo"/>
          <TheCard titleName="'Must Protect At All Cost' Character" image="/assets/Spy X Family.webp" name="Anya Forger"/>
          <TheCard titleName="Best Action" image="/assets/Jujutsu Kaisen Season 2.webp" name="JUJUTSU KAISEN Season 2"/>
          <TheCard titleName="Best Comedy" image="/assets/Spy X Family.webp" name="SPY x FAMILY Season 1 Cour 2"/>
          <TheCard titleName="Best Drama" image="/assets/Attack On Titan.webp" name="Attack On Titan Final Season THE FINAL CHAPTERS Special 1"/>
          <TheCard titleName="Best Fantasy" image="/assets/Demon Slayer.webp" name="Demon Slayer: Kimetsu No Yaiba Swordsmith Village Arc"/>
          <TheCard titleName="Best Romance" image="/assets/Horimiya.webp" name="Horimiya: The Missing Pieces"/>
          <TheCard titleName="Best VA Performance (Japanese)" image="/assets/Jujutsu Kaisen.webp" name="Yuichi Nakamura"/>
          <TheCard titleName="Best VA Performance (English)" image="/assets/Chainsaw Man.webp" name="Ryan Colt Levy"/>
          <TheCard titleName="Best VA Performance (French)" image="/assets/Jujutsu Kaisen.webp" name="Martial Le Minoux"/>
          <TheCard titleName="Best VA Performance (Castilian)" image="/assets/Chainsaw Man.webp" name="Joel Gómez Jimenez"/>
          <TheCard titleName="Best VA Performance (Spanish)" image="/assets/Chainsaw Man.webp" name="Emilio Treviño"/>
          <TheCard titleName="Best VA Performance (Italian)" image="/assets/Chainsaw Man.webp" name="Mosè Singh"/>
          <TheCard titleName="Best VA Performance (Portuguese)" image="/assets/Jujutsu Kaisen.webp" name="Léo Rabelo"/>
          <TheCard titleName="Best VA Performance (German)" image="/assets/Chainsaw Man.webp" name="Franziska Trunte"/>
          <TheCard titleName="Best VA Performance (Araic)" image="/assets/Dr_Stone.webp" name="Taleb Alrefai"/>
        </div>
      </div>
    </div>
  );
};
