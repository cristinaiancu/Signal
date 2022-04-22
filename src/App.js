import React from "react";
import { ChatEngine } from 'react-chat-engine';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Developers, Features, About, Header } from './containers';
import Home from "./components/Home/Home";
import ChatFeed from './components/Chat/Feed';
import Login from './components/Login/Login';
import './App.css';

const projectID = '9dd9c5d1-40f3-46b8-862a-7f3cdea3c4a2';

const App = () => {
  if (!localStorage.getItem('username')) return(
    
    <div className="App">
      <div class="preloader">
        <div class="loader">
        </div>
      </div>

      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>

      <Header />
      <About />u
      <Developers />
      <Features />
      <Footer />
    </div>
  );

  return (
    <div className="App">
      <div class="preloader">
        <div class="loader">
        </div>
      </div>
      <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}/>
    </div>
  );
};

export default App;

window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 5000)
})