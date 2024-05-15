import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopHeader from './componants/Top_Header/TopHeader';
import { BodyPart } from './componants/Body_Part/BodyPart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <TopHeader/>
  <BodyPart/>
  </>
);
