import React, { useState } from "react";

const features = [
  {
    title: "AI Assistant",
    symbol: "AI",
    description:
      "Your intelligent companion for answering questions, brainstorming ideas, solving problems, and getting things done faster.",
  },
  {
    title: "Code Generation",
    symbol: "</>",
    description:
      "Generate, explain, debug, refactor, and improve code across programming languages and development environments.",
  },
  {
    title: "Image Generation",
    symbol: "IMG",
    description:
      "Turn your ideas into detailed images, illustrations, concepts, designs, and creative visuals using simple prompts.",
  },
  {
    title: "Video Generation",
    symbol: "VID",
    description:
      "Create engaging videos from ideas and prompts with AI-powered scenes, transitions, effects, and intelligent editing.",
  },
  {
    title: "Content Creation",
    symbol: "TXT",
    description:
      "Create blogs, articles, emails, scripts, captions, marketing copy, and other content in seconds.",
  },
  {
    title: "Data Analysis",
    symbol: "DATA",
    description:
      "Analyze complex information, identify patterns, discover insights, and turn raw data into useful answers.",
  },
  {
    title: "Translation",
    symbol: "LANG",
    description:
      "Translate and understand content across multiple languages while preserving meaning, context, and tone.",
  },
  {
    title: "Task Automation",
    symbol: "AUTO",
    description:
      "Automate repetitive workflows and everyday tasks so you can spend more time focusing on meaningful work.",
  },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap');


/* =====================================================
   FEATURES SECTION
===================================================== */

.features-section {
  position: relative;

  width: 100%;

  padding: 80px 0 40px;

  box-sizing: border-box;
}


/* =====================================================
   FEATURES HEADING
===================================================== */

.features-heading {
  margin: 0 0 15px;

  text-align: center;

  font-family:
    'Orbitron',
    sans-serif;

  font-size: clamp(2rem, 4vw, 3.5rem);

  font-weight: 800;

  letter-spacing: 0.08em;

  color: #64748b;

  line-height: 1.1;

  user-select: none;
}


/* =====================================================
   CAROUSEL
===================================================== */

.features-carousel {
  position: relative;

  width: 100%;
  max-width: 1250px;

  height: 620px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  perspective: 1600px;

  overflow: hidden;
}


/* =====================================================
   CARD
===================================================== */

.feature-card {
  position: absolute;

  width: 360px;
  height: 460px;

  padding: 42px 36px;

  box-sizing: border-box;

  border-radius: 30px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.20),
      rgba(255, 255, 255, 0.07)
    );

  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);

  border: 1px solid rgba(37, 99, 235, 0.38);

  box-shadow:
    0 25px 70px rgba(15, 23, 42, 0.14),
    inset 0 0 40px rgba(59, 130, 246, 0.035);

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  cursor: pointer;

  user-select: none;

  overflow: visible;

  transition:
    transform 0.8s cubic-bezier(.2, .8, .2, 1),
    opacity 0.7s ease,
    filter 0.7s ease,
    box-shadow 0.5s ease;
}


/* =====================================================
   MOVING BLUE LIGHT
===================================================== */

.feature-card::before {

  content: "";

  position: absolute;

  width: 9px;
  height: 9px;

  border-radius: 50%;

  background: #60a5fa;

  box-shadow:
    0 0 5px #60a5fa,
    0 0 12px #3b82f6,
    0 0 25px #2563eb,
    0 0 45px rgba(37, 99, 235, 0.9);

  offset-path:
    inset(
      1px
      round
      30px
    );

  offset-distance: 0%;

  offset-rotate: 0deg;

  animation:
    borderLight
    3.2s
    linear
    infinite;

  pointer-events: none;

  z-index: 20;
}


@keyframes borderLight {

  0% {
    offset-distance: 0%;
  }

  100% {
    offset-distance: 100%;
  }

}


/* =====================================================
   SOFT TRAIL BEHIND THE LIGHT
===================================================== */

.feature-card .light-trail {
  position: absolute;

  width: 4px;
  height: 4px;

  border-radius: 50%;

  background: #60a5fa;

  box-shadow:
    0 0 10px #2563eb,
    0 0 20px rgba(37, 99, 235, 0.7);

  pointer-events: none;
}


/* =====================================================
   ACTIVE CARD
===================================================== */

.feature-card.active {

  border-color:
    rgba(59, 130, 246, 0.7);

  box-shadow:
    0 35px 100px
    rgba(37, 99, 235, 0.18),

    0 0 30px
    rgba(37, 99, 235, 0.08),

    inset 0 0 45px
    rgba(59, 130, 246, 0.05);
}


/* =====================================================
   FEATURE SYMBOL
===================================================== */

