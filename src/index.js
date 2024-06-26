import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopHeader from './componants/Top_Header/TopHeader';
import { BodyPart } from './componants/Body_Part/BodyPart';
import { CardPart } from './componants/Cards/CardPart';
import { Newsletter } from './componants/Newsletter/Newsletter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <TopHeader/>
  <BodyPart/>
  <CardPart/>
  <Newsletter/>
  </>
);
