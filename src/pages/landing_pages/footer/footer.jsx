import React from "react";
import { motion } from "framer-motion";
import '../footer/footer.css';
function Footer() {
  return (
    <motion.div  data-scroll-section  transition={{duration:0.5}}   class="footer">
    <motion.div class="container-footer" >
     <div class="row">
       <div class="footer-col">
         <h2>Travellia</h2>
         <ul>
           <li><a href="#">about us</a></li>
           <li><a href="#">our services</a></li>
           <li><a href="#">privacy policy</a></li>
           <li><a href="#">affiliate program</a></li>
         </ul>
       </div>
       <div class="footer-col">
         <h4>get help</h4>
         <ul>
           <li><a href="#">FAQ</a></li>
           <li><a href="#">shipping</a></li>
           <li><a href="#">returns</a></li>
           <li><a href="#">order status</a></li>
           <li><a href="#">payment options</a></li>
         </ul>
       </div>
       <div class="footer-col">
         <h4>online shop</h4>
         <ul>
           <li><a href="#">watch</a></li>
           <li><a href="#">bag</a></li>
           <li><a href="#">shoes</a></li>
           <li><a href="#">dress</a></li>
         </ul>
       </div>
       <div class="footer-col">
         <h4 data-scroll data-scroll-repeat data-scroll-call='event2'>follow us</h4>
         <div class="social-links">
           <a href="#"><i class="fab fa-facebook-f"></i></a>
           <a href="#"><i class="fab fa-twitter"></i></a>
           <a href="#"><i class="fab fa-instagram"></i></a>
           <a href="#"><i class="fab fa-linkedin-in"></i></a>
         </div>
       </div>
     </div>
    </motion.div>
 </ motion.div>
  );
}

export default Footer;
