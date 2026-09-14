"use client";

import { motion } from "framer-motion";

export default function Invitation() {
  return (
    <section className="invitation-section">
      {/* Background decorative circles */}
      <div className="invitation-mandala invitation-mandala-1" />
      <div className="invitation-mandala invitation-mandala-2" />

      <div className="invitation-content">

        {/* Top ornament */}
        <motion.div
          className="invitation-ornament"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          ❧
        </motion.div>

        {/* Heading */}
        <motion.p
          className="invitation-kicker"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          WITH JOY IN OUR HEARTS
        </motion.p>

        {/* Main heading */}
        <motion.h2
          className="invitation-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
        >
          Rishabh
          <span>&amp;</span>
          Ritul
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          className="invitation-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
        >
          <span />
          <b>❧</b>
          <span />
        </motion.div>

        {/* Invitation message */}
        <motion.div
          className="invitation-message"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.4,
          }}
        >
          <p>
            Together with their families,
          </p>

          <p>
            invite you to join them as they
          </p>

          <p className="invitation-highlight">
            celebrate the beginning of
            <br />
            their beautiful journey together.
          </p>
        </motion.div>

        {/* Family section */}
        <motion.div
          className="invitation-families"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
        >
          <p className="family-label">
            WITH THE BLESSINGS OF
          </p>

          <div className="family-row">

            <div className="family-block">
              <span>
                Mrs. Kalyani Jha
              </span>

              <span>
                &amp; Mr. Rakesh Roshan Jha
              </span>
            </div>

            <div className="family-divider">
              ❧
            </div>

            <div className="family-block">
              <span>
                Mrs. Pragya Jha
              </span>

              <span>
                &amp; Dr. Mithilesh K. Thakur
              </span>
            </div>

          </div>
        </motion.div>

        {/* Date card */}
        <motion.div
          className="invitation-date-card"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.8,
          }}
        >
          <span className="date-day">
            FRIDAY
          </span>

          <span className="date-number">
            04
          </span>

          <span className="date-month">
            DECEMBER 2026
          </span>

          <span className="date-time">
            7:00 PM
          </span>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          className="invitation-bottom-ornament"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </motion.div>

      </div>
    </section>
  );
}