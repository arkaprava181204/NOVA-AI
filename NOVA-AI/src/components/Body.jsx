import { useEffect, useRef } from "react";

import Hero from "../Sections/Hero";
import TrustedBy from "../Sections/Trustedby";
import Features from "../Sections/Features";
import About from "../Sections/About";
import HowItWorks from "../Sections/Howitworks";
import Statistics from "../Sections/Statistics";
import WhatPeopleSay from "../Sections/Whatpeoplesay";
import Pricing from "../Sections/Pricing";
import FAQ from "../Sections/Faq";


const CSS = `
html {
  scroll-behavior: smooth;
}

.aiova-body {
  position: relative;
  min-height: 100vh;
  background: #eaf4fd;
  overflow: hidden;
}

.aiova-body,
.aiova-body * {
  cursor: none;
}

.aiova-body header,
.aiova-body header * {
  cursor: auto;
}

.aiova-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.aiova-content {
  position: relative;
  z-index: 10;
}


/* =========================================
   SECTION NAVIGATION
========================================= */

.aiova-section {
  position: relative;
  scroll-margin-top: 80px;
}


/*
  Animation reset.

  When a section gets the "animate-section"
  class, its child animations are restarted.
*/

.aiova-section.animate-section {
  animation: sectionReveal 0.01s linear;
}


@keyframes sectionReveal {
  from {
    opacity: 0.9999;
  }

  to {
    opacity: 1;
  }
}


.cursor-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  pointer-events: none;
}


@media (hover: none) and (pointer: coarse) {

  .aiova-body,
  .aiova-body * {
    cursor: auto;
  }

  .cursor-canvas {
    display: none;
  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {

  .aiova-section {
    scroll-margin-top: 60px;
  }

}
`;


/* =====================================================
   NEURON BACKGROUND
===================================================== */

function NeuronBackground() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width;
    let height;
    let dpr;

    let particles = [];

    let raf;

    const reduced =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    function resize() {

      dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width =
        width + "px";

      canvas.style.height =
        height + "px";

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );


      const count = Math.max(
        30,
        Math.min(
          90,
          Math.floor(
            (width * height) / 18000
          )
        )
      );


      particles = Array.from(
        { length: count },
        () => ({

          x:
            Math.random() * width,

          y:
            Math.random() * height,

          vx:
            (Math.random() - 0.5) *
            (reduced ? 0 : 0.25),

          vy:
            (Math.random() - 0.5) *
            (reduced ? 0 : 0.25),

          r:
            1.6 +
            Math.random() * 1.8,

          pulse:
            Math.random() *
            Math.PI *
            2,

        })
      );

    }


    function step() {

      ctx.clearRect(
        0,
        0,
        width,
        height
      );


      /* UPDATE */

      for (const p of particles) {

        p.x += p.vx;

        p.y += p.vy;

        p.pulse += 0.02;


        if (
          p.x < 0 ||
          p.x > width
        ) {

          p.vx *= -1;

        }


        if (
          p.y < 0 ||
          p.y > height
        ) {

          p.vy *= -1;

        }

      }


      /* CONNECTIONS */

      const maxDist = 150;


      for (
        let i = 0;
        i < particles.length;
        i++
      ) {

        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {

          const a = particles[i];

          const b = particles[j];


          const dx =
            a.x - b.x;

          const dy =
            a.y - b.y;


          const dist =
            Math.sqrt(
              dx * dx +
              dy * dy
            );


          if (dist < maxDist) {

            const opacity =
              (1 - dist / maxDist) *
              0.35;


            ctx.strokeStyle =
              `rgba(96, 165, 250, ${opacity})`;

            ctx.lineWidth = 1;

            ctx.beginPath();

            ctx.moveTo(
              a.x,
              a.y
            );

            ctx.lineTo(
              b.x,
              b.y
            );

            ctx.stroke();

          }

        }

      }


      /* NODES */

      for (const p of particles) {

        const glow =
          0.55 +
          Math.sin(p.pulse) *
          0.25;


        const grad =
          ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.r * 4
          );


        grad.addColorStop(
          0,
          `rgba(37, 99, 235, ${0.5 * glow})`
        );


        grad.addColorStop(
          1,
          "rgba(37, 99, 235, 0)"
        );


        ctx.fillStyle = grad;

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.r * 4,
          0,
          Math.PI * 2
        );

        ctx.fill();


        ctx.fillStyle =
          "#3b82f6";

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.r,
          0,
          Math.PI * 2
        );

        ctx.fill();

      }


      raf =
        requestAnimationFrame(
          step
        );

    }


    resize();

    step();


    window.addEventListener(
      "resize",
      resize
    );


    return () => {

      window.removeEventListener(
        "resize",
        resize
      );

      cancelAnimationFrame(raf);

    };

  }, []);


  return (
    <canvas
      ref={canvasRef}
      className="aiova-canvas"
      aria-hidden="true"
    />
  );

}


