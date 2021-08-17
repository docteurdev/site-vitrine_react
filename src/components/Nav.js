import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import {projet1} from './'
const Nav = () => {

    const navHover = () =>{
        let links = document.querySelectorAll('.social-link li')
        links.forEach(link => {
           link.addEventListener('mouseover', (e) =>{
               let attX = e.offsetX ;
               let attY = e.offsetY ;
               link.style.transform = `translate(${attX}px, ${attY}px)`;
           })

           link.addEventListener('mouseleave', () =>{
            link.style.transform = ' ';
        })
        // console.log(link);
        });
    }

    return (
        <div className='nav'>
            <ul className='links'>
                <NavLink to='/' activeClassName='nav-active'>
                    <li >
                        acceuil
                    </li>
                </NavLink>

                <NavLink to='' activeClassName='nav-active'>
                    <li className='portfolio'>
                        portfolio

                        <ul className='nav-portfolio'>
                            <NavLink to='/projet1' activeClassName='nav-active'>
                                <li>
                                    projet 1
                                </li>
                            </NavLink>
                            <NavLink to='/projet2' activeClassName='nav-active'>
                                <li>
                                    projet 2
                                </li>
                            </NavLink>
                            <NavLink to='/projet3' activeClassName='nav-active'>
                                <li>
                                    projet 3
                                </li>
                            </NavLink>
                            <NavLink to='/projet4' activeClassName='nav-active'>
                                <li>
                                    projet 4
                                </li>
                            </NavLink>
                        </ul>
                    </li>
                </NavLink>

                <li activeClassName='nav-active'>
                    <NavLink to='/contact'>
                        contact
                    </NavLink>
                </li>
            </ul>
            <ul className="social-link">
                <li><FaFacebook  onMouseOver = {navHover}/></li>
                <li><FaTwitter  onMouseOver = {navHover}/></li>
                <li><FaInstagram  onMouseOver = {navHover}/></li>
            </ul>
        </div>
    );
};

export default Nav;