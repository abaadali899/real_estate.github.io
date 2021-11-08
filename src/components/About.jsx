import React from "react";
import aboutimage from '../images/about.png';
function About(){
    return(
        <div className='about'>
            <div className='about-model'>
            <img src={aboutimage} alt='about image'/>
            </div>
            <div className='about-text'>
                <h2>We are the best<br/> Real Estate Company</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae necessitatibus, sed odit a aspernatur quidem harum fugit aliquid, iure dolorem itaque inventore,
                 corporis laborum labore ipsum optio? Deserunt, deleniti voluptate.</p>
                <button>View more details</button>
            </div>
        </div>
    )
}
export default About;