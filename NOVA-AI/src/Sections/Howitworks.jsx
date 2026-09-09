import React from "react";

const steps = [
  "Open NOVA",
  "Enter Prompt",
  "NOVA Understands",
  "AI Processing",
  "Generate Result",
  "Review Output",
  "Refine Result",
  "Final Output",
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap');


/* =====================================================
   SECTION
===================================================== */

.how-section {
  width: 100%;
  padding: 55px 30px 100px;
  box-sizing: border-box;
  overflow: hidden;
}


/* =====================================================
   HEADING
===================================================== */

.how-heading {
  margin: 0 0 35px;

  text-align: center;

  font-family: 'Orbitron', sans-serif;

  font-size: clamp(2rem, 4.5vw, 3.6rem);

  font-weight: 800;

  letter-spacing: 0.08em;

  color: #64748b;
}


/* =====================================================
   FLOW WRAPPER
===================================================== */

.flow-wrapper {
  width: 100%;
  max-width: 1400px;

  margin: 0 auto;

  position: relative;

  padding: 10px 0 45px;
}


/* =====================================================
   FLOW GRAPH
===================================================== */

.flow-graph {
  position: relative;

  width: 100%;

  height: 480px;
}


/* =====================================================
   SVG PATH
===================================================== */

.flow-path {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  overflow: visible;

  z-index: 1;
}


/* =====================================================
   BASE LINE
===================================================== */

.flow-path-line {
  fill: none;

  stroke: rgba(37, 99, 235, 0.18);

  stroke-width: 4;

  stroke-linecap: round;
}


/* =====================================================
   LINE GLOW
===================================================== */

.flow-path-glow {
  fill: none;

  stroke: rgba(37, 99, 235, 0.40);

  stroke-width: 8;

  stroke-linecap: round;

  filter: blur(5px);

  opacity: 0.45;
}


/* =====================================================
   MOVING BLUE LIGHT
===================================================== */

.flow-beam {
  fill: none;

  stroke: #60a5fa;

  stroke-width: 5;

  stroke-linecap: round;

  stroke-dasharray: 1 150;

  filter:
    drop-shadow(0 0 5px #ffffff)
    drop-shadow(0 0 12px #60a5fa)
    drop-shadow(0 0 22px #3b82f6)
    drop-shadow(0 0 40px #2563eb);

  animation:
    beamFlow 5s linear infinite;
}


@keyframes beamFlow {

  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: -1000;
  }

}


/* =====================================================
   NODES
===================================================== */

.flow-node {
  position: absolute;

  width: 145px;
  height: 145px;

  border-radius: 50%;

  display: flex;

  align-items: center;
  justify-content: center;

  text-align: center;

  padding: 20px;

  box-sizing: border-box;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.32),
      rgba(255,255,255,0.08)
    );

  backdrop-filter: blur(25px);

  -webkit-backdrop-filter: blur(25px);

  border:
    1.5px solid
    rgba(37, 99, 235, 0.55);

  box-shadow:

    0 0 30px
    rgba(37, 99, 235, 0.10),

    inset 0 0 30px
    rgba(37, 99, 235, 0.04);

  font-family: 'Orbitron', sans-serif;

  font-size: 12px;

  font-weight: 700;

  line-height: 1.5;

  color: #1e3a8a;

  z-index: 10;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}


/* =====================================================
   NODE HOVER
===================================================== */

.flow-node:hover {

  transform:
    translateY(-50%)
    scale(1.08);

  border-color: #2563eb;

  box-shadow:

    0 0 35px
    rgba(37, 99, 235, 0.30),

    0 0 70px
    rgba(37, 99, 235, 0.12),

    inset 0 0 35px
    rgba(37, 99, 235, 0.08);
}


/* =====================================================
   NODE POSITIONS
===================================================== */

.node-1 {
  left: 3%;
  top: 50%;
  transform: translateY(-50%);
}

.node-2 {
  left: 15%;
  top: 25%;
  transform: translateY(-50%);
}

.node-3 {
  left: 28%;
  top: 75%;
  transform: translateY(-50%);
}

.node-4 {
  left: 41%;
  top: 25%;
  transform: translateY(-50%);
}

.node-5 {
  left: 54%;
  top: 75%;
  transform: translateY(-50%);
}

.node-6 {
  left: 67%;
  top: 25%;
  transform: translateY(-50%);
}

.node-7 {
  left: 80%;
  top: 75%;
  transform: translateY(-50%);
}

.node-8 {
  left: 90%;
  top: 50%;

  transform:
    translate(-10%, -50%);
}


/* =====================================================
   TEST SECTION
===================================================== */

.test-section {

  width: 100%;

  max-width: 1150px;

  margin: 20px auto 0;
}


/* =====================================================
   TEST HEADING
===================================================== */

.test-heading {

  margin: 0 0 40px;

  text-align: center;

  font-family: 'Orbitron', sans-serif;

  font-size: 24px;

  font-weight: 700;

  letter-spacing: 0.06em;

  color: #64748b;
}


/* =====================================================
   TEST GRID
===================================================== */

.test-grid {

  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 25px;
}


/* =====================================================
   TEST CARD
===================================================== */

.test-card {

  padding: 25px;

  border-radius: 24px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.30),
      rgba(255,255,255,0.08)
    );

  backdrop-filter: blur(22px);

  -webkit-backdrop-filter: blur(22px);

  border:
    1px solid
    rgba(37, 99, 235, 0.25);

  box-shadow:
    0 20px 50px
    rgba(15,23,42,0.07);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}


