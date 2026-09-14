"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background mandala */}
      <div className="hero-mandala hero-mandala-1" />
      <div className="hero-mandala hero-mandala-2" />
      <div className="hero-mandala hero-mandala-3" />

      {/* Decorative top ornament */}
      <motion.div
        className="hero-top-ornament"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
      >
        <span>•</span>
        <span>•</span>
        <span>•</span>

        <div className="hero-lotus">
          ❧
        </div>

        <div className="hero-ornament-line" />
      </motion.div>

      {/* Main hero content */}
      <div className="hero-content">

        {/* Om */}
        <motion.div
          className="hero-om"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          ॐ
        </motion.div>

        {/* Family blessing */}
        <motion.p
          className="hero-blessing"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.6,
          }}
        >
          With the blessings of our families
        </motion.p>

        {/* Small decorative line */}
        <motion.div
          className="hero-small-divider"
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 90,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
        />

        {/* Couple names */}
        <motion.div
          className="hero-names"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.1,
            delay: 1,
            ease: "easeOut",
          }}
        >
          <span className="hero-name">
            Rishabh
          </span>

          <span className="hero-ampersand">
            &
          </span>

          <span className="hero-name">
            Ritul
          </span>
        </motion.div>

        {/* Invitation text */}
        <motion.p
          className="hero-invite-text"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          Together with their families
        </motion.p>

        <motion.p
          className="hero-celebrate-text"
          initial={{
            opacity: 0,
            letterSpacing: "8px",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "4px",
          }}
          transition={{
            duration: 1.2,
            delay: 1.8,
          }}
        >
          INVITE YOU TO CELEBRATE
        </motion.p>

        {/* Date */}
        <motion.div
          className="hero-date"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 2.1,
          }}
        >
          <span>04</span>

          <div className="hero-date-middle">
            <span>DECEMBER</span>
            <span>2026</span>
          </div>

          <span>07:00 PM</span>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="hero-divider"
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 1,
            delay: 2.4,
          }}
        >
          <span />
          <b>❧</b>
          <span />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero-scroll"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 3,
            duration: 1,
          }}
        >
          <span>SCROLL TO EXPLORE</span>

          <motion.div
            className="hero-scroll-arrow"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom ornament */}
      <motion.div
        className="hero-bottom-ornament"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2.5,
          duration: 1,
        }}
      >
        <div className="hero-ornament-line" />

        <div className="hero-lotus">
          ❧
        </div>

        <span>•</span>
        <span>•</span>
        <span>•</span>
      </motion.div>
    </section>
  );
}