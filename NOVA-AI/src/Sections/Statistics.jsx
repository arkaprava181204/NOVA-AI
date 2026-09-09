import React, { useEffect, useRef, useState } from "react";

const statistics = [
  {
    value: 10000,
    label: "Active Users",
    description:
      "People using NOVA to create and work smarter.",
    type: "users",
  },
  {
    value: 1.2,
    label: "Avg. Response Time",
    description:
      "Fast responses designed for a seamless workflow.",
    type: "response",
  },
  {
    value: 250,
    label: "Companies Using NOVA",
    description:
      "Businesses integrating NOVA into their workflows.",
    type: "companies",
  },
  {
    value: 4.8,
    label: "User Rating",
    description:
      "Highly rated by the NOVA community.",
    type: "rating",
  },
];


const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap');


/* =====================================================
   STATISTICS SECTION
===================================================== */

.stats-section {
  width: 100%;

  padding: 80px 30px 100px;

  box-sizing: border-box;

  overflow: hidden;
}


/* =====================================================
   GRID
===================================================== */

.stats-grid {
  width: 100%;

  max-width: 1250px;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 24px;
}


/* =====================================================
   CARD
===================================================== */

.stat-card {

  position: relative;

  min-height: 210px;

  padding: 32px 25px;

  box-sizing: border-box;

  display: flex;

  flex-direction: column;

  justify-content: center;

  text-align: center;

  border-radius: 25px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.35),
      rgba(255,255,255,0.08)
    );

  backdrop-filter: blur(24px);

  -webkit-backdrop-filter: blur(24px);

  border:
    1px solid
    rgba(37,99,235,0.30);

  box-shadow:

    0 15px 45px
    rgba(15,23,42,0.07),

    inset 0 0 25px
    rgba(37,99,235,0.025);

  overflow: hidden;

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}


/* =====================================================
   INNER BLUE GLOW
===================================================== */

.stat-card::before {

  content: "";

  position: absolute;

  width: 180px;

  height: 180px;

  top: -90px;

  left: 50%;

  transform:
    translateX(-50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(37,99,235,0.15),
      transparent 70%
    );

  pointer-events: none;
}


/* =====================================================
   BOTTOM BLUE LIGHT
===================================================== */

.stat-card::after {

  content: "";

  position: absolute;

  left: 15%;

  right: 15%;

  bottom: 0;

  height: 2px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #60a5fa,
      #2563eb,
      #60a5fa,
      transparent
    );

  box-shadow:
    0 0 12px
    rgba(37,99,235,0.7),

    0 0 25px
    rgba(37,99,235,0.35);

  opacity: 0.7;
}


/* =====================================================
   HOVER
===================================================== */

.stat-card:hover {

  transform:
    translateY(-8px);

  border-color:
    rgba(37,99,235,0.65);

  box-shadow:

    0 20px 55px
    rgba(37,99,235,0.12),

    0 0 35px
    rgba(37,99,235,0.08),

    inset 0 0 30px
    rgba(37,99,235,0.05);
}


/* =====================================================
   NUMBER
===================================================== */

.stat-value {

  position: relative;

  z-index: 2;

  margin: 0;

  font-family:
    'Orbitron',
    sans-serif;

  font-size:
    clamp(2rem, 3.2vw, 3rem);

  font-weight: 800;

  letter-spacing: 0.03em;

  color: #2563eb;

  text-shadow:
    0 0 15px
    rgba(37,99,235,0.18);

  min-height: 1.2em;
}


/* =====================================================
   LABEL
===================================================== */

.stat-label {

  position: relative;

  z-index: 2;

  margin:
    12px 0 8px;

  font-family:
    'Orbitron',
    sans-serif;

  font-size: 14px;

  font-weight: 700;

  letter-spacing: 0.04em;

  color: #334155;
}


/* =====================================================
   DESCRIPTION
===================================================== */

.stat-description {

  position: relative;

  z-index: 2;

  margin: 0;

  font-size: 12px;

  line-height: 1.6;

  color: #64748b;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 1000px) {

  .stats-grid {

    grid-template-columns:
      repeat(2, 1fr);

    max-width: 750px;
  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 550px) {

  .stats-section {

    padding:
      60px 20px 80px;
  }


  .stats-grid {

    grid-template-columns:
      1fr;

    gap: 18px;
  }


  .stat-card {

    min-height: 190px;

    padding:
      28px 22px;
  }


  .stat-value {

    font-size: 2.3rem;
  }

}
`;


/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function Statistics() {

  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);


  /* =====================================================
     DETECT SECTION VISIBILITY
  ===================================================== */

  useEffect(() => {

    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            setVisible(true);

            observer.disconnect();

          }

        },
        {
          threshold: 0.25,
        }
      );


    if (sectionRef.current) {

      observer.observe(
        sectionRef.current
      );

    }


    return () => {

      observer.disconnect();

    };

  }, []);


  return (

    <section
      ref={sectionRef}
      className="stats-section"
    >

      <style>{CSS}</style>


      <div className="stats-grid">

        {statistics.map((stat) => (

          <StatCard
            key={stat.label}
            stat={stat}
            start={visible}
          />

        ))}

      </div>

    </section>

  );

}


/* =====================================================
   STAT CARD
===================================================== */

function StatCard({
  stat,
  start
}) {

  const [count, setCount] =
    useState(0);


  /* =====================================================
     COUNTING ANIMATION
  ===================================================== */

  useEffect(() => {

    if (!start) return;


    const duration = 1800;

    const startTime =
      performance.now();


    const animate = (currentTime) => {

      const elapsed =
        currentTime - startTime;


      const progress =
        Math.min(
          elapsed / duration,
          1
        );


      /*
       * Ease-out animation
       */

      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        );


      setCount(
        stat.value * eased
      );


      if (progress < 1) {

        requestAnimationFrame(
          animate
        );

      }

    };


    requestAnimationFrame(
      animate
    );


  }, [start, stat.value]);


  /* =====================================================
     FORMAT DISPLAY VALUE
  ===================================================== */

  const getDisplayValue = () => {

    /* -----------------------------
       USERS
       0 → 10K+
    ----------------------------- */

    if (stat.type === "users") {

      if (count >= 10000) {

        return "10K+";

      }

      if (count >= 1000) {

        return `${Math.floor(
          count / 1000
        )}K`;

      }

      return Math.floor(count);

    }


    /* -----------------------------
       RESPONSE TIME
       0 → 1.2s
    ----------------------------- */

    if (stat.type === "response") {

      return `${count.toFixed(1)}s`;

    }


    /* -----------------------------
       COMPANIES
       0 → 250+
    ----------------------------- */

    if (stat.type === "companies") {

      if (count >= 250) {

        return "250+";

      }

      return Math.floor(count);

    }


    /* -----------------------------
       RATING
       0 → 4.8/5
    ----------------------------- */

    if (stat.type === "rating") {

      return `${count.toFixed(1)}/5`;

    }


    return Math.floor(count);

  };


  return (

    <div className="stat-card">

      <h2 className="stat-value">

        {getDisplayValue()}

      </h2>


      <h3 className="stat-label">

        {stat.label}

      </h3>


      <p className="stat-description">

        {stat.description}

      </p>

    </div>

  );

}