.test-card:hover {

  transform: translateY(-6px);

  border-color:
    rgba(37,99,235,0.55);

  box-shadow:
    0 25px 60px
    rgba(37,99,235,0.13);
}


/* =====================================================
   DEMO HEADER
===================================================== */

.demo-header {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 20px;
}


.demo-title {

  margin: 0;

  font-family: 'Orbitron', sans-serif;

  font-size: 16px;

  font-weight: 700;

  color: #0f172a;
}


/* =====================================================
   NOVA STATUS
===================================================== */

.nova-status {

  width: 9px;

  height: 9px;

  border-radius: 50%;

  background: #2563eb;

  box-shadow:
    0 0 8px #60a5fa,
    0 0 18px rgba(37,99,235,0.6);
}


/* =====================================================
   DEMO BOX
===================================================== */

.demo-box {

  border:
    1px solid
    rgba(37,99,235,0.18);

  border-radius: 16px;

  padding: 17px;

  margin-bottom: 12px;

  background:
    rgba(255,255,255,0.25);
}


.demo-label {

  display: block;

  margin-bottom: 8px;

  font-size: 11px;

  font-family: 'Orbitron', sans-serif;

  font-weight: 700;

  letter-spacing: 0.05em;

  color: #64748b;
}


.demo-text {

  margin: 0;

  font-size: 13px;

  line-height: 1.65;

  color: #334155;
}


/* =====================================================
   RESPONSE
===================================================== */

.demo-response {

  border:
    1px solid
    rgba(37,99,235,0.22);

  border-radius: 16px;

  padding: 17px;

  background:
    rgba(239,246,255,0.35);
}


/* =====================================================
   CODE
===================================================== */

.demo-code {

  margin: 0;

  padding: 14px;

  border-radius: 12px;

  background:
    rgba(15,23,42,0.95);

  color: #bfdbfe;

  font-family:
    "Courier New",
    monospace;

  font-size: 12px;

  line-height: 1.6;

  overflow-x: auto;
}


/* =====================================================
   DOWNLOAD LINK
===================================================== */

.demo-download {

  display: inline-block;

  margin-top: 5px;

  color: #2563eb;

  font-size: 13px;

  font-weight: 600;

  text-decoration: none;

  border-bottom:
    1px solid
    rgba(37,99,235,0.35);

  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}


