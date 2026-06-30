"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function HeroBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effect = useRef<any>(null);

  useEffect(() => {
    if (!effect.current && vantaRef.current) {
      effect.current = NET({
        el: vantaRef.current,
        THREE,

        backgroundColor: 0x0f172a,
        backgroundAlpha: 1,

        color: 0xac501c,

        points: 20,
        maxDistance: 27,
        spacing: 20,

        showDots: false,

        mouseControls: false,
        touchControls: false,
        gyroControls: false,

        scale: 1,
        scaleMobile: 1,
      });
    }

    return () => {
      effect.current?.destroy();
      effect.current = null;
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 -z-20"
    />
  );
}