.feature-symbol {

  width: 95px;
  height: 95px;

  margin-top: 45px;
  margin-bottom: 35px;

  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  background:
    rgba(37, 99, 235, 0.07);

  border:
    1px solid
    rgba(37, 99, 235, 0.30);

  color: #2563eb;

  font-family:
    'Orbitron',
    sans-serif;

  font-size: 16px;

  font-weight: 700;

  letter-spacing: 0.04em;

  box-shadow:
    0 0 30px
    rgba(37, 99, 235, 0.08),

    inset 0 0 25px
    rgba(37, 99, 235, 0.04);
}


/* =====================================================
   CARD TITLE
===================================================== */

.feature-card h3 {

  margin: 0 0 18px;

  font-family:
    'Orbitron',
    sans-serif;

  font-size: 23px;

  font-weight: 700;

  line-height: 1.25;

  color: #0f172a;
}


/* =====================================================
   DESCRIPTION
===================================================== */

.feature-card p {

  max-width: 275px;

  margin: 0;

  font-size: 15px;

  line-height: 1.75;

  color: #475569;
}


/* =====================================================
   BOTTOM LINE
===================================================== */

.feature-line {

  width: 60px;

  height: 2px;

  margin-top: auto;

  border-radius: 999px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #2563eb,
      transparent
    );

  box-shadow:
    0 0 12px
    rgba(37, 99, 235, 0.8);
}


/* =====================================================
   CONTROLS
===================================================== */

.features-controls {

  position: absolute;

  bottom: 8px;

  left: 50%;

  transform: translateX(-50%);

  display: flex;

  align-items: center;

  gap: 18px;

  z-index: 100;
}


/* =====================================================
   CONTROL BUTTON
===================================================== */

.feature-control {

  width: 48px;
  height: 48px;

  border-radius: 50%;

  border:
    1px solid
    rgba(37, 99, 235, 0.45);

  background:
    rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  color: #2563eb;

  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}


.feature-control:hover {

  transform: scale(1.1);

  background:
    rgba(37, 99, 235, 0.10);

  box-shadow:
    0 0 25px
    rgba(37, 99, 235, 0.25);
}


/* =====================================================
   DOTS
===================================================== */

.feature-dots {

  display: flex;

  align-items: center;

  gap: 7px;
}


.feature-dot {

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background:
    rgba(37, 99, 235, 0.20);

  transition:
    width 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}


.feature-dot.active {

  width: 24px;

  border-radius: 999px;

  background: #2563eb;

  box-shadow:
    0 0 12px
    rgba(37, 99, 235, 0.7);
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 1000px) {

  .features-section {
    padding-top: 65px;
  }

  .features-carousel {

    height: 570px;

    perspective: 1300px;
  }

  .feature-card {

    width: 320px;

    height: 430px;
  }
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 700px) {

  .features-section {

    padding-top: 50px;
  }

  .features-heading {

    margin-bottom: 5px;

    font-size: clamp(
      1.8rem,
      8vw,
      2.5rem
    );

    letter-spacing: 0.06em;
  }

  .features-carousel {

    height: 520px;

    perspective: 1000px;
  }

  /*
   * ONLY MOBILE CARD SIZE FIX
   *
   * The original 78vw / 310px card was too
   * large on smaller screens.
   *
   * This keeps the same card UI but gives
   * it safe space from both screen edges.
   */

  .feature-card {

    width: min(
      calc(100vw - 80px),
      290px
    );

    height: 400px;

    padding:
      35px 25px;

    border-radius: 26px;
  }

  /*
   * Keep the same light animation,
   * only match the mobile radius.
   */

  .feature-card::before {

    offset-path:
      inset(
        1px
        round
        26px
      );

  }

  .feature-symbol {

    width: 78px;
    height: 78px;

    margin-top: 28px;
    margin-bottom: 28px;

    font-size: 14px;
  }

  .feature-card h3 {

    font-size: 19px;
  }

  .feature-card p {

    font-size: 14px;

    line-height: 1.65;
  }

  .features-controls {

    bottom: 2px;
  }

  /*
   * Mobile carousel positions.
   *
   * The original ±400px positions were too
   * large for a phone screen.
   *
   * Only the horizontal distance is changed.
   */

  .feature-card.active {

    transform:
      translateX(0)
      translateZ(180px)
      rotateY(0deg)
      scale(1);
  }

}


/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 430px) {

  .features-section {

    padding-top: 40px;
  }

  .features-heading {

    font-size: 1.8rem;
  }

  .features-carousel {

    height: 490px;
  }

  /*
   * Smaller card only.
   * Everything else remains the same.
   */

  .feature-card {

    width:
      calc(100vw - 70px);

    max-width:
      285px;

    height: 380px;
  }

  .feature-card::before {

    width: 8px;
    height: 8px;

    offset-path:
      inset(
        1px
        round
        26px
      );
  }

  .feature-symbol {

    width: 70px;
    height: 70px;

    margin-top: 25px;
    margin-bottom: 24px;
  }

  .feature-card h3 {

    font-size: 18px;
  }

  .feature-card p {

    font-size: 13px;
  }

}


