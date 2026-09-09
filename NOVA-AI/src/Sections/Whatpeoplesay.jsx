import React, { useState } from "react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Software Developer",
    text:
      "NOVA has completely changed the way I approach development. It helps me write, debug, and understand code much faster while keeping my workflow simple.",
  },
  {
    name: "Sophia Williams",
    role: "Creative Designer",
    text:
      "I love how easily NOVA turns my ideas into creative content. From generating concepts to creating visuals, everything feels incredibly smooth.",
  },
  {
    name: "Daniel Carter",
    role: "Product Manager",
    text:
      "NOVA saves our team a huge amount of time. Research, documentation, brainstorming, and everyday tasks are much easier with everything in one place.",
  },
  {
    name: "Emma Johnson",
    role: "Startup Founder",
    text:
      "NOVA feels like having an intelligent assistant available whenever I need it. It has become an essential part of how we work and build new ideas.",
  },
];


const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap');


/* =====================================================
   SECTION
===================================================== */

.what-section {

  width: 100%;

  padding:
    80px 30px 110px;

  box-sizing: border-box;

  overflow: hidden;
}


/* =====================================================
   HEADING
===================================================== */

.what-heading {

  margin:
    0 0 55px;

  text-align: center;

  font-family:
    'Orbitron',
    sans-serif;

  font-size:
    clamp(2rem, 4.5vw, 3.6rem);

  font-weight: 800;

  letter-spacing: 0.08em;

  color: #64748b;
}


/* =====================================================
   CAROUSEL
===================================================== */

.what-carousel {

  position: relative;

  width: 100%;

  max-width: 1100px;

  height: 420px;

  margin: 0 auto;

  display: flex;

  align-items: center;

  justify-content: center;

  perspective: 1400px;
}


/* =====================================================
   CARD
===================================================== */

.what-card {

  position: absolute;

  width:
    min(650px, 80vw);

  min-height: 300px;

  padding:
    45px;

  box-sizing: border-box;

  border-radius:
    30px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  text-align: center;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.38),
      rgba(255,255,255,0.10)
    );

  backdrop-filter:
    blur(25px);

  -webkit-backdrop-filter:
    blur(25px);

  border:
    1px solid
    rgba(37,99,235,0.35);

  box-shadow:

    0 25px 70px
    rgba(15,23,42,0.10),

    inset 0 0 35px
    rgba(37,99,235,0.035);

  transition:

    transform 0.65s
    cubic-bezier(.22,.61,.36,1),

    opacity 0.5s ease,

    filter 0.5s ease,

    box-shadow 0.5s ease;

  cursor: pointer;

  overflow: hidden;
}


/* =====================================================
   SOFT BLUE INNER GLOW
===================================================== */

.what-card::before {

  content: "";

  position: absolute;

  width: 240px;

  height: 240px;

  top: -120px;

  left: 50%;

  transform:
    translateX(-50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(37,99,235,0.10),
      transparent 70%
    );

  pointer-events: none;
}


/* =====================================================
   ACTIVE CARD
===================================================== */

.what-card.active {

  opacity: 1;

  filter: blur(0);

  transform:
    translateX(0)
    translateZ(80px)
    scale(1);

  z-index: 5;

  box-shadow:

    0 30px 80px
    rgba(37,99,235,0.15),

    0 0 45px
    rgba(37,99,235,0.08),

    inset 0 0 35px
    rgba(37,99,235,0.04);
}


/* =====================================================
   PREVIOUS CARD
===================================================== */

.what-card.prev {

  opacity: 0.45;

  filter: blur(1px);

  transform:
    translateX(-55%)
    translateZ(-120px)
    rotateY(12deg)
    scale(0.78);

  z-index: 2;
}


/* =====================================================
   NEXT CARD
===================================================== */

.what-card.next {

  opacity: 0.45;

  filter: blur(1px);

  transform:
    translateX(55%)
    translateZ(-120px)
    rotateY(-12deg)
    scale(0.78);

  z-index: 2;
}


/* =====================================================
   HIDDEN CARDS
===================================================== */

.what-card.hidden-left {

  opacity: 0;

  transform:
    translateX(-100%)
    translateZ(-250px)
    scale(0.6);

  z-index: 1;
}


.what-card.hidden-right {

  opacity: 0;

  transform:
    translateX(100%)
    translateZ(-250px)
    scale(0.6);

  z-index: 1;
}


/* =====================================================
   TESTIMONIAL TEXT
===================================================== */

.what-testimonial {

  position: relative;

  z-index: 3;

  max-width: 530px;

  margin:
    0 auto 30px;

  font-size:
    clamp(1rem, 2vw, 1.25rem);

  line-height:
    1.8;

  font-weight: 500;

  color: #334155;
}


/* =====================================================
   QUOTE MARK
===================================================== */

.what-quote {

  display: block;

  margin-bottom: 15px;

  font-family:
    'Orbitron',
    sans-serif;

  font-size: 42px;

  line-height: 1;

  color: #2563eb;

  opacity: 0.8;
}


/* =====================================================
   NAME
===================================================== */

.what-name {

  position: relative;

  z-index: 3;

  margin: 0;

  font-family:
    'Orbitron',
    sans-serif;

  font-size:
    16px;

  font-weight: 700;

  letter-spacing: 0.03em;

  color: #1e3a8a;
}


