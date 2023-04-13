import { React } from "react";
import Sent from './components/Sentiments.js';
import Reviews from './components/Reviews.js';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './components/Home';
import  AverageRating from './components/Average.js';
import Counter from './components/Websitevisitors.js';
import './App.css';

function App() {
  return (
    <div className="App">
     
     <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="detail/:id" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
      </>
      <div className="wrapper"> 
      <div className="box1"> <Reviews/> </div>
      <div className="box2"><AverageRating/></div>
      <div className="box3"><Sent/></div>
      <div className="box4"><Counter/></div>
      </div>
  </div>
)
}
export default App;
