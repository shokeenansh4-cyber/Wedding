"use client";

import { useState } from "react";
import { Heart, Send, Check } from "lucide-react";

interface FormState {
  name: string;
  guests: string;
  attending: "yes" | "no";
  message: string;
}

const initial: FormState = {
  name: "",
  guests: "1",
  attending: "yes",
  message: "",
};

export default function RSVP() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    try {
      const existing = JSON.parse(localStorage.getItem("wedding_rsvps") || "[]");
      existing.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem("wedding_rsvps", JSON.stringify(existing));
    } catch {
      /* ignore storage errors */
    }
    setSubmitted(true);
  };

  return (
    <section className="rsvp-section" data-testid="rsvp-section">
      <div className="rsvp-mandala rsvp-mandala-1" />

      <div className="rsvp-content">
        <p className="section-kicker" data-reveal>
          KINDLY RESPOND
        </p>
        <h2 className="section-title" data-reveal style={{ ["--d" as string]: "0.1s" }}>
          Will You Join Us?
        </h2>
        <div className="section-divider" data-reveal style={{ ["--d" as string]: "0.2s" }}>
          <span />
          <b>❧</b>
          <span />
        </div>

        <div className="rsvp-card" data-reveal="scale" style={{ ["--d" as string]: "0.25s" }}>
          {!submitted ? (
            <form
              className="rsvp-form rsvp-anim"
              onSubmit={handleSubmit}
              data-testid="rsvp-form"
            >
              <label className="rsvp-field">
                <span>Your Name</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Full name"
                  required
                  data-testid="rsvp-name-input"
                />
              </label>

              <div className="rsvp-row">
                <label className="rsvp-field">
                  <span>Number of Guests</span>
                  <select
                    value={form.guests}
                    onChange={(e) => update("guests", e.target.value)}
                    data-testid="rsvp-guests-select"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="rsvp-field">
                  <span>Will You Attend?</span>
                  <div className="rsvp-toggle">
                    <button
                      type="button"
                      className={form.attending === "yes" ? "active" : ""}
                      onClick={() => update("attending", "yes")}
                      data-testid="rsvp-attend-yes"
                    >
                      Joyfully Accept
                    </button>
                    <button
                      type="button"
                      className={form.attending === "no" ? "active" : ""}
                      onClick={() => update("attending", "no")}
                      data-testid="rsvp-attend-no"
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </label>
              </div>

              <label className="rsvp-field">
                <span>A Note for the Couple</span>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Share your blessings & wishes…"
                  data-testid="rsvp-message-input"
                />
              </label>

              <button type="submit" className="rsvp-submit" data-testid="rsvp-submit-button">
                <Send size={16} strokeWidth={1.6} />
                <span>SEND RSVP</span>
              </button>
            </form>
          ) : (
            <div className="rsvp-thanks rsvp-thanks-pop" data-testid="rsvp-confirmation">
              <div className="rsvp-thanks-icon">
                {form.attending === "yes" ? (
                  <Heart size={30} strokeWidth={1.4} />
                ) : (
                  <Check size={30} strokeWidth={1.4} />
                )}
              </div>
              <h3>Thank You, {form.name.split(" ")[0] || "Dear Guest"}!</h3>
              <p>
                {form.attending === "yes"
                  ? "We are overjoyed that you'll be celebrating with us. See you on the 4th of December!"
                  : "We'll miss you dearly, but thank you for letting us know. Your blessings mean the world to us."}
              </p>
              <button
                className="rsvp-reset"
                onClick={() => {
                  setForm(initial);
                  setSubmitted(false);
                }}
                data-testid="rsvp-reset-button"
              >
                Submit another response
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
