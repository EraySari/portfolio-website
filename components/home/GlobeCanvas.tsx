"use client";

import { Canvas } from "@react-three/fiber";
import Globe from "./Globe";
import { useState, useEffect, useRef } from "react";

export default function GlobeCanvas() {
  const [key, setKey] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      console.warn("WebGL context lost, will attempt to restore...");
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored");
      // Canvas'ı yeniden oluştur
      setKey((prev) => prev + 1);
    };

    canvas.addEventListener("webglcontextlost", handleContextLost);
    canvas.addEventListener("webglcontextrestored", handleContextRestored);

    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);
    };
  }, [key]);

  return (
    <div className="w-full h-full relative z-10">
      <Canvas
        key={key}
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={1}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "low-power",
          preserveDrawingBuffer: false,
          stencil: false,
          depth: true,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          // Canvas referansını sakla
          canvasRef.current = gl.domElement;
        }}
        style={{ width: "100%", height: "100%" }}
        frameloop="always"
      >
        <Globe />
      </Canvas>
    </div>
  );
}