/* =====================================================
   MOBILE CAROUSEL POSITION FIX
   This is the actual overflow fix.
===================================================== */

@media (max-width: 700px) {

  .feature-card {

    /*
     * Keep the cards centered.
     * Side cards stay inside the carousel
     * instead of being pushed toward the edges.
     */

    transform-origin: center center;
  }

  .feature-card.active {
    transform:
      translateX(0)
      translateZ(180px)
      rotateY(0deg)
      scale(1);
  }

  .feature-card[style*="400px"] {
    transform:
      translateX(0)
      translateZ(180px)
      rotateY(0deg)
      scale(1);
  }

}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .feature-card {

    transition: none;
  }

  .feature-card::before {

    animation: none;
  }
}
`;


export default function Features() {

  const [active, setActive] = useState(0);


  /* =====================================================
     NEXT
  ===================================================== */

  const nextFeature = () => {

    setActive(
      (current) =>
        (current + 1) % features.length
    );

  };


  /* =====================================================
     PREVIOUS
  ===================================================== */

  const previousFeature = () => {

    setActive(
      (current) =>
        (current - 1 + features.length) %
        features.length
    );

  };


  /* =====================================================
     CARD POSITION
  ===================================================== */

  const getCardStyle = (index) => {

    const total = features.length;

    let offset =
      (index - active + total) % total;


    if (offset > total / 2) {

      offset -= total;

    }


    /* CENTER */

    if (offset === 0) {

      return {

        transform:
          "translateX(0) translateZ(180px) rotateY(0deg) scale(1)",

        opacity: 1,

        zIndex: 20,

        filter: "blur(0px)",

      };

    }


    /* RIGHT */

    if (offset === 1) {

      return {

        transform:
          "translateX(400px) translateZ(-100px) rotateY(-30deg) scale(.82)",

        opacity: 0.72,

        zIndex: 15,

        filter: "blur(0px)",

      };

    }


    /* LEFT */

    if (offset === -1) {

      return {

        transform:
          "translateX(-400px) translateZ(-100px) rotateY(30deg) scale(.82)",

        opacity: 0.72,

        zIndex: 15,

        filter: "blur(0px)",

      };

    }


    /* FAR RIGHT */

    if (offset === 2) {

      return {

        transform:
          "translateX(680px) translateZ(-300px) rotateY(-45deg) scale(.58)",

        opacity: 0.2,

        zIndex: 5,

        filter: "blur(2px)",

      };

    }


    /* FAR LEFT */

    if (offset === -2) {

      return {

        transform:
          "translateX(-680px) translateZ(-300px) rotateY(45deg) scale(.58)",

        opacity: 0.2,

        zIndex: 5,

        filter: "blur(2px)",

      };

    }


    /* HIDDEN */

    return {

      transform:
        "translateX(0) translateZ(-600px) scale(.3)",

      opacity: 0,

      zIndex: 0,

      pointerEvents: "none",

    };

  };


  return (

    <section className="features-section">

      <style>{CSS}</style>


      {/* =================================================
          FEATURES HEADING
      ================================================= */}

      <h2 className="features-heading">
        FEATURES
      </h2>


      {/* =================================================
          CAROUSEL
      ================================================= */}

      <div className="features-carousel">


        {features.map(
          (feature, index) => (

            <article

              key={feature.title}

              className={`
                feature-card
                ${
                  index === active
                    ? "active"
                    : ""
                }
              `}

              style={getCardStyle(index)}

              onClick={() => {

                if (index !== active) {

                  setActive(index);

                }

              }}

            >

              {/* FEATURE SYMBOL */}

              <div className="feature-symbol">

                {feature.symbol}

              </div>


              {/* TITLE */}

              <h3>

                {feature.title}

              </h3>


              {/* DESCRIPTION */}

              <p>

                {feature.description}

              </p>


              {/* BOTTOM LINE */}

              <div className="feature-line" />

            </article>

          )
        )}


        {/* =================================================
            CONTROLS
        ================================================= */}

        <div className="features-controls">

          <button

            className="feature-control"

            onClick={previousFeature}

            aria-label="Previous feature"

          >
            ←

          </button>


          <div className="feature-dots">

            {features.map(
              (_, index) => (

                <span

                  key={index}

                  className={`
                    feature-dot
                    ${
                      index === active
                        ? "active"
                        : ""
                    }
                  `}

                />

              )
            )}

          </div>


          <button

            className="feature-control"

            onClick={nextFeature}

            aria-label="Next feature"

          >
            →

          </button>

        </div>

      </div>

    </section>

  );
}