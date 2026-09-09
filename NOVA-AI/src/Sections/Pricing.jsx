import React from "react";

const plans = [
  {
    name: "FREE",
    price: "$0",
    period: "/month",
    description: "For exploring what NOVA can do.",
    features: [
      "Basic AI assistance",
      "Limited conversations",
      "Basic code generation",
      "Limited image generation",
      "Standard response speed",
    ],
  },

  {
    name: "PRO",
    price: "$10",
    period: "/month",
    description: "For creators, developers, and everyday users.",
    features: [
      "Everything in Free",
      "Unlimited AI conversations",
      "Advanced code generation",
      "Image and video generation",
      "Faster response times",
      "Priority AI processing",
    ],
    popular: true,
  },

  {
    name: "ELITE",
    price: "$30",
    period: "/month",
    description: "For professionals and high-volume workflows.",
    features: [
      "Everything in Pro",
      "Highest AI usage limits",
      "Advanced AI models",
      "Priority image and video generation",
      "Maximum response speed",
      "Premium AI features",
      "Dedicated priority support",
    ],
  },
];


const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap');


/* =====================================================
   SECTION
===================================================== */

.pricing-section {
  width: 100%;
  padding: 80px 30px 110px;
  box-sizing: border-box;
  overflow: hidden;
}


/* =====================================================
   HEADING
===================================================== */

.pricing-heading {
  margin: 0 0 15px;

  text-align: center;

  font-family: 'Orbitron', sans-serif;

  font-size: clamp(2rem, 4.5vw, 3.6rem);

  font-weight: 800;

  letter-spacing: 0.08em;

  color: #64748b;
}


.pricing-subheading {
  margin: 0 auto 55px;

  max-width: 600px;

  text-align: center;

  font-size: 15px;

  line-height: 1.7;

  color: #64748b;
}


/* =====================================================
   GRID
===================================================== */

.pricing-grid {
  width: 100%;

  max-width: 1200px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 25px;

  align-items: stretch;
}


/* =====================================================
   CARD
===================================================== */

.pricing-card {
  position: relative;

  min-height: 530px;

  padding: 38px 30px;

  box-sizing: border-box;

  display: flex;

  flex-direction: column;

  border-radius: 28px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.42),
      rgba(255,255,255,0.10)
    );

  backdrop-filter: blur(25px);

  -webkit-backdrop-filter: blur(25px);

  border: 1px solid rgba(37,99,235,0.25);

  box-shadow:
    0 20px 60px rgba(15,23,42,0.08),
    inset 0 0 35px rgba(37,99,235,0.025);

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}


/* =====================================================
   SOFT BLUE GLOW
===================================================== */

.pricing-card::before {
  content: "";

  position: absolute;

  width: 230px;
  height: 230px;

  top: -120px;
  left: 50%;

  transform: translateX(-50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(37,99,235,0.12),
      transparent 70%
    );

  pointer-events: none;
}


/* =====================================================
   CARD HOVER
===================================================== */

.pricing-card:hover {
  transform: translateY(-10px);

  border-color: rgba(37,99,235,0.55);

  box-shadow:
    0 25px 70px rgba(37,99,235,0.12),
    0 0 35px rgba(37,99,235,0.06),
    inset 0 0 35px rgba(37,99,235,0.04);
}


/* =====================================================
   PRO CARD
===================================================== */

.pricing-card.popular {
  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.42),
      rgba(255,255,255,0.10)
    );

  border-color:
    rgba(37,99,235,0.50);

  box-shadow:
    0 20px 60px rgba(15,23,42,0.08),
    0 0 25px rgba(37,99,235,0.05),
    inset 0 0 35px rgba(37,99,235,0.025);
}


.pricing-card.popular:hover {
  border-color:
    rgba(37,99,235,0.75);

  box-shadow:
    0 25px 75px rgba(37,99,235,0.15),
    0 0 40px rgba(37,99,235,0.10),
    inset 0 0 35px rgba(37,99,235,0.05);
}


/* =====================================================
   POPULAR BADGE
===================================================== */

.pricing-popular {
  position: absolute;

  top: 18px;
  right: 20px;

  padding: 6px 12px;

  border-radius: 999px;

  background: rgba(37,99,235,0.10);

  border: 1px solid rgba(37,99,235,0.30);

  font-family: 'Orbitron', sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 0.08em;

  color: #2563eb;
}


/* =====================================================
   PLAN NAME
===================================================== */

.pricing-plan {
  position: relative;

  z-index: 2;

  margin: 0 0 18px;

  font-family: 'Orbitron', sans-serif;

  font-size: 18px;

  font-weight: 800;

  letter-spacing: 0.08em;

  color: #334155;
}


/* =====================================================
   PRICE
===================================================== */

.pricing-price {
  position: relative;

  z-index: 2;

  margin: 0;

  font-family: 'Orbitron', sans-serif;

  font-size: clamp(2.5rem, 4vw, 3.5rem);

  font-weight: 800;

  color: #2563eb;

  line-height: 1;
}


