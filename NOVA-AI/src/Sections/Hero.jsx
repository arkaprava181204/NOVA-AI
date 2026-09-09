const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap');

/* =========================================
   HERO SECTION
========================================= */

.hero-wrap {
  position: relative;
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 24px;

  overflow: hidden;
}


/* =========================================
   BACKGROUND GLOW
========================================= */

.hero-glow {
  position: absolute;

  top: 50%;
  left: 50%;

  width: 60vw;
  height: 60vw;

  max-width: 700px;
  max-height: 700px;

  border-radius: 9999px;

  background:
    radial-gradient(
      circle,
      rgba(59,130,246,0.35) 0%,
      rgba(59,130,246,0.12) 45%,
      rgba(59,130,246,0) 72%
    );

  transform:
    translate(-50%, -50%)
    scale(0.6);

  opacity: 0;

  animation:
    heroGlowIn
    1.4s
    ease-out
    forwards;

  pointer-events: none;

  z-index: 0;
}


@keyframes heroGlowIn {

  0% {
    opacity: 0;

    transform:
      translate(-50%, -50%)
      scale(0.6);
  }

  35% {
    opacity: 1;

    transform:
      translate(-50%, -50%)
      scale(1.9);
  }

  100% {
    opacity: 0.6;

    transform:
      translate(-50%, -50%)
      scale(1);
  }

}


/* =========================================
   HERO CONTENT
========================================= */

.hero-content {
  position: relative;

  z-index: 5;

  display: flex;

  flex-direction: column;

  align-items: center;

  text-align: center;

  animation:
    heroContentMove
    1s
    cubic-bezier(.2,.8,.2,1)
    forwards;

  animation-delay: 2.8s;
}


@keyframes heroContentMove {

  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-24vw);
  }

}


/* =========================================
   NOVA HEADING
========================================= */

.hero-heading {
  position: relative;

  z-index: 1;

  display: inline-flex;

  align-items: center;

  white-space: nowrap;

  font-family:
    'Orbitron',
    sans-serif;

  font-weight: 800;

  font-size:
    clamp(
      2.75rem,
      9vw,
      6.5rem
    );

  line-height: 1;

  letter-spacing: 0.02em;

  color: #0f172a;
}


/* =========================================
   AI MARK
========================================= */

.hero-ai-mark {

  display: inline-flex;

  align-items: center;

  height: 0.82em;

  margin-right: 0.05em;

  transform: scale(6);

  animation:
    heroAiIntro
    1.05s
    cubic-bezier(.2,.75,.25,1)
    forwards;
}


.hero-ai-mark svg {

  display: block;

  width: auto;

  height: 100%;
}


@keyframes heroAiIntro {

  0% {
    transform: scale(6);
  }

  55% {
    transform: scale(0.88);
  }

  75% {
    transform: scale(1.06);
  }

  100% {
    transform: scale(1);
  }

}


/* =========================================
   OVA
========================================= */

.hero-ova {

  display: inline-block;

  opacity: 0;

  transform:
    translateX(-18px);

  animation:
    heroOvaIn
    0.6s
    ease
    forwards;

  animation-delay: 1.05s;
}


@keyframes heroOvaIn {

  to {

    opacity: 1;

    transform:
      translateX(0);
  }

}


/* =========================================
   TAGLINE
========================================= */

.hero-tagline {

  position: relative;

  z-index: 1;

  margin-top: 26px;

  font-size:
    clamp(
      1.05rem,
      2.6vw,
      1.5rem
    );

  font-weight: 500;

  color: #334155;

  opacity: 0;

  transform:
    translateY(16px);

  animation:
    heroFadeUp
    0.7s
    ease
    forwards;

  animation-delay: 1.75s;
}


@keyframes heroFadeUp {

  to {

    opacity: 1;

    transform:
      translateY(0);
  }

}


/* =========================================
   CTA
========================================= */

