import React from "react";
import Bproperty from './Bproperty';
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';

function Properties(){
    return(
        <div className='product'>
            <div className='p-heading'>
                <h3>Properties</h3>
                <p>Lorem ipsum dolor sit amet con ebitis, ratione d impedit blanditiis.</p>
            </div>
            <div className='product-container'>
             <Bproperty image={pimage1} name='Al-Bhar' price='$50,0000'/>
             <Bproperty image={pimage2} name='Al-Qudra' price='$60,0000'/>
             <Bproperty image={pimage3} name='Al-Jazib' price='$40,0000'/>   
            </div>

        </div>
    )
}
export default Properties;