import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoA from '../../assets/images/logo-solid-A.svg'
import Aleksander from '../../assets/images/Aleksander-w.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (

        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoA} alt="logo" />
                <img className="sub-logo" src={Aleksander} alt="Alex" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink 
                onClick={() => setShowNav (false)}
                exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink 
                onClick={() => setShowNav (false)}
                exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                onClick={() => setShowNav (false)}
                exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink 
                onClick={() => setShowNav (false)}
                exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                onClick={() => setShowNav (false)}
                icon={faClose}
                color='#fff'
                className='close-icon'
                />
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://pl.linkedin.com/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/majalex'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://pl.linkedin.com/'>
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#fff"
                size='3x'
                className='hamburger-icon'
            />
        </div>


    )
}

export default Sidebar;