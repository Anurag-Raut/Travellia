import React from "react";
import './scrollsec.css'

function ScrollSec(){

return(

    <div class='scroll-contain' data-scroll-section>
      

        <div class='sec first-sec d-flex'>
            <h1 class='h1-scroll' data-scroll data-scroll-speed='-3' >PARIS</h1>
        <img data-scroll data-scroll-speed='3' class='scroll-img' align="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4k27Jdewo7SA4wsAdnGtOF2uUDO6-ubluiSl8_H_JRM_t_BW52rvl2XsarVaa0v1zsM&usqp=CAU" alt="" />

        </div>
        <div class='d-flex'>
        <div  class='sec second-sec d-flex'>
            <div style={{backgroundColor:'transparent'}} data-scroll class='lerp-wrap'data-scroll-speed="-4">
            <span class='f-text' data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="-4">N</span>
            <span class='f-text' data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.16" data-scroll-speed="-4">E</span>
            <span class='f-text' data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.15" data-scroll-speed="-4">W</span>
            <span class='f-text' data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.12"  data-scroll-speed="-4">Y</span>
            <span class='f-text' data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.10" data-scroll-speed="-4">O</span>
            <span class='f-text' data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.08"  data-scroll-speed="-4">R</span>
            <span class='f-text' data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.07" data-scroll-speed="-4">K</span>
            </div>
           
        <img data-scroll  data-scroll-speed='-1' class='scroll-img' align="right" src="https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

        </div>

        <div class='sec third-sec d-flex'>
        <img data-scroll data-scroll-speed='4' class='scroll-img' align="right" src="https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div style={{backgroundColor:'transparent'}} data-scroll class='lerp-wrap lerp-2'data-scroll-speed="-4">

        <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.18" data-scroll-speed="6">J</span>
            <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.14" data-scroll-speed="6">A</span>
            <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.12" data-scroll-speed="6">P</span>
            <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.1" data-scroll-speed="6">A</span>
            <span data-scroll="" data-scroll-direction="horizontal" data-scroll-delay="0.08" data-scroll-speed="6">N</span>

            </div>
       

        </div>


        </div>

        {/* <div  data-scroll='' data-scroll-call='.fi' data-scroll-repeat='true'  data-scroll-class='.fi'  class='.se' >

        </div> */}





        



    </div>



);

}
export default ScrollSec;