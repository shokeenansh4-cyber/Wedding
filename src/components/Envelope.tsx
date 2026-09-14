"use client";

import { useState } from "react";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => onOpen(), 1800);
  };

  return (
    <main className={`envelope-screen ${isOpening ? "is-opening" : ""}`}>
      <div className="mandala mandala-1" />
      <div className="mandala mandala-2" />
      <div className="mandala mandala-3" />
      <div className="mandala mandala-4" />

      <div className="top-decoration">
        <span>•</span>
        <span>•</span>
        <span>•</span>
        <div className="lotus">
          <span>❧</span>
        </div>
        <div className="vertical-line" />
      </div>

      <div className="invitation-composition">
        <div className="om-symbol">ॐ</div>

        <div className="invited-text">YOU&apos;RE INVITED</div>

        <button
          type="button"
          className={`envelope-button ${isOpening ? "opening-button" : ""}`}
          onClick={handleOpen}
          disabled={isOpening}
          aria-label="Open wedding invitation"
          data-testid="open-invitation-button"
        >
          <div className="envelope">
            <div className="inner-invitation-card">
              <div className="inner-card-border">
                <span className="inner-card-om">ॐ</span>
                <span className="inner-card-small">THE WEDDING OF</span>
                <strong>Rishabh</strong>
                <span className="inner-card-and">&amp;</span>
                <strong>Ritul</strong>
                <span className="inner-card-date">04 DECEMBER 2026</span>
              </div>
            </div>

            <div className="envelope-body" />
            <div className="envelope-left-fold" />
            <div className="envelope-right-fold" />
            <div className="envelope-bottom-fold" />
            <div className="envelope-flap" />
            <div className="envelope-border" />

            <div className="wax-seal-wrapper">
              <div className="wax-seal">
                <span>ॐ</span>
              </div>
            </div>
          </div>
        </button>

        <h1 className="couple-names">Rishabh &amp; Ritul</h1>

        <div className="name-divider">
          <span />
          <b>❧</b>
          <span />
        </div>

        <div className={`tap-text ${isOpening ? "tap-hidden" : ""}`}>
          TAP TO OPEN
        </div>
      </div>

      <div className="bottom-decoration">
        <div className="vertical-line" />
        <div className="lotus">
          <span>❧</span>
        </div>
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    </main>
  );
}
