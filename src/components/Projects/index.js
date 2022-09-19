import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Product from './Product';
import { products } from '../../assets/data/data';


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1 className='page-title'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Portfolio".split("")}
                            idx={15}
                        />
                    </h1>
                </div>
                <div className='projects'>
                    {products.map((item) => (
                        <Product img={item.img} key={item.id} link={item.link} />
                    ))}
                </div>
            </div>
        </>
    )

}

export default Portfolio;