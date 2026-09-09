import { useId, useState } from "react";

const NAV_ITEMS = [
  { label: "Features", id: "features" },
  { label: "About", id: "about" },
  { label: "How it works", id: "howitworks" },
  { label: "Statistics", id: "statistics" },
  { label: "What people say", id: "whatpeoplesay" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

const LOGO_SRC = "/aiova-logo.png";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700&display=swap');

.tally-header-font {
  font-family: 'Orbitron', sans-serif;
}

.neuron-item {
  position: relative;
  transition: transform 0.25s cubic-bezier(.2,.8,.3,1.2);
  transform-origin: center;
}

.neuron-item:hover {
  transform: scale(1.1);
}

.neuron-glow {
  position: absolute;
  inset: -32px -36px;
  border-radius: 9999px;
  background: radial-gradient(
    circle,
    rgba(59,130,246,0.55) 0%,
    rgba(37,99,235,0.32) 40%,
    rgba(37,99,235,0) 72%
  );
  filter: blur(18px);
  opacity: 0;
  transform: scale(0);
  transform-origin: 50% 50%;
  transition:
    opacity 0.45s ease,
    transform 0.55s cubic-bezier(.22,.9,.3,1.1);
  pointer-events: none;
  z-index: 0;
}

.neuron-item:hover .neuron-glow {
  opacity: 1;
  transform: scale(1);
}

.neuron-label {
  text-shadow:
    0 0 6px rgba(255,255,255,0.95),
    0 0 12px rgba(255,255,255,0.7);
}

.neuron-svg {
  position: absolute;
  inset: -22px -26px;
  width: calc(100% + 52px);
  height: calc(100% + 44px);
  pointer-events: none;
  opacity: 0;
  transform: scale(0);
  transform-origin: 50% 50%;
  transition:
    opacity 0.4s ease,
    transform 0.5s cubic-bezier(.22,.9,.3,1.1);
  transition-delay: 0.04s;
  overflow: visible;
  z-index: 1;
}

.neuron-item:hover .neuron-svg {
  opacity: 1;
  transform: scale(1);
}

.neuron-path {
  stroke-dasharray: 5 4;
  stroke-dashoffset: 0;
  opacity: 0.85;
}

.neuron-item:hover .neuron-path {
  animation: neuronFlow 1s linear infinite;
}

@keyframes neuronFlow {
  to {
    stroke-dashoffset: -18;
  }
}

.neuron-node {
  opacity: 0.5;
}

.neuron-item:hover .neuron-node {
  animation: neuronPulse 1.3s ease-in-out infinite;
}

@keyframes neuronPulse {
  0%, 100% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }
}

.running-border {
  position: relative;
  display: inline-block;
  border-radius: 9999px;
  padding: 2px;
  overflow: hidden;
  transition:
    transform 0.25s cubic-bezier(.2,.8,.3,1.2),
    filter 0.25s ease;
  filter:
    drop-shadow(0 0 10px rgba(37,99,235,0.75))
    drop-shadow(0 0 22px rgba(59,130,246,0.5));
}

.running-border:hover {
  transform: scale(1.08);
  filter:
    drop-shadow(0 0 14px rgba(37,99,235,0.9))
    drop-shadow(0 0 30px rgba(59,130,246,0.7));
}

.running-border::before {
  content: "";
  position: absolute;
  inset: -60%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 240deg,
    #1d4ed8 270deg,
    #2563eb 290deg,
    #3b82f6 305deg,
    #60a5fa 315deg,
    #ffffff 325deg,
    #60a5fa 335deg,
    #2563eb 350deg,
    transparent 360deg
  );
  animation: runLight 2.2s linear infinite;
}

@keyframes runLight {
  to {
    transform: rotate(360deg);
  }
}

.mobile-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: #000;
  margin: 5px 0;
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.mobile-toggle.open span:nth-child(1) {
  transform:
    translateY(7px)
    rotate(45deg);
}

.mobile-toggle.open span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.open span:nth-child(3) {
  transform:
    translateY(-7px)
    rotate(-45deg);
}

.mobile-panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;

  background:
    linear-gradient(
      180deg,
      rgba(224,242,254,0.65),
      rgba(191,219,254,0.4)
    );

  backdrop-filter:
    blur(16px)
    saturate(160%);

  -webkit-backdrop-filter:
    blur(16px)
    saturate(160%);

  box-shadow:
    0 16px 32px rgba(15,23,42,0.22),
    0 4px 10px rgba(15,23,42,0.14),
    inset 0 1px 0 rgba(255,255,255,0.85),
    inset 0 -1px 0 rgba(148,163,184,0.5);
}

