import React from "react";
import { motion } from "framer-motion";

function Exp(props){
    function getDist(array) {
        // console.log(dist);
        var dist = 0;
        for (var i = 0; i < array.length; i++) {
          dist += array[i].distance.value;
        }
        dist = dist / 1000;
        return dist;
      }
      function getDur(array) {
        // console.log(dist);
        var dur = 0;
        for (var i = 0; i < array.length; i++) {
          dur += array[i].duration.value;
        }
        var H = dur / 60;
    
        var M = H % 60;
        H = H / 60;
        H = Math.floor(H);
        M = Math.floor(M);
        var s = `${H} Hr :${M} M`;
        return s;
      }
return(
    <motion.div class="exp-div">
                    <motion.div
                      transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                      initial={{
                        x: "100vh",
                      }}
                      exit={{}}
                      animate={{
                        x: "0",
                      }}
                      class="day-text"
                    >
                    {props.day}
                    </motion.div>
                    <motion.div className="dur-dist-div d-flex">
                      <motion.div
                        transition={{
                          delay: 0.2,
                          duration: 0.5,
                          type: "spring",
                        }}
                        initial={{
                          y: "100vh",
                        }}
                        exit={{}}
                        animate={{
                          y: "0",
                        }}
                        class="dur"
                      >
                        <motion.div class="dur-text">Total duration</motion.div>
                        <motion.div class="dur-text value">
                          {props?.array?.legs ?getDur(props?.array?.legs) : '0 Hrs 0 M'}
                        </motion.div>
                      </motion.div>
                      <motion.div
                        transition={{
                          delay: 0.2,
                          duration: 0.5,
                          type: "spring",
                        }}
                        initial={{
                          y: "100vh",
                        }}
                        exit={{}}
                        animate={{
                          y: "0",
                        }}
                        class="dist"
                      >
                        <motion.div class="dist-text">
                          Total distance
                        </motion.div>
                        <motion.div class="dist-text value">
                          {props?.array?.legs ?getDist(props?.array?.legs):'0'} Km
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
);
}
export default Exp;