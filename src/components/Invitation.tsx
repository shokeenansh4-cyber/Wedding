"use client";

export default function Invitation() {
  return (
    <section className="invitation-section" data-testid="invitation-section">
      <div className="invitation-mandala invitation-mandala-1" />
      <div className="invitation-mandala invitation-mandala-2" />

      <div className="invitation-content">
        <div className="invitation-ornament" data-reveal>
          ❧
        </div>

        <p className="invitation-kicker" data-reveal style={{ ["--d" as string]: "0.05s" }}>
          WITH JOY IN OUR HEARTS
        </p>

        <h2 className="invitation-title" data-reveal style={{ ["--d" as string]: "0.15s" }}>
          Rishabh
          <span>&amp;</span>
          Ritul
        </h2>

        <div className="invitation-divider" data-reveal style={{ ["--d" as string]: "0.25s" }}>
          <span />
          <b>❧</b>
          <span />
        </div>

        <div className="invitation-message" data-reveal style={{ ["--d" as string]: "0.3s" }}>
          <p>Together with their families,</p>
          <p>invite you to join them as they</p>
          <p className="invitation-highlight">
            celebrate the beginning of
            <br />
            their beautiful journey together.
          </p>
        </div>

        <div className="invitation-families" data-reveal style={{ ["--d" as string]: "0.4s" }}>
          <p className="family-label">REQUEST THE HONOUR OF YOUR PRESENCE</p>
        </div>

        <div className="invitation-date-card" data-reveal="scale" style={{ ["--d" as string]: "0.5s" }}>
          <span className="date-day">FRIDAY</span>
          <span className="date-number">04</span>
          <span className="date-month">DECEMBER 2026</span>
          <span className="date-time">7:00 PM</span>
        </div>

        <div className="invitation-bottom-ornament" data-reveal>
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </div>
      </div>
    </section>
  );
}
