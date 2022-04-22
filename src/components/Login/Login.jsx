import { useState } from 'react';
import axios from 'axios';
import "./Login.css";

const projectID = '9dd9c5d1-40f3-46b8-862a-7f3cdea3c4a2';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Incorrect credentials!');
    }
  };

  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="title">Connect on Secure Chat App</h1>
        <form onSubmit={handleSubmit}>
          <div className='cell'>
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Enter your username" required />
          </div>
          <div className='cell'>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Enter your password" required />
          </div>
          
          <div align="center">
            <button type="submit" className="button">
              <span>Connect</span>
            </button>
          </div>
        </form>
        
        <b className='error'><h2>{error}</h2></b>
      </div>
    </div>

  );
};

export default Modal;
