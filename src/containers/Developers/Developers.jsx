import React from 'react';
import dev from '../../assets/2.jpg';
import './developers.css';

const Possibility = () => (
  <div className="developers section__padding" id="developers">
    <div className="developers-image">
      <img src={dev} />
    </div>
    <div className="developers-content">
      <h1>Double Ratchet</h1>
      <p>This document describes the Double Ratchet algorithm, which is used 
        by two parties to exchange encrypted messages based on a shared secret key.
         The parties derive new keys for every Double Ratchet message so that earlier
          keys cannot be calculated from later ones. The parties also send Diffie-Hellman
           public values attached to their messages. The results of Diffie-Hellman 
           calculations are mixed into the derived keys so that later keys cannot be
            calculated from earlier ones. These properties give some protection to earlier
             or later encrypted messages in case of a compromise of a party's keys.</p>
    </div>
  </div>
);

export default Possibility;
