import "./index.scss"
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faGithub, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>Proin sed lobortis nulla, sed tincidunt nisl. Aenean ac nibh non justo tristique sodales. Donec hendrerit pharetra ante eget malesuada. Proin volutpat faucibus consectetur. Maecenas eu turpis et neque pretium molestie. Phasellus congue iaculis urna id consectetur. Proin eu tellus posuere dolor porttitor elementum. Duis id nisi id libero dignissim venenatis sit amet quis dolor.</p>
                <p>Proin varius at nulla a dignissim. Mauris in velit facilisis, porta nisl vitae, sagittis turpis. Duis vitae mi sed nulla tincidunt rutrum convallis quis tellus. Pellentesque luctus felis quis lobortis sodales. Quisque eu sollicitudin justo. Cras vel metus semper, mattis quam eget, aliquam orci. Maecenas quis quam lacinia mi aliquet cursus a non leo.</p>
                <p>Sed risus velit, sollicitudin sit amet rutrum sed, accumsan in justo. Phasellus eu orci eget elit finibus pharetra in quis risus. Pellentesque pellentesque est vel orci euismod tristique. Aenean vel ultricies eros, ac pharetra nibh. Nunc a sapien a leo blandit molestie et nec lorem. Aliquam auctor magna in enim sodales cursus. Aliquam erat volutpat.</p>

            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#dd0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGithub} color="#EC4D28"/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About;