import React from 'react';
import Logo from '../../assets/logo.png';

import './footer.css';

const Footer = () => (
  <div className="footer section__padding">

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={Logo}/>
        <p>© Signal<br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Download</h4>
        <p>Android</p>
        <p>Windows</p>
        <p>Mac</p>
        <p>Linux</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Social</h4>
        <p>GitHub</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>© 2022 Cristinaa. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
