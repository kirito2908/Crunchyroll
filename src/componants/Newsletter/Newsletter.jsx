import React from 'react';
import News_letter from './News_letter.css';

export const Newsletter = () => {
  return (
    <div className='newsLetter' style={News_letter}>
        <div className="headLine">
            <h1>Get the Crunchyroll Newsletter</h1>
        </div>
        <div className="subscription">
            <div className="enterEmail">
              <input type="email" className="email" placeholder='Email'/>
            </div>
            <div className="policy">
              <input type="checkbox" className='checkItem' />
              <span className="spanText">
                ""
              </span>
            </div>
        </div>
    </div>
  )
}
