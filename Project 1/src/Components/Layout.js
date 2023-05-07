import "../Assets/Css/Home.css"
import { Outlet } from "react-router-dom";
import Instragram from "../Assets/Images/instragram.svg"
import Facebook from "../Assets/Images/facebook.svg" 
import Linkedin from "../Assets/Images/linkedin.svg"
import Twitter from "../Assets/Images/twitter.svg"
const Layout = () => {
  return (
    <>
   <Outlet />
    <div className="footerMain">
        <div className="footerParent">
            <div className="footerPartOne">
                 <h1>Get in touch with us for your service</h1>
                 <div className="socialMedia">
                      <span><img src={Facebook}/></span>
                      <span className="marginLeftSocial"><img src={Twitter}/></span>
                      <span className="marginLeftSocial"><img src={Instragram}/></span>
                      <span className="marginLeftSocial"><img src={Linkedin}/></span>
                 </div>
           </div>
           <div className="footerPartTwo">
                <div className="footerHeadings">
                     <span className="darkHeading">HelpLine Number</span>
                     <span className="whiteHeading">1800 265 24 52</span>
                </div>
           <div className="footerHeadings">
               <span className="darkHeading">Address</span>
               <span className="whiteHeading">NH 234 Public Square San Francisco 65368</span>
           </div>
           <div className="footerHeadings">
              <span className="darkHeading">We are open</span>
              <span className="whiteHeading">Monday To Friday 9:00 AM to 11:00 AM</span>
           </div>
         </div>
      </div>
    </div>
    </>
  )
};

export default Layout;