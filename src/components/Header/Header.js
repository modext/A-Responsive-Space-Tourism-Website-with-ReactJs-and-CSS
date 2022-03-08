import React, {useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../starter-code/assets/shared/logo.svg'
import hamburg from "../../starter-code/assets/shared/icon-hamburger.svg"
import close from "../../starter-code/assets/shared/icon-close.svg"

function Header() {
    
    const [navbar, setNavbar] = useState(false)
    const [unda, setUnda] = useState('');

    const handleClick = () => {
        setNavbar(!navbar);

    }

    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");


    return (
        <div className='header'>
            <div className="head1">
                <div className='logo'><img src={logo} alt="" /> </div>
                <hr className='headline' />
            
                <nav className='header-nav'>
                    <button className="hambo" onClick={handleClick}> {navbar ? (<img src={close} alt="" />) : ( <img src={hamburg} alt="" /> )}</button>
                    <ul className={`nav-list ${navbar ? "showMenu" : ""}`}>
                        <li className={splitLocation[1] === "" ? "active" : ""}><NavLink exact to="/" onClick={handleClick} ><h3><span className='hspan'>00</span>Home</h3></NavLink></li>
                        <li className={splitLocation[1] === "destination" ? "active" : ""}><NavLink to="/destination" onClick={handleClick}><h3><span className='hspan'>01</span>Destination</h3></NavLink></li>
                        <li className={splitLocation[1] === "crew" ? "active" : ""}><NavLink to="/crew" onClick={handleClick}><h3><span className='hspan'>02</span>Crew</h3></NavLink></li>
                        <li className={splitLocation[1] === "technology" ? "active" : ""}><NavLink to="/technology" onClick={handleClick}><h3><span className='hspan'>03</span>Technology</h3></NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
