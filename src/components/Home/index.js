import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import LogoA from '../../assets/images/logo-solid-A.svg'
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
        <>
            <div className="container home-page">
                <Logo />
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoA} alt="developer" />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                    </h1>
                    <h2>Junior Frontend Developer / ReactJS / JS</h2>
                    <Link to="/portfolio/contact/" className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
        </>
    )
}

export default Home