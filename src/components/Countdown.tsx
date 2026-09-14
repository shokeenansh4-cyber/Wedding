"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const weddingDate = new Date(
    "2026-12-04T19:00:00+05:30"
  );

  const difference =
    weddingDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),

    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),

    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),

    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] =
    useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return null;
  }

  const countdownItems = [
    {
      value: timeLeft.days,
      label: "DAYS",
    },
    {
      value: timeLeft.hours,
      label: "HOURS",
    },
    {
      value: timeLeft.minutes,
      label: "MINUTES",
    },
    {
      value: timeLeft.seconds,
      label: "SECONDS",
    },
  ];

  return (
    <section className="countdown-section">

      {/* Background circles */}
      <div className="countdown-mandala countdown-mandala-1" />
      <div className="countdown-mandala countdown-mandala-2" />

      <div className="countdown-content">

        {/* Ornament */}
        <motion.div
          className="countdown-ornament"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          ❧
        </motion.div>

        {/* Heading */}
        <motion.p
          className="countdown-kicker"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          THE COUNTDOWN
        </motion.p>

        <motion.h2
          className="countdown-title"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
        >
          Until we begin our
          <br />
          <span>forever together</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="countdown-divider"
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <span />
          <b>❧</b>
          <span />
        </motion.div>

        {/* Countdown numbers */}
        <div className="countdown-grid">
          {countdownItems.map(
            (item, index) => (
              <motion.div
                key={item.label}
                className="countdown-item"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + index * 0.12,
                }}
              >
                <div className="countdown-number">
                  {String(item.value).padStart(2, "0")}
                </div>

                <div className="countdown-label">
                  {item.label}
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Wedding date */}
        <motion.div
          className="countdown-date"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
          }}
        >
          <span>FRIDAY</span>

          <b>04</b>

          <span>DECEMBER 2026</span>

          <i>7:00 PM</i>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          className="countdown-bottom-ornament"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 1.1,
          }}
        >
          • &nbsp; • &nbsp; •
        </motion.div>

      </div>
    </section>
  );
}