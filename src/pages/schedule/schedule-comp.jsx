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

function ScheduleComp({ List1hook,
    List2hook,
    List3hook,
    List4hook,
    route1,
    route2,
    route3,
    route4,
    hide,
    sethide,
    detailview,
    setdview,
    city

}){
    console.log('lavddlly')
    // console.log(List1hook);
    console.log(route1);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    // const [hide, sethide] = useState(false);
    var dur=0;


    return(
        <div >
        <div class="p-sc-nav">
          {!hide ? (
            <motion.div
              transition={{ duration: 0.5 }}
              class="sc-nav"
              initial={{
                width: "0",
              }}
              exit={{
                width: "0",
              }}
              animate={{
                width: "auto",
              }}
            >
              <nav class="nav_bar d-inline-flex  navbar navbar-expand-lg navbar-dark bg-dark">
                <motion.div class=" nav ">
                   { !detailview?
                <a class="navbar-brand n1" href="/">
                    <h1>Travellia</h1>
                  </a>
                  :
                  <div class="navbar-brand n1"  onClick={() => {
                    setdview(0);
                  }}>
                    <h1>Travellia</h1>
                  </div>
                 
                  }
                </motion.div>
              </nav>
            </motion.div>
          ) : (
            <motion.div
              transition={{ duration: 0.5 }}
              class="sc-nav"
              initial={{
                width: "auto",
              }}
              exit={{
                width: "0",
              }}
              animate={{
                width: "0",
              }}
            >
              <nav class="nav_bar d-inline-flex  navbar  ">
              <motion.div class=" nav ">
                   { !detailview?
                <a class="navbar-brand n1" href="/">
                    <h1>Travellia</h1>
                  </a>
                  :
                  <div class="navbar-brand n1"  onClick={() => {
                    setdview(0);
                  }}>
                    <h1>Travellia</h1>
                  </div>
                 
                  }
                </motion.div>
              </nav>
            </motion.div>
          )}
        </div>
  
        {hide ? (
          <div class="titles-div">
            {open1 && List1hook.length ? (
              <motion.div>
                <motion.h3
                  initial={{
                    x: "-100vh",
                  }}
                  exit={{}}
                  animate={{
                    x: "0",
                  }}
                  transition={{ duration: 0.51 + dur, type: "spring" }}
                  class="title-text"
                >
                  {List1hook[0].title}
                </motion.h3>
                <motion.div class="line-div">
                  <motion.div
                    initial={{
                      x: "-100vh",
                    }}
                    exit={{
                      x: "-100vh",
                    }}
                    animate={{
                      x: "0",
                    }}
                    class="vertical_dotted_line"
                  ></motion.div>
                  <motion.div
                    transition={{ duration: 0.9 + dur, type: "spring" }}
                    initial={{
                      x: "100vh",
                    }}
                    exit={{
                      x: "-100vh",
                    }}
                    animate={{
                      x: "0",
                    }}
                    class="duration"
                  >
                    {route1.legs[0].duration.text}
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : open2 && List2hook.length ? (
              <motion.div>
                <motion.h3
                  initial={{
                    x: "-100vh",
                  }}
                  exit={{}}
                  animate={{
                    x: "0",
                  }}
                  transition={{ duration: 0.51 + dur, type: "spring" }}
                  class="title-text"
                >
                  {List2hook[0].title}
                </motion.h3>
                <motion.div class="line-div">
                  <motion.div
                    initial={{
                      x: "-100vh",
                    }}
                    exit={{
                      x: "-100vh",
                    }}
                    animate={{
                      x: "0",
                    }}
                    class="vertical_dotted_line"
                  ></motion.div>
                  <motion.div
                    transition={{ duration: 0.9 + dur, type: "spring" }}
                    initial={{
                      x: "100vh",
                    }}
                    exit={{
                      x: "-100vh",
                    }}
                    animate={{
                      x: "0",
                    }}
                    class="duration"
                  >
                    {route2.legs[0].duration.text}
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : open3 && List3hook.length ? (
              <motion.div>
                <motion.h3
                  initial={{
                    x: "-100vh",
                  }}
                  exit={{}}
                  animate={{
                    x: "0",
                  }}
                  transition={{ duration: 0.51 + dur, type: "spring" }}
                  class="title-text"
                >
                  {List3hook[0].title}
                </motion.h3>
                <motion.div class="line-div">
                  <motion.div
                    initial={{
                      x: "-100vh",
                    }}
                    exit={{
                      x: "-100vh",
                    }}
                    animate={{
                      x: "0",
                    }}
                    class="vertical_dotted_line"
                  ></motion.div>
                  <motion.div
                    transition={{ duration: 0.9 + dur, type: "spring" }}
                    initial={{
                      x: "100vh",
                    }}
                    exit={{
                      x: "-100vh",
                    }}
                    animate={{
                      x: "0",
                    }}
                    class="duration"
                  >
                    {route3.legs[0].duration.text}
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : open4 && List4hook.length ? (
              <motion.div>
                <motion.h3
                  initial={{
                    x: "-100vh",
                  }}
                  exit={{}}
                  animate={{
                    x: "0",
                  }}
                  transition={{ duration: 0.51 + dur, type: "spring" }}
                  class="title-text"
                >
                  {List4hook[0].title}
                </motion.h3>
                <motion.div class="line-div">
                  <motion.div
                    initial={{
                      x: "-100vh",
                    }}
                    exit={{
                      x: "-100vh",
                    }}
                    animate={{
                      x: "0",
                    }}
                    class="vertical_dotted_line"
                  ></motion.div>
                  <motion.div
                    transition={{ duration: 0.9 + dur, type: "spring" }}
                    initial={{
                      x: "100vh",
                    }}
                    exit={{
                      x: "-100vh",
                    }}
                    animate={{
                      x: "0",
                    }}
                    class="duration"
                  >
                    {route4.legs[0].duration.text}
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : (
              <div></div>
            )}
  
            {open1 && route1?.waypoint_order ? (
              route1.waypoint_order.map((index) => {
                dur += 0.2;
                return (
                  <motion.div>
                    <motion.h3
                      initial={{
                        x: "-100vh",
                      }}
                      exit={{
                        x: "-100vh",
                      }}
                      animate={{
                        x: "0",
                      }}
                      transition={{ duration: 0.51 + dur, type: "spring" }}
                      class="title-text"
                    >
                      {List1hook[route1.waypoint_order[index] + 1].title}
                    </motion.h3>
                    <motion.div class="line-div">
                      <motion.div
                        initial={{
                          x: "-100vh",
                        }}
                        exit={{
                          x: "-100vh",
                        }}
                        animate={{
                          x: "0",
                        }}
                        class="vertical_dotted_line"
                      ></motion.div>
                      <motion.div
                        transition={{ duration: 0.9 + dur, type: "spring" }}
                        initial={{
                          x: "100vh",
                        }}
                        exit={{
                          x: "-100vh",
                        }}
                        animate={{
                          x: "0",
                        }}
                        class="duration"
                      >
                        {route1.legs[index + 1].duration.text}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })
            ) : open2 && route2?.waypoint_order ? (
              route2.waypoint_order.map((index) => {
                dur += 0.2;
                return (
                  <motion.div>
                    <motion.h3
                      initial={{
                        x: "-100vh",
                      }}
                      exit={{
                        x: "-100vh",
                      }}
                      animate={{
                        x: "0",
                      }}
                      transition={{ duration: 0.51 + dur, type: "spring" }}
                      class="title-text"
                    >
                      {List2hook[route2.waypoint_order[index] + 1].title}
                    </motion.h3>
                    <motion.div class="line-div">
                      <motion.div
                        initial={{
                          x: "-100vh",
                        }}
                        exit={{
                          x: "-100vh",
                        }}
                        animate={{
                          x: "0",
                        }}
                        class="vertical_dotted_line"
                      ></motion.div>
                      <motion.div
                        transition={{ duration: 0.9 + dur, type: "spring" }}
                        initial={{
                          x: "100vh",
                        }}
                        exit={{
                          x: "-100vh",
                        }}
                        animate={{
                          x: "0",
                        }}
                        class="duration"
                      >
                        {route2.legs[index + 1].duration.text}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })
            ) : open3 && route3?.waypoint_order ? (
              route3.waypoint_order.map((index) => {
                dur += 0.2;
                return (
                  <motion.div>
                    <motion.h3
                      initial={{
                        x: "-100vh",
                      }}
                      exit={{
                        x: "-100vh",
                      }}
                      animate={{
                        x: "0",
                      }}
                      transition={{ duration: 0.51 + dur, type: "spring" }}
                      class="title-text"
                    >
                      {List3hook[route3.waypoint_order[index] + 1].title}
                    </motion.h3>
                    <motion.div class="line-div">
                      <motion.div
                        initial={{
                          x: "-100vh",
                        }}
                        exit={{
                          x: "-100vh",
                        }}
                        animate={{
                          x: "0",
                        }}
                        class="vertical_dotted_line"
                      ></motion.div>
                      <motion.div
                        transition={{ duration: 0.9 + dur, type: "spring" }}
                        initial={{
                          x: "100vh",
                        }}
                        exit={{
                          x: "-100vh",
                        }}
                        animate={{
                          x: "0",
                        }}
                        class="duration"
                      >
                        {route3.legs[index + 1].duration.text}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })
            ) : open4 && route4?.waypoint_order && List4hook.length ? (
              route4.waypoint_order.map((index) => {
                dur += 0.2;
                return (
                  <motion.div>
                    <motion.h3
                      initial={{
                        x: "-100vh",
                      }}
                      exit={{
                        x: "-100vh",
                      }}
                      animate={{
                        x: "0",
                      }}
                      transition={{ duration: 0.51 + dur, type: "spring" }}
                      class="title-text"
                    >
                      {route4.waypoint_order[index] + 1 < List4hook.length
                        ? List4hook[route4.waypoint_order[index] + 1].title
                        : ""}
                    </motion.h3>
                    <motion.div class="line-div">
                      <motion.div
                        initial={{
                          x: "-100vh",
                        }}
                        exit={{
                          x: "-100vh",
                        }}
                        animate={{
                          x: "0",
                        }}
                        class="vertical_dotted_line"
                      ></motion.div>
                      <motion.div
                        transition={{ duration: 0.9 + dur, type: "spring" }}
                        initial={{
                          x: "100vh",
                        }}
                        exit={{
                          x: "-100vh",
                        }}
                        animate={{
                          x: "0",
                        }}
                        class="duration"
                      >
                        {route4.legs[index + 1].duration.text}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })
            ) : (
              <div></div>
            )}
            {open1 && List1hook.length ? (
              <motion.h3
                initial={{
                  x: "-100vh",
                }}
                exit={{}}
                animate={{
                  x: "0",
                }}
                transition={{ duration: 0.51 + dur, type: "spring" }}
                class="title-text"
              >
                {List1hook[0].title}
              </motion.h3>
            ) : open2 && List2hook.length ? (
              <motion.h3
                initial={{
                  x: "-100vh",
                }}
                exit={{}}
                animate={{
                  x: "0",
                }}
                transition={{ duration: 0.51 + dur, type: "spring" }}
                class="title-text"
              >
                {List2hook[0].title}
              </motion.h3>
            ) : open3 && List3hook.length ? (
              <motion.h3
                initial={{
                  x: "-100vh",
                }}
                exit={{}}
                animate={{
                  x: "0",
                }}
                transition={{ duration: 0.51 + dur, type: "spring" }}
                class="title-text"
              >
                {List3hook[0].title}
              </motion.h3>
            ) : open4 && List4hook.length ? (
              <motion.h3
                initial={{
                  x: "-100vh",
                }}
                exit={{}}
                animate={{
                  x: "0",
                }}
                transition={{ duration: 0.51 + dur, type: "spring" }}
                class="title-text"
              >
                {List4hook[0].title}
              </motion.h3>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div></div>
        )}
  
        {/* <Button className="send-btn" variant="dark" onClick={sendDetails}>
              Send Directions
               </Button> */}
  
        <motion.div layout>
          <motion.div layout class="day-row">
            <motion.div layout class="day-col">
              {hide ? (
                open1 ? (
                  <motion.div
                    layout
                    onClick={() => {
                      setOpen1(false);
                      console.log(open1);
                      sethide(false);
                    }}
                    class="1 expanded-card"
                  >
                    <Exp array={route1} day="Day 1" />
                  </motion.div>
                ) : (
                  <div></div>
                )
              ) : (
                <motion.div
                  layout="true"
                  class="1 day-card"
                  onClick={() => {
                    setOpen1(true);
                    sethide(true);
                  }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 1.3 }}
                >
                  <h1 class="1 dtext">Day1</h1>
                </motion.div>
              )}
              {hide ? (
                open2 ? (
                  <motion.div
                    layout
                    onClick={() => {
                      setOpen2(false);
                      sethide(false);
                    }}
                    class="2 expanded-card"
                  >
                    <Exp array={route2} day="Day 2" />
                  </motion.div>
                ) : (
                  <div></div>
                )
              ) : (
                <motion.div
                  layout="true"
                  class="2 day-card"
                  onClick={() => {
                    setOpen2(true);
                    sethide(true);
                  }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 1.3 }}
                >
                  <h1 class="2 dtext">Day2</h1>
                </motion.div>
              )}
            </motion.div>
            <motion.div class="day-col">
              {hide ? (
                open3 ? (
                  <motion.div
                    layout
                    transition={{ type: "spring" }}
                    onClick={() => {
                      setOpen3(false);
                      sethide(false);
                    }}
                    class="3 expanded-card"
                  >
                    {" "}
                    <Exp array={route3} day="Day 3" />
                  </motion.div>
                ) : (
                  <div></div>
                )
              ) : (
                <motion.div
                  layout="true"
                  class="3 day-card"
                  onClick={() => {
                    setOpen3(true);
                    sethide(true);
                  }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 1.3 }}
                >
                  <h1 class="3 dtext">Day3</h1>
                </motion.div>
              )}
  
              {hide ? (
                open4 ? (
                  <motion.div
                    layout
                    transition={{ default: { ease: "linear" } }}
                    onClick={() => {
                      setOpen4(false);
                      console.log(open4);
                      sethide(false);
                    }}
                    class="expanded-card"
                  >
                    {" "}
                    <Exp array={route4} day="Day 4" />
                  </motion.div>
                ) : (
                  <div></div>
                )
              ) : (
                <motion.div
                  layout="true"
                  class="4 day-card"
                  onClick={() => {
                    setOpen4(true);
                    sethide(true);
                  }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 1.3 }}
                >
                  <h1 class="dtext">Day4</h1>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
       
      </div>
    );


}
export default ScheduleComp