/* =====================================================
   ROLE
===================================================== */

.what-role {

  position: relative;

  z-index: 3;

  margin:
    7px 0 0;

  font-size:
    13px;

  color:
    #64748b;
}


/* =====================================================
   CONTROLS
===================================================== */

.what-controls {

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 18px;

  margin-top: 20px;
}


/* =====================================================
   NAVIGATION BUTTON
===================================================== */

.what-btn {

  width: 48px;

  height: 48px;

  border-radius: 50%;

  border:
    1px solid
    rgba(37,99,235,0.35);

  background:
    rgba(255,255,255,0.30);

  backdrop-filter:
    blur(15px);

  color:
    #2563eb;

  font-size:
    20px;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}


.what-btn:hover {

  transform:
    scale(1.1);

  background:
    rgba(239,246,255,0.7);

  border-color:
    #2563eb;

  box-shadow:
    0 0 20px
    rgba(37,99,235,0.2);
}


/* =====================================================
   DOTS
===================================================== */

.what-dots {

  display: flex;

  gap: 8px;

  align-items: center;
}


.what-dot {

  width: 7px;

  height: 7px;

  border-radius: 50%;

  background:
    rgba(37,99,235,0.25);

  cursor: pointer;

  transition:
    width 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}


.what-dot.active {

  width: 25px;

  border-radius: 10px;

  background:
    #2563eb;

  box-shadow:
    0 0 10px
    rgba(37,99,235,0.5);
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 900px) {

  .what-card.prev {

    transform:
      translateX(-48%)
      translateZ(-120px)
      rotateY(10deg)
      scale(0.76);
  }


  .what-card.next {

    transform:
      translateX(48%)
      translateZ(-120px)
      rotateY(-10deg)
      scale(0.76);
  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 700px) {

  .what-section {

    padding:
      60px 20px 80px;
  }


  .what-heading {

    margin-bottom:
      40px;
  }


  .what-carousel {

    height:
      390px;
  }


  .what-card {

    width:
      88vw;

    min-height:
      300px;

    padding:
      32px 25px;
  }


  .what-card.prev {

    transform:
      translateX(-25%)
      translateZ(-120px)
      rotateY(8deg)
      scale(0.75);

    opacity:
      0.25;
  }


  .what-card.next {

    transform:
      translateX(25%)
      translateZ(-120px)
      rotateY(-8deg)
      scale(0.75);

    opacity:
      0.25;
  }


  .what-testimonial {

    font-size:
      14px;

    line-height:
      1.7;
  }


  .what-quote {

    font-size:
      34px;
  }


  .what-controls {

    margin-top:
      10px;
  }

}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .what-card {

    transition:
      none;
  }

}
`;


export default function WhatPeopleSay() {

  const [active, setActive] = useState(0);


  /* =====================================================
     NEXT CARD
  ===================================================== */

  const nextCard = () => {

    setActive(
      (prev) =>
        (prev + 1) %
        testimonials.length
    );

  };


  /* =====================================================
     PREVIOUS CARD
  ===================================================== */

  const previousCard = () => {

    setActive(
      (prev) =>
        (prev - 1 +
          testimonials.length) %
        testimonials.length
    );

  };


  /* =====================================================
     CARD POSITION
  ===================================================== */

  const getCardClass = (index) => {

    const total =
      testimonials.length;

    const difference =
      (index - active + total) %
      total;


    if (difference === 0) {

      return "what-card active";

    }


    if (difference === 1) {

      return "what-card next";

    }


    if (difference === total - 1) {

      return "what-card prev";

    }


    if (difference <= total / 2) {

      return "what-card hidden-right";

    }


    return "what-card hidden-left";

  };


  return (

    <section className="what-section">

      <style>{CSS}</style>


      {/* =================================================
          HEADING
      ================================================= */}

      <h2 className="what-heading">

        WHAT PEOPLE SAY

      </h2>


      {/* =================================================
          CAROUSEL
      ================================================= */}

      <div className="what-carousel">

        {testimonials.map(
          (testimonial, index) => (

            <div
              key={testimonial.name}
              className={getCardClass(index)}
              onClick={() =>
                setActive(index)
              }
            >

              <div className="what-quote">
                “
              </div>


              <p className="what-testimonial">

                {testimonial.text}

              </p>


              <h3 className="what-name">

                {testimonial.name}

              </h3>


              <p className="what-role">

                {testimonial.role}

              </p>

            </div>

          )
        )}

      </div>


      {/* =================================================
          CONTROLS
      ================================================= */}

      <div className="what-controls">

        <button
          className="what-btn"
          onClick={previousCard}
          aria-label="Previous testimonial"
        >
          ‹
        </button>


        <div className="what-dots">

          {testimonials.map(
            (_, index) => (

              <span
                key={index}
                className={
                  index === active
                    ? "what-dot active"
                    : "what-dot"
                }
                onClick={() =>
                  setActive(index)
                }
              />

            )
          )}

        </div>


        <button
          className="what-btn"
          onClick={nextCard}
          aria-label="Next testimonial"
        >
          ›
        </button>

      </div>

    </section>

  );

}