import React from 'react';
import './header.css';
import header from '../../assets/1.jpg';


const Header = () => {

    return (
        <>
        <div className='header section__padding' id='home'>
            <div className="header-content">
                <h1>
                    Speak Freely
                </h1>
                <p>Say "hello" to a different messaging experience. 
                    An unexpected focus on privacy, combined with 
                    all of the features you expect.
                </p>                
                <div className="header-content__input">
                    <button type="button">Trying to bring Normality to the Internet</button>
                </div>
            </div>
            <div className="header-image">
                    <img src={header}/>
            </div>
        </div>
        </>
    )
}

export default Header