.demo-download:hover {

  color: #1d4ed8;

  border-color: #1d4ed8;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 1050px) {

  .flow-graph {
    height: 440px;
  }

  .flow-node {

    width: 115px;

    height: 115px;

    font-size: 10px;
  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 700px) {

  .how-section {

    padding:
      70px 20px
      80px;
  }


  .how-heading {

    margin-bottom:
      45px;
  }


  .flow-wrapper {

    padding:
      0 0 20px;
  }


  .flow-graph {

    height: auto;

    display: flex;

    flex-direction: column;

    align-items: center;
  }


  .flow-path {

    display: none;
  }


  .flow-node {

    position: relative;

    left: auto;

    top: auto;

    transform: none;

    width: 105px;

    height: 105px;

    min-height: 105px;

    font-size: 9px;

    margin-bottom: 55px;
  }


  .flow-node:hover {

    transform:
      scale(1.05);
  }


  .flow-node:not(:last-child)::after {

    content: "";

    position: absolute;

    top: 100%;

    left: 50%;

    width: 3px;

    height: 55px;

    transform:
      translateX(-50%);

    background:
      linear-gradient(
        180deg,
        rgba(37,99,235,0.45),
        rgba(37,99,235,0.12)
      );

    box-shadow:
      0 0 8px
      rgba(37,99,235,0.25);
  }


  .test-section {

    margin-top:
      20px;
  }


  .test-grid {

    grid-template-columns:
      1fr;
  }

}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .flow-beam {
    animation: none;
  }

}
`;


export default function HowItWorks() {

  return (

    <section className="how-section">

      <style>{CSS}</style>


      {/* =================================================
          HEADING
      ================================================= */}

      <h2 className="how-heading">
        HOW IT WORKS
      </h2>


      {/* =================================================
          FLOW GRAPH
      ================================================= */}

      <div className="flow-wrapper">

        <div className="flow-graph">

          <svg
            className="flow-path"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
          >

            {/* Base path */}

            <polyline
              className="flow-path-line"
              points="
                80,250
                180,125
                310,375
                440,125
                570,375
                700,125
                830,375
                930,250
              "
            />


            {/* Glow */}

            <polyline
              className="flow-path-glow"
              points="
                80,250
                180,125
                310,375
                440,125
                570,375
                700,125
                830,375
                930,250
              "
            />


            {/* Continuous light */}

            <polyline
              className="flow-beam"
              points="
                80,250
                180,125
                310,375
                440,125
                570,375
                700,125
                830,375
                930,250
              "
            />

          </svg>


          {/* Nodes */}

          {steps.map((step, index) => (

            <div
              key={step}
              className={
                `flow-node node-${index + 1}`
              }
            >

              {step}

            </div>

          ))}

        </div>

      </div>


      {/* =================================================
          TEST CASES
      ================================================= */}

      <div className="test-section">

        <h3 className="test-heading">
          TEST CASES
        </h3>


        <div className="test-grid">


          {/* PYTHON */}

          <div className="test-card">

            <div className="demo-header">

              <h4 className="demo-title">
                Python Code Generation
              </h4>

              <span className="nova-status" />

            </div>


            <div className="demo-box">

              <span className="demo-label">
                PROMPT
              </span>

              <p className="demo-text">
                Write a Python function to find
                the largest number in a list.
              </p>

            </div>


            <div className="demo-response">

              <span className="demo-label">
                NOVA RESPONSE
              </span>

              <pre className="demo-code">
{`def find_largest(numbers):
    if not numbers:
        return None

    return max(numbers)

numbers = [12, 45, 7, 89, 23]

print(find_largest(numbers))`}
              </pre>

            </div>

          </div>


          {/* IMAGE */}

          <div className="test-card">

            <div className="demo-header">

              <h4 className="demo-title">
                Image Generation
              </h4>

              <span className="nova-status" />

            </div>


            <div className="demo-box">

              <span className="demo-label">
                PROMPT
              </span>

              <p className="demo-text">
                Create a futuristic AI laboratory
                with glowing blue holographic screens.
              </p>

            </div>


            <div className="demo-response">

              <span className="demo-label">
                NOVA RESPONSE
              </span>

              <p className="demo-text">
                Image generated successfully
                based on your prompt.
              </p>

              <a
                href="/downloads/nova-ai-lab.png"
                download
                className="demo-download"
              >
                Download Generated Image
              </a>

            </div>

          </div>


          {/* VIDEO */}

          <div className="test-card">

            <div className="demo-header">

              <h4 className="demo-title">
                Video Generation
              </h4>

              <span className="nova-status" />

            </div>


            <div className="demo-box">

              <span className="demo-label">
                PROMPT
              </span>

              <p className="demo-text">
                Create a cinematic video showing
                a futuristic city at night.
              </p>

            </div>


            <div className="demo-response">

              <span className="demo-label">
                NOVA RESPONSE
              </span>

              <p className="demo-text">
                Video generated successfully
                based on your prompt.
              </p>

              <a
                href="/downloads/nova-futuristic-city.mp4"
                download
                className="demo-download"
              >
                Download Generated Video
              </a>

            </div>

          </div>


          {/* CONTENT */}

          <div className="test-card">

            <div className="demo-header">

              <h4 className="demo-title">
                Content Generation
              </h4>

              <span className="nova-status" />

            </div>


            <div className="demo-box">

              <span className="demo-label">
                PROMPT
              </span>

              <p className="demo-text">
                Write a short introduction for
                an AI-powered productivity platform.
              </p>

            </div>


            <div className="demo-response">

              <span className="demo-label">
                NOVA RESPONSE
              </span>

              <p className="demo-text">
                NOVA is an intelligent productivity
                platform designed to help you create,
                analyze, automate, and accomplish more
                with artificial intelligence.
              </p>

            </div>

          </div>


        </div>

      </div>

    </section>

  );
}