import React from 'react';
import ReactDOM from 'react-dom';
// C:\Travellio\travellio-app\src\pages\landing_pages\landingPageCSS.css
import './pages/landing_pages/landingPageCSS.css';
import './pages/landing_pages/locomotive.css';
import './pages/planner_pages/planner_pages.css'
import App from './pages/landing_pages/main-page';
import 'bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import Scrollbar from 'smooth-scrollbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);







let map;
window.addEventListener('resize', ()=>{
  var element=document.getElementById('nav-id')
  element.style.setProperty("background-color", "#24262b");
  var offsets = document.getElementById('hero').getBoundingClientRect();
var top = offsets.top;
var left = offsets.left;
// console.log(top,left);

}




  
);
window.addEventListener('popstate', (event) => {
  // console.log(document.location.href)

 
  if(window.location.href==='https://travellio.web.app/'  || window.location.href==='http://localhost:3000/' || window.location.href==='https://travellio.web.app'){
    document.location.reload();
  
  }
})


ReactDOM.render(

  <Auth0Provider
  domain="dev-petrhms2thok1i1v.us.auth0.com"
  clientId="JWxNeEBulHjuKXWGVbawnnWmA5uCV0um"
  redirectUri={window.location.origin}
>
  <App />
  
  </Auth0Provider>,
  document.getElementById("main-page")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
