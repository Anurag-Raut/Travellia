import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function Loco({ start, lscroll, setlscroll, ref }) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]");

    let locoScroll = new LocomotiveScroll(
      {
        el: scrollEl,
        smooth: true,
        multiplier: 0.7,
      },
      []
    );
   

    setlscroll(locoScroll);
    // ref=locoScroll;
   
      locoScroll.on("call", (obj, status) => {
        if (obj == "event1") {
          console.log(status);
          var element = document.getElementById("nav-id");
          if (status == "enter") {
            element.style.setProperty("background-color", "transparent");
            element.style.setProperty("transition", "1s");
          } else {
            element.style.setProperty("background-color", "#24262b");
            element.style.setProperty("transition", "1s");
          }
        }
        if (obj == "event2") {
          console.log(obj);
          var element = document.getElementById("nav-id");
          if (status == "enter") {
            // element.style.setProperty("background-color", "transparent");
            element.style.setProperty("height", "19vh");
            element.style.setProperty("transition", "2s");
          } else {
            element.style.setProperty("height", "14vh");
            element.style.setProperty("transition", "3s");
          }
        }
      });

      ScrollTrigger.defaults({ scroller: scrollEl });

      locoScroll.on("[data-scroll-container]", ScrollTrigger.update);
      // each time locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document?.querySelector("[data-scroll-container]")?.style
          .transform
          ? "transform"
          : "fixed",
      });

      const lsUpdate = () => {
        if (locoScroll) {
          locoScroll.update();
        }
      };
      // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      // ScrollTrigger.defaults({ scroller: locoScroll });
      window.addEventListener("resize", function () {
        // color = gsap.utils.random(["#48D1CC", "#C71585", "#9370DB"]);
        if (locoScroll) locoScroll.update();
        ScrollTrigger.refresh();
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll?.update());
      ScrollTrigger.refresh();
    
  }, [start]);
}
export default Loco;
