import React from "react";
import { Link } from "react-router-dom";
import "./planner_pages.css";
import { motion } from "framer-motion";
function Navbar({hide}) {
  return (
  

    <motion.div class="nav-div">
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
                <Link class="navbar-brand " onClick={()=>{window.location.href = '/';}}>
                  <h1>Travellia</h1>
                </Link>
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
            <nav class="nav_bar1 d-inline-flex  navbar  ">
              <motion.div class=" nav ">
                <Link class="navbar-brand n1" to="/">
                  <h1>Travellia</h1>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.div >
    

  );
}

export default Navbar;
