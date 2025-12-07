import React, { useEffect, useRef } from 'react';

const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const symbols = ['A', '¶', 'w', '?', '#', 'abc', '123', '{ }', '< >'];

    class Particle {
      x: number;
      y: number;
      text: string;
      size: number;
      speedY: number;
      opacity: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = h + Math.random() * 100; // Start below visible area
        this.text = symbols[Math.floor(Math.random() * symbols.length)];
        this.size = Math.random() * 20 + 10;
        this.speedY = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update(h: number) {
        this.y -= this.speedY;
        if (this.y < -50) {
          this.y = h + 50;
          this.x = Math.random() * canvas!.width;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.globalAlpha = this.opacity;
        context.font = `${this.size}px Inter`;
        context.fillStyle = '#c2f711'; // Brand primary color
        context.fillText(this.text, this.x, this.y);
        context.globalAlpha = 1.0;
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 50); // Responsive count
      for (let i = 0; i < particleCount; i++) {
        const p = new Particle(canvas.width, canvas.height);
        // Randomize start Y so they don't all come up at once
        p.y = Math.random() * canvas.height;
        particles.push(p);
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update(canvas.height);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default HeroBackground;