.mobile-panel.open {
  max-height: 480px;
}

.glass-header {
  background:
    linear-gradient(
      180deg,
      rgba(224,242,254,0.6),
      rgba(191,219,254,0.32)
    );

  backdrop-filter:
    blur(16px)
    saturate(160%);

  -webkit-backdrop-filter:
    blur(16px)
    saturate(160%);

  box-shadow:
    0 16px 32px rgba(15,23,42,0.22),
    0 4px 10px rgba(15,23,42,0.14),
    inset 0 1px 0 rgba(255,255,255,0.85),
    inset 0 -1px 0 rgba(148,163,184,0.5),
    inset 0 -6px 14px -8px rgba(255,255,255,0.5);

  overflow: hidden;
}


/* =========================================
   SMOOTH SECTION NAVIGATION
========================================= */

html {
  scroll-behavior: smooth;
}


/*
  Prevent the fixed header from covering
  the top of each section.
*/

#features,
#about,
#howitworks,
#statistics,
#whatpeoplesay,
#pricing,
#faq {
  scroll-margin-top: 90px;
}


@media (max-width: 768px) {

  #features,
  #about,
  #howitworks,
  #statistics,
  #whatpeoplesay,
  #pricing,
  #faq {
    scroll-margin-top: 75px;
  }

}


@media (prefers-reduced-motion: reduce) {

  .neuron-item:hover .neuron-path,
  .neuron-item:hover .neuron-node,
  .running-border::before {
    animation: none !important;
  }

  .neuron-item,
  .neuron-item:hover,
  .neuron-glow,
  .neuron-item:hover .neuron-glow,
  .neuron-svg,
  .neuron-item:hover .neuron-svg,
  .running-border,
  .running-border:hover {
    transform: none !important;
    transition: none !important;
  }

}
`;


function NeuronOverlay() {

  const uid = useId();

  return (

    <svg
      className="neuron-svg"
      viewBox="0 0 220 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >

      <defs>

        <radialGradient
          id={`soma-${uid}`}
          cx="35%"
          cy="30%"
          r="70%"
        >

          <stop
            offset="0%"
            stopColor="#eaf4fb"
          />

          <stop
            offset="55%"
            stopColor="#8fb9d6"
          />

          <stop
            offset="100%"
            stopColor="#3c5c78"
          />

        </radialGradient>


        <filter
          id={`blur-${uid}`}
          x="-60%"
          y="-60%"
          width="220%"
          height="220%"
        >

          <feGaussianBlur
            stdDeviation="1.1"
          />

        </filter>


        <filter
          id={`spark-${uid}`}
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >

          <feGaussianBlur
            stdDeviation="1.3"
            result="b"
          />

          <feMerge>

            <feMergeNode in="b" />

            <feMergeNode in="SourceGraphic" />

          </feMerge>

        </filter>

      </defs>


      {/* DENDRITES */}

      <g
        fill="none"
        stroke="#a9cbe4"
        strokeWidth="1"
        filter={`url(#blur-${uid})`}
      >

        <path
          className="neuron-path"
          d="M40,40 Q20,20 6,10"
        />

        <path
          className="neuron-path"
          d="M40,40 Q20,55 8,68"
        />

        <path
          className="neuron-path"
          d="M40,40 Q75,25 110,38"
        />

        <path
          className="neuron-path"
          d="M110,38 Q140,18 170,10"
        />

        <path
          className="neuron-path"
          d="M110,38 Q145,50 178,44"
        />

        <path
          className="neuron-path"
          d="M110,38 Q120,60 106,72"
        />

        <path
          className="neuron-path"
          d="M178,44 Q200,36 214,20"
        />

        <path
          className="neuron-path"
          d="M178,44 Q198,58 212,66"
        />

      </g>


      {/* SOMA BODIES */}

      <g
        filter={`url(#blur-${uid})`}
      >

        <circle
          cx="40"
          cy="40"
          r="8"
          fill={`url(#soma-${uid})`}
        />

        <circle
          cx="110"
          cy="38"
          r="9"
          fill={`url(#soma-${uid})`}
        />

        <circle
          cx="178"
          cy="44"
          r="7"
          fill={`url(#soma-${uid})`}
        />

      </g>


      {/* GLOWING SYNAPSE POINTS */}

      <g
        fill="#ffe9a8"
        filter={`url(#spark-${uid})`}
      >

        <circle
          className="neuron-node"
          cx="6"
          cy="10"
          r="1.8"
        />

        <circle
          className="neuron-node"
          cx="8"
          cy="68"
          r="1.8"
        />

        <circle
          className="neuron-node"
          cx="170"
          cy="10"
          r="1.8"
        />

        <circle
          className="neuron-node"
          cx="214"
          cy="20"
          r="1.8"
        />

        <circle
          className="neuron-node"
          cx="212"
          cy="66"
          r="1.8"
        />

        <circle
          className="neuron-node"
          cx="106"
          cy="72"
          r="1.8"
        />

        <circle
          className="neuron-node"
          cx="75"
          cy="30"
          r="1.4"
        />

        <circle
          className="neuron-node"
          cx="144"
          cy="26"
          r="1.4"
        />

      </g>

    </svg>

  );

}


