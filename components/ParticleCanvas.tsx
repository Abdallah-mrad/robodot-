"use client";

import { useEffect, useRef } from 'react';

export default function ParticleCanvas({ currentIndex, slides }: { 
  currentIndex: number;
  slides: any[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Your existing canvas animation code here
    const ctx = canvas.getContext('2d');
    // ... rest of the particle animation logic
    
  }, [currentIndex]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
    />
  );
}