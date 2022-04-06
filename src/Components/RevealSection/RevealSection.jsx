import './revealSection.css';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RevealSection = () => {
    const main = useRef(null);

    useEffect(() => {
        gsap.to("#videoplayer", {
          scrollTrigger: {
            trigger: "main",
            start: "top top",
            scrub: 2,
            pin: "main",
          },
          width: "100%",
        });

        gsap.to("#one", {
          scrollTrigger: {
            trigger: "main",
            start: "top top",
            scrub: 3,
          },
          left: "-900px",
          opacity: 0,
        });

        gsap.to("#holder1", {
          scrollTrigger: {
            trigger: "main",
            start: "top top",
            scrub: 3,
          },
          left: "-450px",
          opacity: 0,
        });

        gsap.to("#six", {
          scrollTrigger: {
            trigger: "main",
            start: "top top",
            scrub: 3,
          },
          right: "-900px",
          opacity: 0,
        });

        gsap.to("#holder2", {
          scrollTrigger: {
            trigger: "main",
            start: "top top",
            scrub: 3,
          },
          right: "-450px",
          opacity: 0,
        });
    },[]);

  return (
    <>
      <main ref={main}>
        <div id="one" class="img__container"></div>
        <div id="holder1" class="holder">
          <div id="two" class="img__container"></div>
          <div id="three" class="img__container"></div>
        </div>
        <div id="videoplayer">
          <video autoplay loop muted>
            <source
              src="/assets/video3.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div id="holder2" class="holder">
          <div id="four" class="img__container"></div>
          <div id="five" class="img__container"></div>
        </div>
        <div id="six" class="img__container"></div>
      </main>
    </>
  );
}

export default RevealSection;