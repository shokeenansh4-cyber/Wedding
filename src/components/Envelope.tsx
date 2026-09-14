"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    // Prevent multiple clicks while the animation is running
    if (isOpening) return;

    setIsOpening(true);

    // Allow the complete envelope animation to finish
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <main
      className={`envelope-screen ${
        isOpening ? "is-opening" : ""
      }`}
    >
      {/* =====================================================
          BACKGROUND MANDALAS
          ===================================================== */}

      <div className="mandala mandala-1" />
      <div className="mandala mandala-2" />
      <div className="mandala mandala-3" />
      <div className="mandala mandala-4" />

      {/* =====================================================
          TOP DECORATION
          ===================================================== */}

      <div className="top-decoration">
        <span>•</span>
        <span>•</span>
        <span>•</span>

        <div className="lotus">
          <span>❧</span>
        </div>

        <div className="vertical-line" />
      </div>

      {/* =====================================================
          MAIN INVITATION COMPOSITION
          ===================================================== */}

      <motion.div
        className="invitation-composition"
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: isOpening ? 0 : 1,
          y: isOpening ? -25 : 0,
        }}
        transition={{
          duration: isOpening ? 0.7 : 1.2,
          ease: "easeOut",
        }}
      >
        {/* ===================================================
            OM SYMBOL
            =================================================== */}

        <motion.div
          className="om-symbol"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
        >
          ॐ
        </motion.div>

        {/* ===================================================
            YOU'RE INVITED
            =================================================== */}

        <motion.div
          className="invited-text"
          initial={{
            opacity: 0,
            letterSpacing: "8px",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "5px",
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
        >
          YOU&apos;RE INVITED
        </motion.div>

        {/* ===================================================
            ENVELOPE BUTTON
            =================================================== */}

        <motion.button
          type="button"
          className={`envelope-button ${
            isOpening ? "opening-button" : ""
          }`}
          onClick={handleOpen}
          disabled={isOpening}
          aria-label="Open wedding invitation"
          whileHover={
            !isOpening
              ? {
                  scale: 1.025,
                  y: -4,
                }
              : undefined
          }
          whileTap={
            !isOpening
              ? {
                  scale: 0.98,
                }
              : undefined
          }
          transition={{
            duration: 0.25,
          }}
        >
          {/* =================================================
              ENVELOPE
              ================================================= */}

          <div className="envelope">
            {/* ===============================================
                INNER INVITATION CARD

                This sits behind the envelope folds and
                rises when the envelope opens.
                =============================================== */}

            <motion.div
              className="inner-invitation-card"
              initial={{
                y: 35,
                opacity: 0,
              }}
              animate={
                isOpening
                  ? {
                      y: -125,
                      opacity: 1,
                    }
                  : {
                      y: 35,
                      opacity: 0,
                    }
              }
              transition={{
                duration: 1.15,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="inner-card-border">
                <span className="inner-card-om">
                  ॐ
                </span>

                <span className="inner-card-small">
                  THE WEDDING OF
                </span>

                <strong>
                  Rishabh
                </strong>

                <span className="inner-card-and">
                  &amp;
                </span>

                <strong>
                  Ritul
                </strong>

                <span className="inner-card-date">
                  04 DECEMBER 2026
                </span>
              </div>
            </motion.div>

            {/* ===============================================
                MAIN ENVELOPE BODY
                =============================================== */}

            <div className="envelope-body" />

            {/* ===============================================
                LEFT FOLD
                =============================================== */}

            <div className="envelope-left-fold" />

            {/* ===============================================
                RIGHT FOLD
                =============================================== */}

            <div className="envelope-right-fold" />

            {/* ===============================================
                BOTTOM FOLD
                =============================================== */}

            <div className="envelope-bottom-fold" />

            {/* ===============================================
                TOP FLAP

                Framer Motion rotates this flap open.
                =============================================== */}

            <motion.div
              className="envelope-flap"
              animate={
                isOpening
                  ? {
                      rotateX: 180,
                    }
                  : {
                      rotateX: 0,
                    }
              }
              transition={{
                duration: 0.9,
                ease: [0.65, 0, 0.35, 1],
              }}
            />

            {/* ===============================================
                GOLD BORDER
                =============================================== */}

            <div className="envelope-border" />

            {/* ===============================================
                WAX SEAL

                IMPORTANT:
                The wrapper handles positioning.
                The inner seal handles animation.

                This prevents Framer Motion's transform
                from overwriting translate(-50%, -50%).
                =============================================== */}

            <div className="wax-seal-wrapper">
              <motion.div
                className="wax-seal"
                animate={
                  isOpening
                    ? {
                        opacity: 0,
                        scale: 0.7,
                      }
                    : {
                        opacity: 1,
                        scale: 1,
                      }
                }
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
              >
                <span>ॐ</span>
              </motion.div>
            </div>
          </div>
        </motion.button>

        {/* ===================================================
            COUPLE NAMES
            =================================================== */}

        <motion.h1
          className="couple-names"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
        >
          Rishabh &amp; Ritul
        </motion.h1>

        {/* ===================================================
            DECORATIVE DIVIDER
            =================================================== */}

        <div className="name-divider">
          <span />
          <b>❧</b>
          <span />
        </div>

        {/* ===================================================
            TAP TO OPEN
            =================================================== */}

        <motion.div
          className="tap-text"
          animate={
            isOpening
              ? {
                  opacity: 0,
                }
              : {
                  opacity: [0.5, 1, 0.5],
                }
          }
          transition={{
            duration: 2,
            repeat: isOpening ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          TAP TO OPEN
        </motion.div>
      </motion.div>

      {/* =====================================================
          BOTTOM DECORATION
          ===================================================== */}

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