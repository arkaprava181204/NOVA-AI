import React, { useState } from "react";

const faqs = [
  {
    question: "What is NOVA AI?",
    answer:
      "NOVA is an intelligent AI platform designed to help you code, create content, generate visuals, analyze information, and automate everyday tasks from one place.",
  },
  {
    question: "What can I use NOVA for?",
    answer:
      "You can use NOVA for coding, research, writing, brainstorming, image generation, video creation, problem solving, productivity, and many other AI-powered tasks.",
  },
  {
    question: "Does NOVA support coding?",
    answer:
      "Yes. NOVA can generate code, explain programming concepts, debug errors, improve existing code, and help you build applications using different programming languages.",
  },
  {
    question: "Can NOVA generate images and videos?",
    answer:
      "Yes. NOVA can help transform your ideas into visual content, including AI-generated images and videos.",
  },
  {
    question: "What is included in the Pro plan?",
    answer:
      "The Pro plan provides higher usage limits, advanced AI assistance, faster responses, advanced coding capabilities, and image and video generation features.",
  },
  {
    question: "What is the difference between Pro and Elite?",
    answer:
      "Elite is designed for professionals and high-volume users. It provides higher usage limits, advanced AI models, priority generation, maximum response speed, premium features, and priority support.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. You can start with the Free plan and upgrade to Pro or Elite whenever you need additional capabilities and higher usage limits.",
  },
  {
    question: "Is NOVA suitable for businesses?",
    answer:
      "Yes. NOVA can assist businesses and teams with development, content creation, research, automation, productivity, and other AI-powered workflows.",
  },
];


const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap');


/* =====================================================
   FAQ SECTION
===================================================== */

.faq-section {
  width: 100%;

  padding:
    80px 30px 110px;

  box-sizing:
    border-box;

  overflow:
    hidden;
}


/* =====================================================
   HEADING
===================================================== */

.faq-heading {
  margin:
    0 0 15px;

  text-align:
    center;

  font-family:
    'Orbitron',
    sans-serif;

  font-size:
    clamp(2rem, 4.5vw, 3.6rem);

  font-weight:
    800;

  letter-spacing:
    0.08em;

  color:
    #64748b;
}


.faq-subheading {
  max-width:
    620px;

  margin:
    0 auto 55px;

  text-align:
    center;

  font-size:
    15px;

  line-height:
    1.7;

  color:
    #64748b;
}


/* =====================================================
   FAQ CONTAINER
===================================================== */

.faq-container {
  width:
    100%;

  max-width:
    950px;

  margin:
    0 auto;

  display:
    flex;

  flex-direction:
    column;

  gap:
    14px;
}


/* =====================================================
   FAQ ITEM
===================================================== */

.faq-item {
  position:
    relative;

  border:
    1px solid
    rgba(37,99,235,0.22);

  border-radius:
    18px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.42),
      rgba(255,255,255,0.10)
    );

  backdrop-filter:
    blur(25px);

  -webkit-backdrop-filter:
    blur(25px);

  overflow:
    hidden;

  box-shadow:
    0 15px 45px
    rgba(15,23,42,0.06);

  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}


/* =====================================================
   OPEN ITEM
===================================================== */

.faq-item.open {
  border-color:
    rgba(37,99,235,0.45);

  box-shadow:
    0 18px 50px
    rgba(37,99,235,0.09);
}


/* =====================================================
   QUESTION BUTTON
===================================================== */

.faq-question {
  width:
    100%;

  min-height:
    75px;

  padding:
    20px 24px;

  border:
    none;

  background:
    transparent;

  display:
    flex;

  align-items:
    center;

  justify-content:
    space-between;

  gap:
    20px;

  text-align:
    left;

  cursor:
    pointer;
}


/* =====================================================
   QUESTION TEXT
===================================================== */

.faq-question-text {
  font-family:
    'Orbitron',
    sans-serif;

  font-size:
    clamp(0.85rem, 1.7vw, 1rem);

  font-weight:
    700;

  line-height:
    1.5;

  letter-spacing:
    0.015em;

  color:
    #334155;

  transition:
    color 0.25s ease;
}


.faq-item.open
.faq-question-text {
  color:
    #2563eb;
}


