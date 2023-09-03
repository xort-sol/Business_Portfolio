import React ,{useState, useEffect} from 'react';
import '../components/navbar.css';
import {Link} from 'react-scroll';
import Logo from '../assets/logo/logo.png';

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

{/* <FontAwesomeIcon menuBars="fa-solid fa-bars" /> */}

export default function Navbar() {

  const element = <FontAwesomeIcon icon={faBars} />
  const [sidenav , setSidenav]= useState(false);
  const [sticky , setSticky]= useState(false);
  
  const sidenavShow = ()=>{
    setSidenav(!sidenav)
  }


  return (
    <header id="site_header" className={`${sticky ?   'sticky':''}`}>
      <div className='container'>
        <nav className='navbar' id='Navbar'>
          <div className='navbar-brand'>
            <a href='/'>
              <img src={Logo} alt = "logo"/>
            </a>
          </div>
          <div className='toggler' onClick={sidenavShow}>
            {element}
          </div>
          <div className={`menuItem ${sidenav == true ? 'active': '' }`}>

            <ul className='menuItemList'>
              <li><Link activeClass="active" to="home" spy={true} smooth={true}>
                Home
              </Link></li>
              <li><Link  to="about" spy={true} smooth={true}>
                About Us
              </Link></li>
              <li><Link  to="services" spy={true} smooth={true}>
                Services
              </Link></li>
              <li><Link to="test1" spy={true} smooth={true}>
                Contact Us
              </Link></li>
            </ul>
          </div>

        </nav>
      </div>
    </header>

  )
}
