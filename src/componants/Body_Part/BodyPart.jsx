import React from 'react'
import Body_Part from './Body_Part.css'
import SecondBody from './Second_Body_Part/SecondBody'

export const BodyPart = () => {
  return (
    <>
      <div className="main_body" style={Body_Part}>
        <video src="assets/aa24-bg-no-logo.mp4" preload='auto' autoPlay loop playsInline muted>
        </video>
        <div className="side_part">
          <img src="https://a.storyblok.com/f/174976/542x96/f1832f7521/anime-awards-logo-2023.png" alt="anime_logo" />
          <h1 className='title'>And Your Winners Are...</h1>
          <p className='description'>After an unforgettable evening in Tokyo, Japan, the Winners of the 2024 Crunchyroll Anime Awards have been revealed! See some of the best moments from the celebration.</p>
          <button className="watchButton">
            <i class="ri-play-line"></i>
            Watch</button>
        </div>
        <SecondBody />
      </div>
    </>
  )
}