/* =====================================================
   PLUS BUTTON
===================================================== */

.faq-plus {
  flex-shrink:
    0;

  width:
    36px;

  height:
    36px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  border:
    1px solid
    rgba(37,99,235,0.35);

  border-radius:
    50%;

  background:
    rgba(255,255,255,0.25);

  color:
    #2563eb;

  font-size:
    22px;

  font-weight:
    400;

  line-height:
    1;

  transition:
    transform 0.35s ease,
    background 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease;
}


/* =====================================================
   PLUS -> X
===================================================== */

.faq-item.open
.faq-plus {
  transform:
    rotate(45deg);

  background:
    rgba(37,99,235,0.08);

  color:
    #2563eb;

  box-shadow:
    0 0 15px
    rgba(37,99,235,0.12);
}


/* =====================================================
   ANSWER WRAPPER
===================================================== */

.faq-answer-wrapper {
  display:
    grid;

  grid-template-rows:
    0fr;

  transition:
    grid-template-rows 0.4s ease;
}


.faq-item.open
.faq-answer-wrapper {
  grid-template-rows:
    1fr;
}


/* =====================================================
   ANSWER
===================================================== */

.faq-answer-inner {
  overflow:
    hidden;
}


.faq-answer {
  margin:
    0;

  padding:
    0 24px 0;

  font-size:
    14px;

  line-height:
    1.8;

  color:
    #64748b;

  opacity:
    0;

  transform:
    translateY(-8px);

  transition:
    opacity 0.3s ease,
    transform 0.4s ease,
    padding 0.4s ease;
}


.faq-item.open
.faq-answer {
  padding:
    0 24px 24px;

  opacity:
    1;

  transform:
    translateY(0);
}


/* =====================================================
   BLUE LINE
===================================================== */

.faq-item.open::before {
  content:
    "";

  position:
    absolute;

  left:
    0;

  top:
    0;

  width:
    3px;

  height:
    100%;

  background:
    #2563eb;

  box-shadow:
    0 0 15px
    rgba(37,99,235,0.45);
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 650px) {

  .faq-section {
    padding:
      60px 20px 80px;
  }


  .faq-heading {
    font-size:
      2rem;

    margin-bottom:
      12px;
  }


  .faq-subheading {
    margin-bottom:
      40px;

    font-size:
      13px;
  }


  .faq-container {
    gap:
      10px;
  }


  .faq-question {
    min-height:
      68px;

    padding:
      18px;
  }


  .faq-question-text {
    font-size:
      12px;
  }


  .faq-plus {
    width:
      32px;

    height:
      32px;

    font-size:
      19px;
  }


  .faq-answer {
    padding:
      0 18px;

    font-size:
      13px;

    line-height:
      1.7;
  }


  .faq-item.open
  .faq-answer {
    padding:
      0 18px 20px;
  }

}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .faq-answer-wrapper,
  .faq-answer,
  .faq-plus,
  .faq-item {
    transition:
      none;
  }

}
`;


export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);


  const toggleFAQ = (index) => {

    setOpenIndex(
      openIndex === index
        ? null
        : index
    );

  };


  return (

    <section className="faq-section">

      <style>{CSS}</style>


      {/* =================================================
          HEADING
      ================================================= */}

      <h2 className="faq-heading">
        FAQ
      </h2>


      <p className="faq-subheading">
        Everything you need to know about NOVA.
      </p>


      {/* =================================================
          QUESTIONS
      ================================================= */}

      <div className="faq-container">

        {faqs.map((faq, index) => {

          const isOpen =
            openIndex === index;


          return (

            <div
              key={faq.question}
              className={
                isOpen
                  ? "faq-item open"
                  : "faq-item"
              }
            >

              <button
                className="faq-question"
                onClick={() =>
                  toggleFAQ(index)
                }
                aria-expanded={isOpen}
              >

                <span className="faq-question-text">
                  {faq.question}
                </span>


                <span className="faq-plus">
                  +
                </span>

              </button>


              <div className="faq-answer-wrapper">

                <div className="faq-answer-inner">

                  <p className="faq-answer">
                    {faq.answer}
                  </p>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </section>

  );

}