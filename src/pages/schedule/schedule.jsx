import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "./schedule.css";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import mongoose from "mongoose";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import "react-toastify/dist/ReactToastify.css";
import Popup from "reactjs-popup";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Exp from "./exp";
import Navbar from "../planner_pages/navbar";
import { duration } from "@mui/material";
import { useEffect } from "react";
import ScheduleComp from "./schedule-comp";
// import ToastContainer from "react-bootstrap";
// import { Toast } from "react-toastify/dist/components";
// import { useAuth0 } from "@auth0/auth0-react";
// Replace the following with your Atlas connection string
const url =
  "mongodb+srv://admin:admin@cluster0.ainnpst.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(url);
const dbName = "DB";

function Schedule({
  List1hook,
  List2hook,
  List3hook,
  List4hook,
  updateList1Hook,
  route1,
  updateroute1,
  route2,
  updateroute2,
  route3,
  updateroute3,
  route4,
  updateroute4,
  lscroll,
  city,
  setcity,
  

}) {
  var cityName='hemlo';
  const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;


  useEffect(()=>{

    if(lscroll )lscroll.destroy();


   },[])
  // let o1,o2,o3,o4;
  // console.log(route1)
  let ab = window.localStorage.getItem("list1");
  List1hook = JSON.parse(ab);
  List2hook = JSON.parse(window.localStorage.getItem("list2"));
  List3hook = JSON.parse(window.localStorage.getItem("list3"));
  List4hook = JSON.parse(window.localStorage.getItem("list4"));
  route1 = JSON.parse(window.localStorage.getItem("route1"));
  route2 = JSON.parse(window.localStorage.getItem("route2"));
  route3 = JSON.parse(window.localStorage.getItem("route3"));
  route4 = JSON.parse(window.localStorage.getItem("route4"));


  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const [email, setEmail] = useState("");
  const onClickHandle = async (e) => {
    if (isAuthenticated) {
      e.preventDefault();
      const newdata = {
        // cityName:cityName,
        List1hook: List1hook,
        List2hook: List2hook,
        List3hook: List3hook,
        List4hook: List4hook,
        useremail: user.email,
        date: currentDate,
        route1:route1,
        route2:route2,
        route3:route3,
        route4:route4,
        cityy:city,
        


      };
      console.log(JSON.stringify(newdata));
      axios
        .post("/.netlify/functions/api", (newdata))
        .then((response) =>{ console.log(response.data);toast.success("Saved");});
      
    } else {
      toast.error(
        <div>
          <div>Not Logged In!</div>
          <Button
            class="btn btn-light   active"
            role="button"
            onClick={() =>
              loginWithRedirect({ redirectUri:window.location.origin})
            }
          >
            Log In
          </Button>
        </div>
      );

      <ToastContainer />;
    }
  };
  function convertlocation(o1) {

    let temp = "(";
    for (var i = 0; i < o1.length; i++) {
      if (
        o1[i] == '"' ||
        o1[i] == "{" ||
        o1[i] == "}" ||
        o1[i] == ":" ||
        (o1[i] >= "a" && o1[i] <= "z")
      ) {
        continue;
      } else {
        temp += o1[i];
      }
    }
    temp += ")";
    o1 = temp;
    return o1;
  }

  // console.log(email);
  const sendDetails = async (e) => {
    var list1 = `https://www.google.com/maps/dir/?api=1&destination=${convertlocation(
      JSON.stringify(List1hook[0].cords)
    )}&travelmode=driving&waypoints=`;
    for (var i = 0; i < List1hook.length; i++) {
      list1 = list1 + `${convertlocation(JSON.stringify(List1hook[i].cords))}|`;
    }
    list1 = list1.slice(0, -1);
    var list2 = `https://www.google.com/maps/dir/?api=1&destination=${convertlocation(
      JSON.stringify(List2hook[0].cords)
    )}&travelmode=driving&waypoints=`;
    for (var i = 0; i < List2hook.length; i++) {
      list2 = list2 + `${convertlocation(JSON.stringify(List2hook[i].cords))}|`;
    }
    list2 = list2.slice(0, -1);
    var list3 = `https://www.google.com/maps/dir/?api=1&destination=${convertlocation(
      JSON.stringify(List3hook[0].cords)
    )}&travelmode=driving&waypoints=`;
    for (var i = 0; i < List3hook.length; i++) {
      list3 = list3 + `${convertlocation(JSON.stringify(List3hook[i].cords))}|`;
    }
    list3 = list3.slice(0, -1);
    var list4 = `https://www.google.com/maps/dir/?api=1&destination=${convertlocation(
      JSON.stringify(List4hook[0].cords)
    )}&travelmode=driving&waypoints=`;
    for (var i = 0; i < List4hook.length; i++) {
      list4 = list4 + `${convertlocation(JSON.stringify(List4hook[i].cords))}|`;
    }
    list4 = list4.slice(0, -1);

    const tempparam = {
      email: email,
      list1: list1,
      list2: list2,
      list3: list3,
      list4: list4,
    };
    // console.log(route1);
    // console.log(List1hook);
    emailjs
      .send(
        "service_87k9q0j",
        "template_06evigk",
        tempparam,
        "SczhI2_9k77_joieT"
      )
      .then(
        function (response) {
          toast.success("Email Sent");

          // <ToastContainer />
        },
        function (error) {
          toast.error(error);

          <ToastContainer />;
        }
      );

    // if (isAuthenticated) {
    //   e.preventDefault();
    //   // var a=`https://www.google.com/maps/dir/?api=1&origin=${List1hook[0].title}&destination=${List1hook[0].title}&travelmode=driving&waypoints=`;
    //   // for(var i=1;i<List1hook.length;i++){
    //   //   a.push(`${List1hook[i].title}|`)
    //   // }
    //   // a=a.slice(0,-1);

    // } else {
    //   toast.error('Not Logged In');

    //   <ToastContainer />
    // }
  };
  // route1.push(-1)
  const { statee } = useLocation();
  //   const {wa}=statee;

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [hide, sethide] = useState(false);
  var dur = 0;
  // console.log(List2hook);

 
  return (
    <div>
      <ScheduleComp  List1hook={List1hook}
   
    List2hook={List2hook}
   
    List3hook={List3hook}
    
    List4hook={List4hook}
    route1={route1}
    route2={route2}
    route3={route3}
    route4={route4}
    hide={hide}
    sethide={sethide}

    />
       {
          !hide?
          <div class="save-div">
          <Button className="save-btn" variant="dark" onClick={onClickHandle}>
            Save
          </Button>
          <Popup
            modal
            trigger={
              <Button className="save-btn" variant="dark" >
                Send Directions To Phone
              </Button>
            }
            position=" center"
          >
            <div class="popup">
              <form>
                <div>
                  <div class="d-flex">
                    <h4>Enter email</h4>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="ex- abc@gmail.com"
                    />
                  </div>
                  <div class="send-button">
                    <Button
                      className="send-btn"
                      variant="dark"
                      onClick={sendDetails}
                    >
                      Send Directions
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </Popup>
        </div>
          :
          <div></div>
        }
       
  
        <ToastContainer />
    </div>
    
    
    
  
  );
}
export default Schedule;
