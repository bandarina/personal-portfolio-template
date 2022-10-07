import './Nav.css';
import menu from './menu.png';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

export function Nav(){

    const [clicked, setClicked] = useState(false);

    function handleClick(){
        setClicked(!clicked);
    }

    return (
        <div className='NavContainer'>
            <nav className={clicked? 'Nav' : 'Nav hide'}>
                
                <div className={clicked ? 'Menu' : 'Menu hide'}>
                <Link activeClass='navActive' spy to="hero" ><div className='MenuItem'>
                        HOME
                    </div></Link>
                    <Link activeClass='navActive' spy to="about"><div className='MenuItem'>
                        ABOUT ME
                    </div></Link>
                    <Link activeClass='navActive' spy to="portfolio"><div className='MenuItem'>
                        PORTFOLIO
                    </div></Link>
                </div>
            </nav>
            <div className='MenuIcon' style={{filter: clicked? 'brightness(0) invert(1)' : 'none'}}>
                <img src={menu} onClick={handleClick} alt='menu'></img>
                </div>
        </div>
    )
}