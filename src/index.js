import React from 'react';
import ReactDOM from 'react-dom';
// C:\Travellio\travellio-app\src\pages\landing_pages\landingPageCSS.css
import './pages/landing_pages/landingPageCSS.css';
import './pages/planner_pages/planner_pages.css'
import App from './pages/landing_pages/main-page';
import 'bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
let map;



ReactDOM.render(
  <Auth0Provider
  domain="dev-petrhms2thok1i1v.us.auth0.com"
  clientId="JWxNeEBulHjuKXWGVbawnnWmA5uCV0um"
  redirectUri={window.location.origin}
>
  <App/>
  </Auth0Provider>,
  document.getElementById("main-page")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
