import React from 'react';
import Button from '../components/Button';
import Dynamique from '../components/Dynamique';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <div className = 'home'>
           <Nav/>
           <div className="cercle"></div>
           <div className="home-main">
               <div className="main-content">
                   <h1>LABIDO ON SPACE</h1>
                   <h2><Dynamique /></h2>
               </div>
           </div>
        <Button  right ='/projet1'/>
        </div>
    );
};

export default Home;