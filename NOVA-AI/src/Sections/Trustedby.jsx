const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700&display=swap');

.trusted-section {
  position: relative;
  z-index: 1;
  padding: 56px 0;
}

.trusted-label {
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: #64748b;
  margin-bottom: 32px;
  text-transform: uppercase;
}

.trusted-track-wrap {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%);
}

.trusted-track {
  display: flex;
  align-items: center;
  width: max-content;
  animation: trustedSlide 26s linear infinite;
}

.trusted-item {
  display: inline-flex;
  align-items: center;
  padding: 0 clamp(24px, 4vw, 48px);
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  font-size: clamp(1.05rem, 2vw, 1.4rem);
  letter-spacing: 0.04em;
  color: #475569;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
}

@keyframes trustedSlide {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .trusted-track { animation-play-state: paused; }
}
`;

const COMPANIES = [
  "NEXORA",
  "QUANTIX",
  "VERTEXA",
  "SYNTHRA",
  "NOVACORE",
  "ORBITRA",
  "LUMENIQ",
  "ZENTHIQ",
];

export default function TrustedBy() {
  const items = [...COMPANIES, ...COMPANIES];

  return (
    <section className="trusted-section">
      <style>{CSS}</style>
      <p className="trusted-label">Trusted by teams</p>
      <div className="trusted-track-wrap">
        <div className="trusted-track">
          {items.map((name, i) => (
            <span className="trusted-item" key={`${name}-${i}`}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}