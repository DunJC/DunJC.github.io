import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SaveTheDate from "./pages/SaveTheDate";
import Main from "./pages/Main";
import Accommodation from "./pages/Accommodation";
import ShareYourIntent from "./pages/ShareYourIntent";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
      <Route path="/" element={<Main />} ></Route>
      <Route path="savethedate" element={<SaveTheDate />} ></Route>
      <Route path="main" element={<Home />} ></Route>
      <Route path="accommodation" element={<Accommodation />} ></Route>
      <Route path="shareyourintent" element={<ShareYourIntent />} ></Route>
      
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
