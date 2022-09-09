import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-a.svg'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

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
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={28} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22} />
                </h1>
                <h2>Junior Frontend Developer / Java Script / ReactJS</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home