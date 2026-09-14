"use client";

import { Flower2, Sparkles, HeartHandshake, PartyPopper } from "lucide-react";

const events = [
  {
    icon: Flower2,
    name: "Mehndi",
    day: "Wednesday",
    date: "02 December 2026",
    time: "04:00 PM onwards",
    note: "An afternoon of henna, colour and laughter.",
    image:
      "https://images.unsplash.com/photo-1771992230380-bc023f41771e?w=900&q=80",
  },
  {
    icon: Sparkles,
    name: "Haldi & Sangeet",
    day: "Thursday",
    date: "03 December 2026",
    time: "06:00 PM onwards",
    note: "Turmeric blessings followed by an evening of music & dance.",
    image:
      "https://images.unsplash.com/photo-1633104502402-014fa785a0ef?w=900&q=80",
  },
  {
    icon: HeartHandshake,
    name: "Wedding Ceremony",
    day: "Friday",
    date: "04 December 2026",
    time: "07:00 PM",
    note: "The sacred vows — Riwaaz Banquet & Party Lawn, Dwarka.",
    image:
      "https://images.unsplash.com/photo-1599462616558-2b75fd26a283?w=900&q=80",
    highlight: true,
  },
  {
    icon: PartyPopper,
    name: "Reception",
    day: "Friday",
    date: "04 December 2026",
    time: "09:00 PM onwards",
    note: "Dinner, celebration and blessings for the couple.",
    image:
      "https://images.unsplash.com/photo-1735052712464-9d24b69be5f5?w=900&q=80",
  },
];

export default function Events() {
  return (
    <section className="events-section" data-testid="events-section">
      <div className="events-mandala events-mandala-1" />

      <div className="events-content">
        <p className="section-kicker" data-reveal>
          OUR WEDDING FESTIVITIES
        </p>
        <h2 className="section-title" data-reveal style={{ ["--d" as string]: "0.1s" }}>
          The Celebrations
        </h2>
        <div className="section-divider" data-reveal style={{ ["--d" as string]: "0.2s" }}>
          <span />
          <b>❧</b>
          <span />
        </div>

        <div className="events-timeline">
          {events.map((e, i) => {
            const Icon = e.icon;
            return (
              <div
                key={e.name}
                className={`event-card ${e.highlight ? "is-highlight" : ""}`}
                data-reveal
                style={{ ["--d" as string]: `${i * 0.1}s` }}
                data-testid={`event-card-${i}`}
              >
                <div
                  className="event-image"
                  style={{ backgroundImage: `url(${e.image})` }}
                >
                  <div className="event-image-veil" />
                  <div className="event-icon">
                    <Icon size={22} strokeWidth={1.4} />
                  </div>
                </div>

                <div className="event-body">
                  <span className="event-day">{e.day}</span>
                  <h3 className="event-name">{e.name}</h3>
                  <span className="event-date">{e.date}</span>
                  <span className="event-time">{e.time}</span>
                  <p className="event-note">{e.note}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