.hero-cta {

  position: relative;

  z-index: 1;

  margin-top: 34px;

  display: flex;

  gap: 16px;

  flex-wrap: wrap;

  justify-content: center;

  opacity: 0;

  transform:
    translateY(14px);

  animation:
    heroFadeUp
    0.6s
    ease
    forwards;

  animation-delay: 2.15s;
}


.hero-btn-primary {

  background: #2563eb;

  color: white;

  border: none;

  padding: 13px 28px;

  border-radius: 9999px;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.2s ease;
}


.hero-btn-primary:hover {

  background: #1d4ed8;

  transform:
    scale(1.05);
}


.hero-btn-ghost {

  background: transparent;

  color: #0f172a;

  border:
    1.5px solid
    rgba(15,23,42,0.25);

  padding: 13px 28px;

  border-radius: 9999px;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    border-color 0.2s ease;
}


.hero-btn-ghost:hover {

  border-color: #2563eb;

  transform:
    scale(1.05);
}


/* =========================================
   RIGHT SIDE VISUALS
   PC — UNCHANGED
========================================= */

.hero-visuals {

  position: absolute;

  left: 53%;

  right: 2%;

  top: 50%;

  height: 78vh;

  transform:
    translateY(-50%);

  z-index: 3;

  pointer-events: none;
}


/* =========================================
   IMAGE CARDS
========================================= */

.hero-card {

  position: absolute;

  opacity: 0;

  transform:
    translateX(100px)
    scale(0.72)
    rotate(7deg);

  filter:
    blur(4px);

  animation:
    heroRobotIn
    0.75s
    cubic-bezier(.2,.8,.2,1)
    forwards;
}


.hero-card img {

  display: block;

  width: 100%;

  height: auto;

  max-width: 100%;

  object-fit: contain;

  filter:
    drop-shadow(
      0 20px 35px
      rgba(37,99,235,0.2)
    );
}


/* =========================================
   PC IMAGE POSITIONS
========================================= */

.hero-card-1 {

  width: 260px;

  top: 2%;

  left: 0;

  animation-delay: 3.05s;
}


.hero-card-2 {

  width: 310px;

  top: 30%;

  right: 0;

  animation-delay: 3.4s;
}


.hero-card-3 {

  width: 250px;

  bottom: 2%;

  left: 15%;

  animation-delay: 3.75s;
}


/* =========================================
   ROBOTIC ENTRANCE
========================================= */

@keyframes heroRobotIn {

  0% {

    opacity: 0;

    transform:
      translateX(100px)
      scale(0.72)
      rotate(7deg);

    filter:
      blur(4px);
  }

  45% {

    opacity: 1;

    transform:
      translateX(-15px)
      scale(1.04)
      rotate(-2deg);

    filter:
      blur(0);
  }

  70% {

    transform:
      translateX(5px)
      scale(0.98)
      rotate(1deg);
  }

  100% {

    opacity: 1;

    transform:
      translateX(0)
      scale(1)
      rotate(0);

    filter:
      blur(0);
  }

}


/* =========================================
   PC FLOATING EFFECT
========================================= */

.hero-card-1 img {

  animation:
    heroFloat1
    4s
    ease-in-out
    4.2s
    infinite
    alternate;
}


.hero-card-2 img {

  animation:
    heroFloat2
    4.5s
    ease-in-out
    4.5s
    infinite
    alternate;
}


.hero-card-3 img {

  animation:
    heroFloat3
    5s
    ease-in-out
    4.8s
    infinite
    alternate;
}


@keyframes heroFloat1 {

  from {
    transform:
      translateY(0);
  }

  to {
    transform:
      translateY(-10px);
  }

}


@keyframes heroFloat2 {

  from {
    transform:
      translateY(0);
  }

  to {
    transform:
      translateY(12px);
  }

}


@keyframes heroFloat3 {

  from {
    transform:
      translateY(0);
  }

  to {
    transform:
      translateY(-8px);
  }

}


