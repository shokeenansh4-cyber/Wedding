"use client";

import { useState } from "react";

import Envelope from "@/components/Envelope";
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Countdown from "@/components/Countdown";
import Venue from "@/components/Venue";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main>
      {!opened ? (
        <Envelope
          onOpen={() => {
            setOpened(true);
          }}
        />
      ) : (
        <>
          <Hero />
          <Invitation />
          <Countdown />
          <Venue />
        </>
      )}
    </main>
  );
}