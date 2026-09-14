"use client";

const DIYA =
  "https://static.prod-images.emergentagent.com/jobs/7465af2a-0e4a-4095-99bc-0ca49140c220/images/6323406a172ea22ddc50a539f2f13d966c8aabcedc4e6772c56b5d474f76c2ba.jpeg";

const positions = ["16%", "48%", "80%"];

function LampColumn({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`side-lamps side-lamps-${side}`}
      aria-hidden="true"
      data-testid={`side-lamps-${side}`}
    >
      {positions.map((top, i) => (
        <div
          key={i}
          className="lamp-medallion"
          style={
            {
              top,
              ["--flicker-delay" as string]: `${i * 0.7 + (side === "right" ? 0.35 : 0)}s`,
            } as React.CSSProperties
          }
        >
          <span className="lamp-glow" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={DIYA} alt="" className="lamp-image" />
          <span className="lamp-frame" />
        </div>
      ))}
    </div>
  );
}

export default function SideLamps() {
  return (
    <>
      <LampColumn side="left" />
      <LampColumn side="right" />
    </>
  );
}
