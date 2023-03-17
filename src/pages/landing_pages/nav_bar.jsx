import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

import App from "./main-page";
import { useAuth0 } from "@auth0/auth0-react";
import {toast, ToastContainer} from 'react-toastify';
import Rive from "@rive-app/react-canvas";
import useRive from "@rive-app/react-canvas";
import { useState } from "react";
import useStateMachineInput from "@rive-app/react-canvas";
import  abd from'./travelgif2.riv'
import { animations } from "framer-motion";
function NavBar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [gif,setgif]=useState(1);

  return (
 
    
  
    
      <nav id='nav-id' class="nav_bar d-inline-flex  navbar navbar-expand-lg navbar-dark bg " style={{position:'fixed'}}  data-scroll-sticky='true' >
        <div class="nave d-flex" style={{width:'90vw',display:'flex',justifyContent:'space-between'}}>
          <div class="brandandbutton">
         
            <a class="navbar-brand" href="#">
              <h3>Travellia</h3>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse d-flex"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav">
                <Link class="nav-item nav-link active" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
                <Link class="nav-item nav-link" to="/">
                  About
                </Link>
                <Link class="nav-item nav-link" to="/history">
                  History
                </Link>
                
              </div>
            </div>
          </div>

          <div class="navbar-comp d-flex ">
            {isAuthenticated == 0 ? (
              <Link
                class="btn btn-light   active"
                role="button"
                aria-pressed="true"
                onClick={loginWithRedirect}
              >
                Log In
              </Link>
            ) : (
              <Link
                class="btn btn-dark  active"
                role="button"
                aria-pressed="true"
                onClick={logout}
              >
                Log Out
              </Link>
            )}
          </div>
        </div>
        <ToastContainer/>
      </nav>
             
   
  );
}

export default NavBar;
