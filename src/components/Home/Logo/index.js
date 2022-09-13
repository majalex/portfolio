import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import './index.scss'
import SVGComponent from './Outline/Outline'
import LogoA from '../../../assets/images/logo-a.svg'


const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: "5% 5%",
        duration: 5,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 6,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>

      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoA}
        alt="JavaScript,  Developer"/>

      <SVGComponent ref={outlineLogoRef}/>
    </div>
  )
}

export default Logo