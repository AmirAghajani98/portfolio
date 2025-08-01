"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Cobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const resize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerWidth;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1,
      width: window.innerWidth,
      height: window.innerWidth,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 2,
      scale: 1,
      offset: [1, 1],
      mapSamples: 10000,
      mapBrightness: 5,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.08 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="absolute sm:bottom-[50%] left-0 w-full z-0"
      style={{
        height: "50vh",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          height: "100vw",
        }}
      />
    </div>
  );
}
