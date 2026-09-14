"use client";

import { useRef, useState } from "react";
import { Music2, Pause } from "lucide-react";

const TRACK = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const attemptPlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      attemptPlay();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={TRACK}
        loop
        preload="auto"
        autoPlay={autoPlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        className={`music-player ${playing ? "is-playing" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        data-testid="music-player-button"
      >
        <span className="music-ring" />
        <span className="music-ring music-ring-2" />
        {playing ? (
          <Pause size={17} strokeWidth={1.7} />
        ) : (
          <Music2 size={17} strokeWidth={1.7} />
        )}
      </button>
    </>
  );
}
