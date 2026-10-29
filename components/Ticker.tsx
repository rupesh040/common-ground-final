import React from "react";
import type { CommonGroundTicker1Data } from "@/types/content";
import { tickerData } from "@/lib/content";

interface TickerProps {
  data?: CommonGroundTicker1Data;
}

export default function Ticker({ data = tickerData }: TickerProps) {
  const marqueeItems = [...data.items, ...data.items];

  return (
    <div
      role="region"
      aria-label="Highlights marquee"
      className="w-full bg-[#D4EAA2] py-3.5 overflow-hidden border-y border-[#C2DB91] select-none"
    >
      <div className="animate-marquee items-center gap-8">
        {marqueeItems.map((item, index) => {
          const isDuplicate = index >= data.items.length;
          return (
            <div
              key={index}
              aria-hidden={isDuplicate ? "true" : undefined}
              className="flex items-center gap-8 whitespace-nowrap"
            >
              <span className="text-[13.5px] font-extrabold tracking-[0.2em] text-[#143323] uppercase font-sans">
                {item}
              </span>
              <span className="text-[#143323]/50 text-base leading-none font-bold" aria-hidden="true">
                ✦
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
