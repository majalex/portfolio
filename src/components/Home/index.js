import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-a.svg'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l', 'e', 'k', 's', 'a', 'n', 'd', 'e', 'r']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <span className={`${letterClass} _15`}>l</span>
                    <span className={`${letterClass} _16`}>e</span>
                    <span className={`${letterClass} _17`}>k</span>
                    <span className={`${letterClass} _18`}>s</span>
                    <span className={`${letterClass} _19`}>a</span>
                    <span className={`${letterClass} _20`}>n</span>
                    <span className={`${letterClass} _21`}>d</span>
                    <span className={`${letterClass} _22`}>e</span>
                    <span className={`${letterClass} _23`}>r</span>
                    <br/>
                    <span className={`${letterClass} _24`}>w</span>
                    <span className={`${letterClass} _25`}>e</span>
                    <span className={`${letterClass} _26`}>b</span>
                    <span className={`${letterClass} _27`}> </span>
                    <span className={`${letterClass} _28`}>d</span>
                    <span className={`${letterClass} _29`}>e</span>
                    <span className={`${letterClass} _30`}>v</span>
                    <span className={`${letterClass} _31`}>e</span>
                    <span className={`${letterClass} _32`}>l</span>
                    <span className={`${letterClass} _33`}>o</span>
                    <span className={`${letterClass} _34`}>p</span>
                    <span className={`${letterClass} _35`}>e</span>
                    <span className={`${letterClass} _36`}>r</span>
                    <span className={`${letterClass} _37`}>.</span>

                    {/* <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={28} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22} /> */}
                </h1>
                <h2>Junior Frontend Developer / Java Script / ReactJS</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home