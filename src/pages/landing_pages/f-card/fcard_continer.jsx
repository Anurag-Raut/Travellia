import React from "react";
import FeatureCard from "./feature_card";
import './f-card.css';

function FeatureSection(){
    return (
        <div class='f-sec'  data-depth='1' data-scroll-section data-scroll  >
              <div  class='d-flex f-div' data-scroll-target='#f-div-id' data-scroll-sticky='true'   >
                <div id='f-div-id' class='d-flex'>

                <span class="lerp-wrap" data-scroll="">
            <span class='f-text-feat' data-scroll="" data-scroll-delay="0.18" data-scroll-speed="-9">F</span>
            <span class='f-text-feat' data-scroll="" data-scroll-delay="0.14" data-scroll-speed="-9">E</span>
            <span class='f-text-feat' data-scroll="" data-scroll-delay="0.12" data-scroll-speed="-9">A</span>
            <span class='f-text-feat' data-scroll="" data-scroll-delay="0.10" data-scroll-speed="-9" >T</span>
            <span class='f-text-feat' data-scroll="" data-scroll-delay="0.10" data-scroll-speed="-9">U</span>
            <span class='f-text-feat' data-scroll="" data-scroll-delay="0.12" data-scroll-speed="-9">R</span>
            <span class='f-text-feat' data-scroll="" data-scroll-delay="0.14" data-scroll-speed="-9">E</span>
            <span class='f-text-feat' data-scroll="" data-scroll-delay="0.16" data-scroll-speed="-9">S</span>
          </span>

                </div>
            


        </div>
        
        <FeatureCard/>
        {/* <FeatureCard/>
        <FeatureCard/> */}
        </div>

        
    );

}

export default FeatureSection;