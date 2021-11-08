import React from "react";
import Navbar  from "./Navbar";
function Header()
{
    return (
        <div className='header'>
           <Navbar/>
           <div className='intro'>
               <p>Looking for a property !</p>
               <h1><span>Buy </span>and <span>Sell </span>Properties</h1>
               <p className='details'>
                Property Dealer is also known as 'Realtor'.He gets commission from both sides from the owner and as well as from tenant, And he can get a commission of half to two percent of the property sold in the property sale. Many real estate agents earn 
                up to millions of rupees every month from this work</p>
               <a href='#' className='header-btn'>Details</a>
            </div>
        </div>
    
    )
}
export default Header;