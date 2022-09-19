import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import './index.scss'
import SVGComponent from './Outline/Outline'
import LogoA from '../../../assets/images/logo-solid-A.svg'


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
        drawSVG: 0,
        duration: 10,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 7,
        duration: 8,
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