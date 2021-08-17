import React from 'react';
import Button from '../components/Button';
import Nav from '../components/Nav'
import Projet from '../components/Projet';
import img from '../assets/projet-2.jpg';
import img1 from '../assets/projet-1.jpg';
import img2 from '../assets/projet-3.jpg';
import img3 from '../assets/projet-4.jpg';


export const Project1 = () => {
    return (
        <div className="projet1">
            <Nav />
            <Projet projectNumber={0} />
            <div className="img">
                <img src={img} alt="" />
                <div className="btn">
                    <button>voir le site</button>
                </div>
            </div>
            <Button left="/" right="/projet2" />
        </div>
    )
}

export const Project2 = () => {
    return (
        <div className="projet1">
            <Nav />
            <Projet projectNumber={1} />
            <div className="img">
                <img src={img1} alt="" />
                <div className="btn">
                    <button>voir le site</button>
                </div>
            </div>
            <Button left="/projet1" right="projet3" />
            </div>
    )
}

export const Project3 = () => {
    return (
        <div className="projet1">
            <Nav />
            <Projet projectNumber={2} />
            <div className="img">
                <img src={img2} alt="" />
                <div className="btn">
                    <button>voir le site</button>
                </div>
            </div>
            <Button left="projet2" right="projet4" />
           </div>
    )
}

export const Project4 = () => {
    return (
        <div className="projet1">
            <Nav />
            <Projet projectNumber={3} />
            <div className="img">
                <img src={img3} alt="" />
                <div className="btn">
                    <button>voir le site</button>
                </div>
            </div>
            <Button left="projet3" right="/contact" />
            </div>
    )
}

