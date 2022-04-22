import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const aboutSignal = () => (
  <div className="about section__margin" id="about">
    <div className="about-feature">
      <Feature title="What is Signal?" text="Signal is a communication app that supports messaging, voice and video calls, and more. It's fully cross-platform, free, open source, and features end-to-end encryption.
      End-to-end encryption works by encoding a sender's message in such a way that only the intended receiver's device can unlock it.
      This makes it a popular choice for users looking for enhanced privacy and security." />
      
    </div>
    <div className="about-heading">
      <h1>Say Hello to Privacy</h1>
    </div>
    <div className="about-container">
      <Feature title="Laura Poitras - Journalist" text="''Signal is the most scalable encryption tool we have. It is free and peer reviewed. I encourage people to use it everyday.''" />
      <Feature title="Jack Dorsey - CEO of Twitter" text="''I trust Signal because it’s well built, but more importantly, because of how it’s built: open source, peer reviewed, and funded entirely by grants and donations. A refreshing model for how critical services should be built.''" />
      <Feature title="Bruce Schneier - Security Technologist" text="''I am regularly impressed with the thought and care put into both the security and the usability of this app. It's my first choice for an encrypted conversation.''" />
    </div>
  </div>
);

export default aboutSignal;
