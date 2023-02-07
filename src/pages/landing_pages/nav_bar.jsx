import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import App from "./main-page";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const { loginWithRedirect,logout,isAuthenticated} = useAuth0();
 
  return (
    <nav fixed="top" class="nav_bar d-inline-flex  navbar navbar-expand-lg navbar-light bg-light">
      <div class=" d-flex">
      <a class="navbar-brand" href="#">
        Navbar
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
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link active" to="/">
            Home <span class="sr-only">(current)</span>
          </Link>
          <Link class="nav-item nav-link" to="/">
            About
          </Link>
          <a class="nav-item nav-link" href="#">
            Pricing
          </a>
          <a class="nav-item nav-link disabled" href="#">
            Disabled
          </a>
        </div>


      </div>
      
      

      <div class="navbar-comp d-flex ">

        
      {
        isAuthenticated==0 ?(
          <Link
         
          class="btn btn-light   active"
          role="button"
          aria-pressed="true"
          onClick={loginWithRedirect}
        >
          Log In
        </Link>
        )
        :(<Link
          
          class="btn btn-dark  active"
          role="button"
          aria-pressed="true"
          onClick={logout}
        >
          Log Out
        </Link>)
      }
        

      </div>
      
     

       
      </div>
    </nav>
  );
}

export default NavBar;
