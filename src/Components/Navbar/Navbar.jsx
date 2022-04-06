import './navbar.css';
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(scrollTrigger);

const Navbar = () => {
  const h1ref = useRef(null);
  const imgref = useRef(null);
  const h3ref = useRef(null);

  useEffect(() => {
    gsap.from(h1ref.current, {
      duration: 2,
      opacity: 0,
      y: -100,
      ease: 'power3.out',
    });

    gsap.to("#text", {
      scrollTrigger: {
        trigger: ".text__container",
        start: "top center",
        end: "bottom bottom",
        scrub: 2,
        markers: true
      },
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1
    })

    const el = imgref.current;

    el.addEventListener('mouseover', (e) => {
      gsap.to("#hero-img", {
        scale: 1.2,
        duration: 1,
      });
    });

    el.addEventListener('mouseleave', (e) => {
      gsap.to(imgref.current, {
        scale: 1,
        duration: 1,
      });
    });
  }, []);
  return (
    <div className="App">
      <h1 ref={h1ref}>Hello World!!!</h1>
      <div className="img__container">
        <img
          id="hero-img"
          ref={imgref}
          src="https://images.pexels.com/photos/5417097/pexels-photo-5417097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="hero-img"
        />
      </div>
      <div className="text__container">
        <h3 id="text" ref={h3ref}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure a
          dolore vel repellendus! Est esse nobis facere magnam quisquam. Quos
          non dicta quaerat eaque tempore assumenda illo sint eius deleniti!
        </h3>
      </div>
    </div>
  );
}

export default Navbar;