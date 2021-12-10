import "./header.css" 
import React from "react"
import background from "../../img/gohan.jpg"
export default function Header() {
    return (
       
        <div className="header" >  
         <img className="header__img" src={background} alt="background"/> 
            <div className="headerTitles">   
            <p className="header__name">
            Welcome to 
 
                <span className="headerTitleLg">Jeremy's journal</span>
                &mdash; personal Anime Blog&mdash;</p>
            </div> 
          
        </div>
    )
}