/* =====================================================
   CURSOR FOLLOWER
===================================================== */

function CursorFollower() {

  const canvasRef = useRef(null);


  useEffect(() => {

    const isCoarse =
      window.matchMedia(
        "(hover: none) and (pointer: coarse)"
      ).matches;


    const canvas =
      canvasRef.current;


    if (
      isCoarse ||
      !canvas
    ) {

      return;

    }


    const ctx =
      canvas.getContext("2d");


    const reduced =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    let width;
    let height;
    let dpr;

    let raf;


    const target = {

      x:
        window.innerWidth / 2,

      y:
        window.innerHeight / 2,

    };


    const pos = {

      x:
        target.x,

      y:
        target.y,

    };


    let prev = {

      x:
        target.x,

      y:
        target.y,

    };


    const headerEl =
      document.querySelector(
        "header"
      );


    function resize() {

      dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      width =
        window.innerWidth;

      height =
        window.innerHeight;


      canvas.width =
        width * dpr;

      canvas.height =
        height * dpr;


      canvas.style.width =
        width + "px";

      canvas.style.height =
        height + "px";


      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

    }


    function onMove(e) {

      target.x =
        e.clientX;

      target.y =
        e.clientY;

    }


    function draw() {

      ctx.globalCompositeOperation =
        "destination-out";


      ctx.fillStyle =
        reduced
          ? "rgba(0,0,0,1)"
          : "rgba(0,0,0,0.18)";


      ctx.fillRect(
        0,
        0,
        width,
        height
      );


      ctx.globalCompositeOperation =
        "source-over";


      prev = {
        x: pos.x,
        y: pos.y
      };


      pos.x +=
        (
          target.x -
          pos.x
        ) *
        (
          reduced
            ? 1
            : 0.35
        );


      pos.y +=
        (
          target.y -
          pos.y
        ) *
        (
          reduced
            ? 1
            : 0.35
        );


      const vx =
        pos.x -
        prev.x;


      const vy =
        pos.y -
        prev.y;


      const speed =
        Math.min(
          Math.hypot(
            vx,
            vy
          ),
          40
        );


      const angle =
        Math.atan2(
          vy,
          vx
        );


      const headerBottom =
        headerEl
          ? headerEl
              .getBoundingClientRect()
              .bottom
          : 0;


      const overHeader =
        pos.y <=
        headerBottom;


      /* COMET TAIL */

      if (
        !overHeader &&
        !reduced &&
        speed > 0.6
      ) {

        const tailLen =
          14 +
          speed * 2.2;


        ctx.save();

        ctx.translate(
          pos.x,
          pos.y
        );

        ctx.rotate(angle);


        const tailGrad =
          ctx.createLinearGradient(
            -tailLen,
            0,
            6,
            0
          );


        tailGrad.addColorStop(
          0,
          "rgba(96,165,250,0)"
        );


        tailGrad.addColorStop(
          0.6,
          "rgba(59,130,246,0.35)"
        );


        tailGrad.addColorStop(
          1,
          "rgba(147,197,253,0.85)"
        );


        ctx.fillStyle =
          tailGrad;


        ctx.beginPath();


        ctx.ellipse(
          -tailLen / 2 + 3,
          0,
          tailLen / 2,
          3.5 +
            speed * 0.05,
          0,
          0,
          Math.PI * 2
        );


        ctx.fill();

        ctx.restore();

      }


      /* COMET HEAD */

      if (!overHeader) {

        const haloR = 22;


        const halo =
          ctx.createRadialGradient(
            pos.x,
            pos.y,
            0,
            pos.x,
            pos.y,
            haloR
          );


        halo.addColorStop(
          0,
          "rgba(147,197,253,0.55)"
        );


        halo.addColorStop(
          0.5,
          "rgba(59,130,246,0.28)"
        );


        halo.addColorStop(
          1,
          "rgba(59,130,246,0)"
        );


        ctx.fillStyle =
          halo;


        ctx.beginPath();

        ctx.arc(
          pos.x,
          pos.y,
          haloR,
          0,
          Math.PI * 2
        );

        ctx.fill();


        const core =
          ctx.createRadialGradient(
            pos.x,
            pos.y,
            0,
            pos.x,
            pos.y,
            5
          );


        core.addColorStop(
          0,
          "#ffffff"
        );


        core.addColorStop(
          0.4,
          "#bfdbfe"
        );


        core.addColorStop(
          1,
          "#2563eb"
        );


        ctx.fillStyle =
          core;


        ctx.beginPath();

        ctx.arc(
          pos.x,
          pos.y,
          5,
          0,
          Math.PI * 2
        );

        ctx.fill();

      }


      raf =
        requestAnimationFrame(
          draw
        );

    }


    resize();


    window.addEventListener(
      "resize",
      resize
    );


    window.addEventListener(
      "mousemove",
      onMove
    );


    raf =
      requestAnimationFrame(
        draw
      );


    return () => {

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        onMove
      );

      cancelAnimationFrame(
        raf
      );

    };

  }, []);


  return (
    <canvas
      ref={canvasRef}
      className="cursor-canvas"
      aria-hidden="true"
    />
  );

}


