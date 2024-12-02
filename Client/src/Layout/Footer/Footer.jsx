import React from 'react'
import "./footer.scss"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
   <>
   <footer>
    <div className="container-fluid footer">
       <div className="row  d-flex wrapper ">
       <div className="col-4 col-sm-4 utils ">
        <li>Social</li>
        <li><a  href="#">Facebook</a></li>
        <li><a  href="https://www.instagram.com/officialhungryrats/" target='_black'>Instagram</a></li>
        <li><a  href="https://www.linkedin.com/in/kundan-patil-a22206293/" target='_black'>Linkdin</a></li>
       </div>
       <div className="col-4 col-sm-4 utils"> 
       <li>Quick links</li>
        <li><NavLink  to={"/"}>Home</NavLink></li>
        <li><NavLink  to={"/fooditem"}>Menu</NavLink></li>
        <li><NavLink  to={"/contact"}>Contact</NavLink></li>
       </div>
       <div className="col-4 col-sm-4 utils ">
       <li>Get help</li>
        <li><NavLink>partner with us</NavLink></li>
        <li><NavLink  to={"/login"}>login to deliver</NavLink></li>
       </div>
       </div>
    </div>
    
   </footer>
   <div className="col-12 container-fluid  bg-primary footer outside d-flex justify-content-center align-items-center text-white " style={{height:"5vh", fontSize:"14px"}} >
<span className='font'>@2024 hungryrats-all rights reserved</span>  
 </div>

  
   </>
  )
}

export default Footer