export default function Header() {

  const [menuOpen, setMenuOpen] =
    useState(false);


  /* =========================================
     CTA
  ========================================= */

  const CTA = (

    <div className="running-border">

      <button
        className="
          relative
          z-10
          block
          rounded-full
          bg-blue-600
          hover:bg-blue-500
          text-white
          text-sm
          font-semibold
          px-5
          py-2
          transition-colors
          tally-header-font
        "
      >
        Get started
      </button>

    </div>

  );


  /* =========================================
     NAVIGATION
  ========================================= */

  const navigateTo = (id) => {

    setMenuOpen(false);

    const section =
      document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };


  return (

    <header
      className="
        glass-header
        fixed
        top-0
        left-0
        right-0
        z-50
      "
    >

      <style>
        {CSS}
      </style>


      {/* =====================================
          HEADER CONTAINER
      ===================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
          py-3
          sm:py-4
        "
      >


        {/* ===================================
            LOGO
        =================================== */}

        <div
          className="
            flex
            items-center
            shrink-0
          "
        >

          <img
            src={LOGO_SRC}
            alt="NOVA"
            className="
              h-9
              sm:h-11
              w-auto
              object-contain
            "
          />

        </div>


        {/* ===================================
            DESKTOP NAVIGATION
        =================================== */}

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-1
            flex-wrap
            justify-center
          "
        >

          {NAV_ITEMS.map((item) => (

            <button
              key={item.id}
              type="button"
              className="
                neuron-item
                px-3
                lg:px-4
                py-2
                rounded-full
                cursor-pointer
                bg-transparent
                border-0
              "
              onClick={() =>
                navigateTo(item.id)
              }
            >

              <div className="neuron-glow" />

              <NeuronOverlay />

              <span
                className="
                  neuron-label
                  relative
                  z-10
                  text-sm
                  text-black
                  font-medium
                  whitespace-nowrap
                  tally-header-font
                "
              >
                {item.label}
              </span>

            </button>

          ))}

        </nav>


        {/* ===================================
            RIGHT SIDE
        =================================== */}

        <div
          className="
            flex
            items-center
            gap-3
            shrink-0
          "
        >

          <div className="hidden sm:block">
            {CTA}
          </div>


          {/* MOBILE MENU BUTTON */}

          <button
            className={`
              mobile-toggle
              md:hidden
              ${menuOpen ? "open" : ""}
            `}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >

            <span />
            <span />
            <span />

          </button>

        </div>

      </div>


      {/* =====================================
          MOBILE DROPDOWN
      ===================================== */}

      <div
        className={`
          mobile-panel
          md:hidden
          ${menuOpen ? "open" : ""}
        `}
      >

        <nav
          className="
            flex
            flex-col
            px-4
            py-2
          "
        >

          {NAV_ITEMS.map((item) => (

            <button
              key={item.id}
              type="button"
              className="
                py-3
                text-black
                font-medium
                text-sm
                border-b
                border-black/10
                last:border-b-0
                tally-header-font
                text-left
                bg-transparent
                border-x-0
                border-t-0
              "
              onClick={() =>
                navigateTo(item.id)
              }
            >

              {item.label}

            </button>

          ))}

        </nav>


        {/* MOBILE CTA */}

        <div
          className="
            px-4
            pb-4
            pt-1
            sm:hidden
          "
        >

          {CTA}

        </div>

      </div>

    </header>

  );

}