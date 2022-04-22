import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './home.css';
import { ArrowForward } from "@material-ui/icons";


function Home(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <>
      <div className="navbar">
        <div className="navbar-links_logo">
          <a href="#home"><img src={logo} /></a>
        </div>
        <div className="navbar-links">

          <div className="navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#developers">Developers</a></p>
          </div>
        </div>
        <div className="navbar-sign">
          <button type="button"><Link to="/login">Sign In</Link></button>

          <h4>{props.name ? 
                    <>
                    <div className="forward"><Link to="/chat"><ArrowForward style={{
                                    color: "#2d2d2e",
                                    fontSize: "25px",
                                    fontWeight: "700"
                                }}/></Link></div>
                    </> : " "}</h4>
        </div>
        <div className="navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#2d2d2e" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#2d2d2e" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#about">About</a></p>
                <p><a href="#features">Features</a></p>
                <p><a href="#developers">Developers</a></p>

              </div>
              <div className="navbar-menu_container-links-sign">
                <button type="button"><Link to="/login">Sign In</Link></button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='line'></div>
    </>
  );
};

export default Home;
