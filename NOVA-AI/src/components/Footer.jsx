const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700&display=swap');

.nova-footer {
  position: relative;
  display: block;
  width: 100%;
  margin: 0;
  background:
    linear-gradient(
      180deg,
      rgba(224,242,254,0.62),
      rgba(191,219,254,0.38)
    );
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border-top: 1px solid rgba(59,130,246,0.22);
  box-shadow:
    0 -12px 30px rgba(15,23,42,0.12),
    inset 0 1px 0 rgba(255,255,255,0.8);
  overflow: hidden;
}

.nova-footer::before {
  content: "";
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 240px;
  border-radius: 50%;
  background: radial-gradient(
    ellipse,
    rgba(59,130,246,0.18) 0%,
    rgba(37,99,235,0.08) 45%,
    transparent 75%
  );
  filter: blur(20px);
  pointer-events: none;
}

.footer-inner {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 55px 32px 25px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 55px;
  align-items: start;
}

.footer-brand {
  max-width: 340px;
}

.footer-logo {
  height: 48px;
  width: auto;
  object-fit: contain;
  display: block;
  margin-bottom: 20px;
}

.footer-description {
  font-family: 'Orbitron', sans-serif;
  font-size: 13px;
  line-height: 1.8;
  color: #475569;
  margin: 0;
}

.footer-heading {
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 20px;
  letter-spacing: 0.04em;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  position: relative;
  width: fit-content;
  border: none;
  background: transparent;
  padding: 0;
  font-family: 'Orbitron', sans-serif;
  font-size: 12px;
  color: #475569;
  cursor: pointer;
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.footer-link:hover {
  color: #2563eb;
  transform: translateX(4px);
}

.footer-link::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 1px;
  background: #2563eb;
  box-shadow: 0 0 8px rgba(37,99,235,0.8);
  transition: width 0.25s ease;
}

.footer-link:hover::before {
  width: 100%;
}

.footer-divider {
  width: 100%;
  height: 1px;
  margin: 45px 0 20px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(59,130,246,0.35),
    transparent
  );
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer-copy {
  font-family: 'Orbitron', sans-serif;
  font-size: 10px;
  color: #64748b;
  letter-spacing: 0.03em;
}

.footer-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Orbitron', sans-serif;
  font-size: 10px;
  color: #64748b;
}

.footer-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #2563eb;
  box-shadow:
    0 0 6px rgba(37,99,235,0.9),
    0 0 14px rgba(59,130,246,0.55);
  animation: footerPulse 1.8s ease-in-out infinite;
}

@keyframes footerPulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(0.85);
  }

  50% {
    opacity: 1;
    transform: scale(1.15);
  }
}


/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 900px) {

  .footer-grid {
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 40px;
  }

  .footer-brand {
    grid-column: 1 / -1;
    max-width: 500px;
  }

}


@media (max-width: 640px) {

  .nova-footer {
    margin-top: 0;
  }

  .footer-inner {
    padding: 42px 22px 22px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 35px 25px;
  }

  .footer-brand {
    grid-column: 1 / -1;
    max-width: 100%;
  }

  .footer-logo {
    height: 42px;
  }

  .footer-description {
    font-size: 11px;
    line-height: 1.7;
  }

  .footer-heading {
    font-size: 12px;
    margin-bottom: 16px;
  }

  .footer-link {
    font-size: 10px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

}


@media (max-width: 400px) {

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer-brand {
    grid-column: auto;
  }

}
`;


const NAV_ITEMS = [
  {
    label: "Features",
    id: "features"
  },
  {
    label: "About",
    id: "about"
  },
  {
    label: "How it works",
    id: "howitworks"
  },
  {
    label: "Statistics",
    id: "statistics"
  },
  {
    label: "What people say",
    id: "whatpeoplesay"
  },
  {
    label: "Pricing",
    id: "pricing"
  },
  {
    label: "FAQ",
    id: "faq"
  }
];


function FooterLink({ children, id }) {

  const handleClick = () => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  };


  return (

    <button
      type="button"
      className="footer-link"
      onClick={handleClick}
    >
      {children}
    </button>

  );

}


export default function Footer() {

  return (

    <footer className="nova-footer">

      <style>
        {CSS}
      </style>


      <div className="footer-inner">


        {/* =====================================
            FOOTER GRID
        ====================================== */}

        <div className="footer-grid">


          {/* ===================================
              BRAND
          =================================== */}

          <div className="footer-brand">

            <img
              src="/aiova-logo.png"
              alt="NOVA"
              className="footer-logo"
            />

            <p className="footer-description">
              Build better. Work smarter.
              <br />
              NOVA brings intelligent AI tools
              together to help you create,
              automate and work faster.
            </p>

          </div>


          {/* ===================================
              PRODUCT
          =================================== */}

          <div>

            <div className="footer-heading">
              PRODUCT
            </div>

            <div className="footer-links">

              <FooterLink id="features">
                Features
              </FooterLink>

              <FooterLink id="howitworks">
                How it works
              </FooterLink>

              <FooterLink id="pricing">
                Pricing
              </FooterLink>

              <FooterLink id="faq">
                FAQ
              </FooterLink>

            </div>

          </div>


          {/* ===================================
              COMPANY
          =================================== */}

          <div>

            <div className="footer-heading">
              COMPANY
            </div>

            <div className="footer-links">

              <FooterLink id="about">
                About
              </FooterLink>

              <FooterLink id="statistics">
                Statistics
              </FooterLink>

              <FooterLink id="whatpeoplesay">
                What people say
              </FooterLink>

            </div>

          </div>


          {/* ===================================
              NOVA AI
          =================================== */}

          <div>

            <div className="footer-heading">
              NOVA AI
            </div>

            <div className="footer-links">

              <FooterLink id="features">
                AI Tools
              </FooterLink>

              <FooterLink id="howitworks">
                Workflow
              </FooterLink>

              <FooterLink id="pricing">
                Get Started
              </FooterLink>

            </div>

          </div>


        </div>


        {/* =====================================
            DIVIDER
        ====================================== */}

        <div className="footer-divider" />


        {/* =====================================
            FOOTER BOTTOM
        ====================================== */}

        <div className="footer-bottom">


          <div className="footer-copy">
            © 2026 NOVA AI. All rights reserved.
          </div>


          <div className="footer-status">

            <span className="footer-status-dot" />

            NOVA SYSTEMS ONLINE

          </div>


        </div>


      </div>

    </footer>

  );

}