/* =====================================================
   SECTION ANIMATION CONTROLLER
===================================================== */

function AnimatedSection({
  id,
  children,
}) {

  const sectionRef =
    useRef(null);


  useEffect(() => {

    const section =
      sectionRef.current;


    if (!section) return;


    /*
      Whenever the section becomes visible,
      remove and re-add the animation class.

      This forces CSS animations inside the
      section to restart when navigating back
      to that section.
    */

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                section.classList.remove(
                  "animate-section"
                );


                /*
                  Force browser reflow.
                */

                void section.offsetWidth;


                section.classList.add(
                  "animate-section"
                );

              }

            }
          );

        },
        {
          threshold: 0.15,
        }
      );


    observer.observe(section);


    return () => {

      observer.disconnect();

    };

  }, []);


  return (

    <section
      id={id}
      ref={sectionRef}
      className="aiova-section"
    >

      {children}

    </section>

  );

}


/* =====================================================
   BODY
===================================================== */

export default function Body({
  children,
}) {

  return (

    <div className="aiova-body">

      <style>
        {CSS}
      </style>


      {/* BACKGROUND */}

      <NeuronBackground />


      {/* CURSOR */}

      <CursorFollower />


      {/* CONTENT */}

      <div className="aiova-content">

        {children}


        {/* =====================================
            HERO
        ===================================== */}

        <AnimatedSection id="hero">

          <Hero />

        </AnimatedSection>


        {/* =====================================
            TRUSTED BY
        ===================================== */}

        <AnimatedSection id="trustedby">

          <TrustedBy />

        </AnimatedSection>


        {/* =====================================
            FEATURES
        ===================================== */}

        <AnimatedSection id="features">

          <Features />

        </AnimatedSection>


        {/* =====================================
            ABOUT
        ===================================== */}

        <AnimatedSection id="about">

          <About />

        </AnimatedSection>


        {/* =====================================
            HOW IT WORKS
        ===================================== */}

        <AnimatedSection id="howitworks">

          <HowItWorks />

        </AnimatedSection>


        {/* =====================================
            STATISTICS
        ===================================== */}

        <AnimatedSection id="statistics">

          <Statistics />

        </AnimatedSection>


        {/* =====================================
            TESTIMONIALS
        ===================================== */}

        <AnimatedSection id="whatpeoplesay">

          <WhatPeopleSay />

        </AnimatedSection>


        {/* =====================================
            PRICING
        ===================================== */}

        <AnimatedSection id="pricing">

          <Pricing />

        </AnimatedSection>


        {/* =====================================
            FAQ
        ===================================== */}

        <AnimatedSection id="faq">

          <FAQ />

        </AnimatedSection>

      </div>

    </div>

  );

}