.pricing-period {
  font-family: Arial, sans-serif;

  font-size: 13px;

  font-weight: 500;

  color: #64748b;

  letter-spacing: 0;
}


/* =====================================================
   DESCRIPTION
===================================================== */

.pricing-description {
  position: relative;

  z-index: 2;

  min-height: 48px;

  margin: 20px 0 25px;

  font-size: 13px;

  line-height: 1.7;

  color: #64748b;
}


/* =====================================================
   DIVIDER
===================================================== */

.pricing-divider {
  width: 100%;

  height: 1px;

  margin-bottom: 25px;

  background:
    rgba(37,99,235,0.12);
}


/* =====================================================
   FEATURES
===================================================== */

.pricing-features {
  position: relative;

  z-index: 2;

  margin: 0;

  padding: 0;

  list-style: none;

  display: flex;

  flex-direction: column;

  gap: 14px;

  flex: 1;
}


.pricing-feature {
  display: flex;

  align-items: flex-start;

  gap: 10px;

  font-size: 13px;

  line-height: 1.5;

  color: #475569;
}


/* =====================================================
   CHECK
===================================================== */

.pricing-check {
  flex-shrink: 0;

  width: 18px;
  height: 18px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    rgba(37,99,235,0.10);

  color: #2563eb;

  font-size: 11px;

  font-weight: 800;
}


/* =====================================================
   GET STARTED BUTTON
===================================================== */

.pricing-button {
  position: relative;

  z-index: 2;

  width: 100%;

  margin-top: 30px;

  padding: 14px 20px;

  border:
    1px solid
    rgba(37,99,235,0.45);

  border-radius: 9999px;

  /*
     IMPORTANT:
     All buttons are transparent by default.
  */

  background: transparent;

  color: #2563eb;

  font-size: 13px;

  font-weight: 700;

  letter-spacing: 0.05em;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease;
}


/* =====================================================
   ALL BUTTONS HOVER
===================================================== */

.pricing-button:hover {
  transform: translateY(-2px);

  background: #2563eb;

  color: #ffffff;

  border-color: #2563eb;

  box-shadow:
    0 8px 25px
    rgba(37,99,235,0.25);
}


/* =====================================================
   PRO BUTTON
   SAME DEFAULT APPEARANCE
===================================================== */

.pricing-card.popular .pricing-button {
  background: transparent;

  color: #2563eb;

  border:
    1px solid
    rgba(37,99,235,0.45);
}


/* =====================================================
   PRO BUTTON HOVER
===================================================== */

.pricing-card.popular .pricing-button:hover {
  background: #2563eb;

  color: #ffffff;

  border-color: #2563eb;

  box-shadow:
    0 8px 25px
    rgba(37,99,235,0.25);
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 950px) {

  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);

    max-width: 750px;
  }


  .pricing-card:last-child {
    grid-column: 1 / -1;

    max-width: 360px;

    width: 100%;

    justify-self: center;
  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 650px) {

  .pricing-section {
    padding:
      60px 20px 80px;
  }


  .pricing-heading {
    margin-bottom: 12px;

    font-size: 2rem;
  }


  .pricing-subheading {
    margin-bottom: 40px;

    font-size: 13px;
  }


  .pricing-grid {
    grid-template-columns: 1fr;

    gap: 20px;
  }


  .pricing-card {
    min-height: 500px;

    padding:
      32px 25px;
  }


  .pricing-card:last-child {
    grid-column: auto;

    max-width: none;
  }

}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .pricing-card,
  .pricing-button {
    transition: none;
  }

}
`;


export default function Pricing() {

  const handleGetStarted = (plan) => {
    console.log(`Selected plan: ${plan}`);
  };


  return (

    <section className="pricing-section">

      <style>{CSS}</style>


      {/* =================================================
          HEADING
      ================================================= */}

      <h2 className="pricing-heading">
        PRICING
      </h2>


      <p className="pricing-subheading">
        Choose the NOVA plan that fits
        the way you work.
      </p>


      {/* =================================================
          CARDS
      ================================================= */}

      <div className="pricing-grid">

        {plans.map((plan) => (

          <div
            key={plan.name}
            className={
              plan.popular
                ? "pricing-card popular"
                : "pricing-card"
            }
          >

            {plan.popular && (

              <div className="pricing-popular">
                MOST POPULAR
              </div>

            )}


            <h3 className="pricing-plan">
              {plan.name}
            </h3>


            <h2 className="pricing-price">

              {plan.price}

              <span className="pricing-period">
                {plan.period}
              </span>

            </h2>


            <p className="pricing-description">
              {plan.description}
            </p>


            <div className="pricing-divider" />


            <ul className="pricing-features">

              {plan.features.map((feature) => (

                <li
                  key={feature}
                  className="pricing-feature"
                >

                  <span className="pricing-check">
                    ✓
                  </span>

                  <span>
                    {feature}
                  </span>

                </li>

              ))}

            </ul>


            <button
              className="pricing-button"
              onClick={() =>
                handleGetStarted(plan.name)
              }
            >
              GET STARTED
            </button>

          </div>

        ))}

      </div>

    </section>

  );
}