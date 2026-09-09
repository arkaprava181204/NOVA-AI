import React from "react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap');


/* =====================================================
   ABOUT SECTION
===================================================== */

.about-section {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 100px 40px;

  box-sizing: border-box;
}


/* =====================================================
   HEADING
===================================================== */

.about-heading {
  margin: 0 0 80px;

  text-align: center;

  font-family: 'Orbitron', sans-serif;

  font-size: clamp(2rem, 4vw, 3.5rem);

  font-weight: 800;

  letter-spacing: 0.08em;

  color: #64748b;
}


/* =====================================================
   ABOUT ROW
===================================================== */

.about-row {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 70px;

  margin-bottom: 100px;

  width: 100%;
}


/* =====================================================
   ZIGZAG
===================================================== */

/* Image on RIGHT */
.about-row:nth-child(odd) {
  flex-direction: row;
}


/* Image on LEFT */
.about-row:nth-child(even) {
  flex-direction: row-reverse;
}


/* =====================================================
   TEXT
===================================================== */

.about-text {
  flex: 1;

  max-width: 520px;
}


.about-text h3 {
  margin: 0 0 20px;

  font-family: 'Orbitron', sans-serif;

  font-size: 24px;

  font-weight: 700;

  color: #0f172a;

  letter-spacing: 0.02em;
}


.about-text p {
  margin: 0;

  font-size: 17px;

  line-height: 1.9;

  color: #475569;
}


/* =====================================================
   IMAGE CONTAINER
===================================================== */

.about-image-wrapper {
  flex: 1;

  max-width: 500px;

  position: relative;
}


/* =====================================================
   IMAGE
===================================================== */

.about-image {
  display: block;

  width: 100%;

  height: 320px;

  object-fit: cover;

  border-radius: 28px;

  border: 2px solid rgba(37, 99, 235, 0.65);

  box-sizing: border-box;

  box-shadow:
    0 0 20px rgba(37, 99, 235, 0.10),
    0 20px 50px rgba(15, 23, 42, 0.10);

  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease,
    border-color 0.4s ease;
}


.about-image:hover {
  transform: scale(1.025);

  border-color: #2563eb;

  box-shadow:
    0 0 30px rgba(37, 99, 235, 0.25),
    0 25px 60px rgba(15, 23, 42, 0.14);
}


/* =====================================================
   IMAGE BLUE GLOW
===================================================== */

.about-image-wrapper::before {
  content: "";

  position: absolute;

  inset: -8px;

  border-radius: 34px;

  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.25),
      transparent 45%,
      rgba(59, 130, 246, 0.15)
    );

  filter: blur(18px);

  z-index: -1;

  pointer-events: none;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 850px) {

  .about-section {
    padding: 80px 30px;
  }

  .about-row {
    gap: 40px;

    margin-bottom: 80px;
  }

  .about-text h3 {
    font-size: 21px;
  }

  .about-text p {
    font-size: 16px;
  }

  .about-image {
    height: 270px;
  }
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 700px) {

  .about-section {
    padding: 70px 22px;
  }

  .about-heading {
    margin-bottom: 55px;
  }

  .about-row,
  .about-row:nth-child(odd),
  .about-row:nth-child(even) {

    flex-direction: column;

    gap: 30px;

    margin-bottom: 70px;

    align-items: stretch;
  }

  .about-text {
    max-width: 100%;
  }

  .about-image-wrapper {
    max-width: 100%;

    width: 100%;
  }

  .about-image {
    width: 100%;

    height: 240px;

    border-radius: 22px;
  }

  /*
     On mobile, keep the text first
     and image underneath.
  */

  .about-row:nth-child(even) .about-text {
    order: 1;
  }

  .about-row:nth-child(even) .about-image-wrapper {
    order: 2;
  }
}


/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 430px) {

  .about-section {
    padding: 60px 18px;
  }

  .about-heading {
    font-size: 1.8rem;

    margin-bottom: 45px;
  }

  .about-text h3 {
    font-size: 19px;
  }

  .about-text p {
    font-size: 14px;

    line-height: 1.75;
  }

  .about-image {
    height: 210px;

    border-radius: 20px;
  }
}
`;


export default function About() {

  return (

    <section className="about-section">

      <style>{CSS}</style>


      {/* =================================================
          HEADING
      ================================================= */}

      <h2 className="about-heading">
        ABOUT NOVA
      </h2>


      {/* =================================================
          ROW 1
          TEXT LEFT / IMAGE RIGHT
      ================================================= */}

      <div className="about-row">

        <div className="about-text">

          <h3>
            Intelligence That Works With You
          </h3>

          <p>
            NOVA is an AI-powered platform designed
            to make everyday work faster, smarter,
            and more efficient. From generating ideas
            to solving complex problems, NOVA brings
            powerful artificial intelligence into one
            simple and intuitive experience.
          </p>

        </div>


        <div className="about-image-wrapper">

          <img
            src="/About-2.jpeg"
            alt="NOVA AI"
            className="about-image"
          />

        </div>

      </div>


      {/* =================================================
          ROW 2
          IMAGE LEFT / TEXT RIGHT
      ================================================= */}

      <div className="about-row">

        <div className="about-text">

          <h3>
            Create Without Limits
          </h3>

          <p>
            Whether you are writing content, creating
            images, generating code, analyzing data,
            or exploring new ideas, NOVA helps turn
            your imagination into reality. Powerful
            AI capabilities work together to help you
            create more with less effort.
          </p>

        </div>


        <div className="about-image-wrapper">

          <img
            src="/About-1.jpeg"
            alt="NOVA creative AI"
            className="about-image"
          />

        </div>

      </div>


      {/* =================================================
          ROW 3
          TEXT LEFT / IMAGE RIGHT
      ================================================= */}

      <div className="about-row">

        <div className="about-text">

          <h3>
            Built For The Future
          </h3>

          <p>
            NOVA is built around the idea that
            technology should enhance human creativity,
            not replace it. By combining intelligent
            automation with a clean and intuitive
            experience, NOVA helps you work smarter
            and focus on what matters most.
          </p>

        </div>


        <div className="about-image-wrapper">

          <img
            src="/About-3.jpeg"
            alt="Future of NOVA AI"
            className="about-image"
          />

        </div>

      </div>

    </section>

  );
}