import React from "react";
import { animate, motion } from "framer-motion";
import "./f-card.css";

function FeatureCard(props) {
  return (
    // <h1>hello</h1>
    <div class="f-c-container" data-scroll >
      <div
        class="fcard stick"
        
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          data-scroll-target="#YOURID1"
          data-scroll=""
          data-scroll-sticky="true"
          class="f-card-img1 d-flex"
          src="https://www.linkpicture.com/q/img5_4.png"
        ></img>

        <div id="YOURID1" style={{ width: "90vh" }} class="re">
          <div
            style={{ backgroundColor: "transparent", width: "90vh" }}
            data-scroll
            class="f-text-cont lerp-wra white-box"
            data-scroll-speed="-4"
          >
            <div
              style={{
                display: "block",
                backgroundColor: "transparent",
                marginBottom: "20vh",
              }}
              class="f-text-top"
              data-scroll=""
              data-scroll-direction="vertical"
              data-scroll-delay="0.18"
              data-scroll-speed="-5"
            >
            Explore the world around you
            </div>
            <div
              style={{ width: "100%", backgroundColor: "transparent" }}
              class="f-text-bottom"
              data-scroll=""
              data-scroll-direction="vertical"
              data-scroll-delay="0.18"
              data-scroll-speed="-3"
            >
              Explore hotels,lodging,tourist tourist attraction nearby a city
            </div>
          </div>
        </div>
      </div>

      <div
        class="fcard stick"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          data-scroll-target="#YOURID2"
          data-scroll=""
          data-scroll-sticky="true"
          class="f-card-img1 d-flex"
          src="https://i.ibb.co/gr0jGy3/img7.jpg"
        ></img>

        <div id="YOURID2" style={{ width: "90vh" }} class="re">
          <div
            style={{ backgroundColor: "transparent", width: "90vh" }}
            data-scroll
            class="f-text-cont lerp-wra white-box"
            data-scroll-speed="-4"
          >
            <div
              style={{
                display: "block",
                backgroundColor: "transparent",
                marginBottom: "20vh",
              }}
              class="f-text-top"
              data-scroll=""
              data-scroll-direction="vertical"
              data-scroll-delay="0.18"
              data-scroll-speed="-5"
            >
           Get details of a place
            </div>
            <div
              style={{ width: "100%", backgroundColor: "transparent" }}
              class="f-text-bottom"
              data-scroll=""
              data-scroll-direction="vertical"
              data-scroll-delay="0.18"
              data-scroll-speed="-3"
            >
             Get various details like ratings,reviews,opening hours before visiting 
            </div>
          </div>
        </div>
      </div>

      <div
        class="fcard stick"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          data-scroll-target="#YOURID3"
          data-scroll=""
          data-scroll-sticky="true"
          class="f-card-img1 d-flex"
          src="https://www.linkpicture.com/q/img8_4.jpg"
        ></img>

        <div id="YOURID3" style={{ width: "90vh" }} class="re">
          <div
            style={{ backgroundColor: "transparent", width: "90vh" }}
            data-scroll
            class="f-text-cont lerp-wra white-box"
            data-scroll-speed="-4"
          >
            <div
              style={{
                display: "block",
                backgroundColor: "transparent",
                marginBottom: "20vh",
              }}
              class="f-text-top"
              data-scroll=""
              data-scroll-direction="vertical"
              data-scroll-delay="0.18"
              data-scroll-speed="-5"
            >
              Get Directions on your mobile
            </div>
            <div
              style={{ width: "100%", backgroundColor: "transparent" }}
              class="f-text-bottom"
              data-scroll=""
              data-scroll-direction="vertical"
              data-scroll-delay="0.18"
              data-scroll-speed="-3"
            >
              Get directions on your smartphone and navigate with the help of
              Google Maps
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeatureCard;
