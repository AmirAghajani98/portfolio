"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

export default function Cobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: isMobile ? 170 * 2 : 500 * 2,
      height: isMobile ? 170 * 2 : 500 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 3,
      scale: 1,
      offset: [1, 1],
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      },
    });
    return () => {
      globe.destroy();
    };
  }, [isMobile]);

  return (
    <div>
      <div className="sm:w-full justify-center flex sm:translate-y-0 translate-y-[250px]">
        <canvas
          ref={canvasRef}
          style={{
            width: isMobile ? 170 : 500,
            height: isMobile ? 170 : 500,
            maxWidth: "100%",
            aspectRatio: 1,
          }}
        />
      </div>
    </div>
  );
}