/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {

  .hero-content {

    animation:
      heroContentMoveTablet
      1s
      cubic-bezier(.2,.8,.2,1)
      forwards;

    animation-delay: 2.8s;
  }


  @keyframes heroContentMoveTablet {

    0% {
      transform:
        translateX(0);
    }

    100% {
      transform:
        translateX(-18vw);
    }

  }


  .hero-visuals {

    left: 52%;

    right: 2%;

    height: 65vh;
  }


  .hero-card-1 {
    width: 170px;
  }


  .hero-card-2 {
    width: 210px;
  }


  .hero-card-3 {
    width: 170px;
  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {

  .hero-wrap {

    min-height: 100svh;

    padding:
      70px 18px
      40px;

    align-items: center;

    justify-content: center;

    overflow: hidden;
  }


  /* =========================================
     MOBILE NOVA POSITION
  ========================================= */

  .hero-content {

    animation:
      heroContentMoveMobile
      1s
      cubic-bezier(.2,.8,.2,1)
      forwards;

    animation-delay: 2.8s;

    z-index: 10;
  }


  @keyframes heroContentMoveMobile {

    0% {
      transform:
        translateY(0);
    }

    100% {
      transform:
        translateY(-13vh);
    }

  }


  .hero-heading {

    font-size:
      clamp(
        2.4rem,
        15vw,
        4.5rem
      );
  }


  .hero-tagline {

    margin-top: 20px;

    font-size: 1rem;
  }


  .hero-cta {

    margin-top: 26px;

    gap: 10px;
  }


  .hero-btn-primary,
  .hero-btn-ghost {

    padding:
      11px 21px;

    font-size: 14px;
  }


  /* =========================================
     MOBILE IMAGE CONTAINER
  ========================================= */

  .hero-visuals {

    position: absolute;

    left: 50%;

    right: auto;

    top: auto;

    bottom: 2%;

    width: 100%;

    height: 43vh;

    transform:
      translateX(-50%);

    z-index: 3;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 2px;

    pointer-events: none;
  }


  /* =========================================
     MOBILE CARDS
  ========================================= */

  .hero-card {

    position: relative;

    top: auto !important;

    right: auto !important;

    bottom: auto !important;

    left: auto !important;

    flex-shrink: 0;

    height: 13.2vh;

    width: auto !important;

    max-width: 90vw;

    display: flex;

    align-items: center;

    justify-content: center;

    transform:
      translateY(25px)
      scale(0.72)
      rotate(7deg);

    animation:
      heroRobotInMobile
      0.75s
      cubic-bezier(.2,.8,.2,1)
      forwards;
  }


  .hero-card img {

    display: block;

    height: 100%;

    width: auto;

    max-width: 90vw;

    max-height: 100%;

    object-fit: contain;
  }


  /* =========================================
     MOBILE IMAGE 1
  ========================================= */

  .hero-card-1 {

    height: 13.2vh;

    animation-delay: 3.05s;
  }


  /* =========================================
     MOBILE IMAGE 2
  ========================================= */

  .hero-card-2 {

    height: 13.8vh;

    animation-delay: 3.4s;
  }


  /* =========================================
     MOBILE IMAGE 3
  ========================================= */

  .hero-card-3 {

    height: 13.2vh;

    animation-delay: 3.75s;
  }


  /* =========================================
     MOBILE ROBOTIC ENTRANCE
  ========================================= */

  @keyframes heroRobotInMobile {

    0% {

      opacity: 0;

      transform:
        translateY(25px)
        scale(0.72)
        rotate(7deg);

      filter:
        blur(4px);
    }

    45% {

      opacity: 1;

      transform:
        translateY(-5px)
        scale(1.04)
        rotate(-2deg);

      filter:
        blur(0);
    }

    70% {

      transform:
        translateY(2px)
        scale(0.98)
        rotate(1deg);
    }

    100% {

      opacity: 1;

      transform:
        translateY(0)
        scale(1)
        rotate(0);

      filter:
        blur(0);
    }

  }


  /* =========================================
     REMOVE FLOATING ONLY ON MOBILE
  ========================================= */

  .hero-card-1 img,
  .hero-card-2 img,
  .hero-card-3 img {

    animation: none;
  }

}


/* =========================================
   SHORT MOBILE SCREENS
========================================= */

@media (max-width: 700px) and (max-height: 700px) {

  .hero-visuals {

    height: 42vh;

    bottom: 1%;
  }


  .hero-card {

    height: 11.8vh;
  }


  .hero-card-1 {

    height: 11.8vh;
  }


  .hero-card-2 {

    height: 12.4vh;
  }


  .hero-card-3 {

    height: 11.8vh;
  }

}


/* =========================================
   VERY SMALL PHONES
========================================= */

@media (max-width: 380px) {

  .hero-wrap {

    padding-left: 10px;

    padding-right: 10px;
  }


  .hero-heading {

    font-size:
      clamp(
        2rem,
        15vw,
        3.8rem
      );
  }


  .hero-tagline {

    font-size: 0.9rem;
  }


  .hero-visuals {

    height: 42vh;

    gap: 1px;

    bottom: 1%;
  }


  .hero-card {

    height: 11.5vh;
  }


  .hero-card-1 {

    height: 11.5vh;
  }


  .hero-card-2 {

    height: 12vh;
  }


  .hero-card-3 {

    height: 11.5vh;
  }

}


/* =========================================
   REDUCED MOTION
========================================= */

@media (prefers-reduced-motion: reduce) {

  .hero-glow,
  .hero-ai-mark,
  .hero-ova,
  .hero-tagline,
  .hero-cta,
  .hero-content,
  .hero-card,
  .hero-card img {

    animation: none !important;

    opacity: 1 !important;

    transform: none !important;

    filter: none !important;
  }


  .hero-glow {

    opacity: 0.5 !important;
  }

}
`;


export default function Hero() {

  return (

    <section className="hero-wrap">

      <style>{CSS}</style>


      {/* =================================
          BACKGROUND GLOW
      ================================= */}

      <div className="hero-glow" />


      {/* =================================
          NOVA CONTENT
      ================================= */}

      <div className="hero-content">

        <h1 className="hero-heading">

          {/* AI LOGO */}

          <span className="hero-ai-mark">

            <svg
              viewBox="0 0 120 100"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="AI"
            >

              <defs>

                <linearGradient
                  id="aiGrad"
                  x1="0"
                  y1="100"
                  x2="120"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >

                  <stop
                    offset="0%"
                    stopColor="#60a5fa"
                  />

                  <stop
                    offset="55%"
                    stopColor="#2563eb"
                  />

                  <stop
                    offset="100%"
                    stopColor="#0f172a"
                  />

                </linearGradient>

              </defs>


              {/* Left vertical stroke */}

              <polygon
                points="8,8 26,8 26,92 8,92"
                fill="url(#aiGrad)"
              />


              {/* Diagonal stroke */}

              <polygon
                points="26,8 44,8 112,92 94,92"
                fill="url(#aiGrad)"
              />


              {/* Right vertical stroke */}

              <polygon
                points="94,8 112,8 112,92 94,92"
                fill="url(#aiGrad)"
              />

            </svg>

          </span>


          {/* OVA */}

          <span className="hero-ova">
            OVA
          </span>

        </h1>


        {/* TAGLINE */}

        <p className="hero-tagline">
          Build Better. Work Smarter.
        </p>

      </div>


      {/* =================================
          HERO IMAGES
      ================================= */}

      <div className="hero-visuals">

        <div className="hero-card hero-card-1">

          <img
            src="/Hero_img_1.png"
            alt="Hero_img_1"
          />

        </div>


        <div className="hero-card hero-card-2">

          <img
            src="/Hero_img_2.png"
            alt="Hero_img_2"
          />

        </div>


        <div className="hero-card hero-card-3">

          <img
            src="/Hero_img_3.png"
            alt="Hero_img_3"
          />

        </div>

      </div>

    </section>

  );

}