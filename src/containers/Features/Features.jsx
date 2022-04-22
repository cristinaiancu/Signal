import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: "Say Anything",
    text: "Share text, voice messages, photos, videos, GIFs and files for free. Signal uses your phone's data connection so you can avoid SMS and MMS fees.",
  },
  {
    title: "Speak Freely",
    text: "Make crystal-clear voice and video calls to people who live across town, or across the ocean, with no long-distance charges.",
  },
  {
    title: "Make Privacy Stick",
    text: "Add a new layer of expression to your conversations with encrypted stickers. You can also create and share your own sticker packs.",
  },
  {
    title: "Get Together with Groups",
    text: "Group chats make it easy to stay connected to your family, friends, and coworkers.",
  },
];

const Features = () => (
  <div className="features section__padding" id="features">
    <div className="features-heading">
      <h1>Share Without Insecurity</h1>
      <p>State-of-the-art end-to-end encryption (powered by the open source Signal Protocol) keeps your conversations secure. 
        We can't read your messages or listen to your calls, and no one else can either. Privacy isn’t an optional mode — 
        it’s just the way that Signal works. Every message, every call, every time.</p>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
