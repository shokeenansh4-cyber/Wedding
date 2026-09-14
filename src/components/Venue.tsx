"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import QRCode from "qrcode";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const venueName = "Riwaaz Banquet & Party Lawn";

const venueAddress =
  "Sector 07, Dwarka, New Delhi 110045";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Riwaaz+Banquet+%26+Party+Lawn%2C+Sector+07%2C+Dwarka%2C+New+Delhi+110045";

export default function Venue() {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    const generateQR = async () => {
      try {
        const generatedQR = await QRCode.toDataURL(mapsUrl, {
          width: 420,
          margin: 2,
          errorCorrectionLevel: "H",
        });

        setQrCode(generatedQR);
      } catch (error) {
        console.error("Unable to generate QR code:", error);
      }
    };

    generateQR();
  }, []);

  return (
    <section className="venue-section">
      {/* =====================================================
          BACKGROUND MANDALAS
          ===================================================== */}

      <div className="venue-mandala venue-mandala-1" />
      <div className="venue-mandala venue-mandala-2" />
      <div className="venue-mandala venue-mandala-3" />

      {/* =====================================================
          TOP ORNAMENT
          ===================================================== */}

      <motion.div
        className="venue-top-ornament"
        initial={{
          opacity: 0,
          y: -20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <span>•</span>
        <span>•</span>

        <div className="venue-lotus">
          ❧
        </div>

        <div className="venue-ornament-line" />
      </motion.div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="venue-content">
        {/* Heading */}

        <motion.p
          className="venue-kicker"
          initial={{
            opacity: 0,
            letterSpacing: "7px",
          }}
          whileInView={{
            opacity: 1,
            letterSpacing: "4px",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          JOIN US AT
        </motion.p>

        <motion.h2
          className="venue-title"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
        >
          The Celebration
        </motion.h2>

        <motion.div
          className="venue-divider"
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
            duration: 0.7,
            delay: 0.3,
          }}
        >
          <span />
          <b>❧</b>
          <span />
        </motion.div>

        {/* =================================================
            VENUE CARD
            ================================================= */}

        <motion.div
          className="venue-card"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
          }}
        >
          {/* Left side */}

          <div className="venue-information">
            <div className="venue-icon">
              <MapPin size={27} strokeWidth={1.3} />
            </div>

            <p className="venue-label">
              WEDDING VENUE
            </p>

            <h3>
              {venueName}
            </h3>

            <div className="venue-gold-line" />

            <p className="venue-address">
              {venueAddress}
            </p>

            <p className="venue-city">
              DELHI
            </p>

            {/* Directions button */}

            <motion.a
              className="venue-directions"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Navigation
                size={16}
                strokeWidth={1.5}
              />

              <span>
                GET DIRECTIONS
              </span>

              <ExternalLink
                size={13}
                strokeWidth={1.5}
              />
            </motion.a>
          </div>

          {/* =================================================
              QR SIDE
              ================================================= */}

          <div className="venue-qr-area">
            <div className="venue-qr-frame">
              {qrCode ? (
                <img
                  src={qrCode}
                  alt="QR code for wedding venue directions"
                  className="venue-qr"
                />
              ) : (
                <div className="venue-qr-loading">
                  <span />
                </div>
              )}
            </div>

            <p className="venue-qr-title">
              FIND YOUR WAY
            </p>

            <p className="venue-qr-text">
              Scan the QR code
              <br />
              for directions
            </p>
          </div>
        </motion.div>

        {/* =================================================
            WEDDING DATE
            ================================================= */}

        <motion.div
          className="venue-date"
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
            duration: 0.8,
            delay: 0.45,
          }}
        >
          <span>
            FRIDAY
          </span>

          <b>
            04
          </b>

          <span>
            DECEMBER 2026
          </span>

          <i>
            07:00 PM
          </i>
        </motion.div>

        {/* =================================================
            BOTTOM ORNAMENT
            ================================================= */}

        <div className="venue-bottom-ornament">
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </div>
      </div>
    </section>
  );
}