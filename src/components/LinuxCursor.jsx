'use client';
import { useEffect, useRef, useState } from 'react';

export default function SmoothFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const ringPosition = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const RING_SMOOTHNESS = 0.15;

  useEffect(() => {
    // Hide system cursor
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      'a, button, img, input, textarea, select'
    );

    interactiveElements.forEach((element) => {
      element.style.cursor = 'none';
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Animate ring with smooth follow
    const animate = () => {
      ringPosition.current.x +=
        (mousePosition.current.x - ringPosition.current.x) * RING_SMOOTHNESS;
      ringPosition.current.y +=
        (mousePosition.current.y - ringPosition.current.y) * RING_SMOOTHNESS;

      if (ringRef.current) {
        ringRef.current.style.left = ringPosition.current.x + 'px';
        ringRef.current.style.top = ringPosition.current.y + 'px';
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationId);
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50" style={{ zIndex: 2147483647 }}>
      {/* Ring follows dot */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: isHovering ? '44px' : '28px',
          height: isHovering ? '44px' : '28px',
          border: '2px solid var(--primary)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          left: '0px',
          top: '0px',
          pointerEvents: 'none',
          opacity: isHovering ? 0.8 : 0.6,
          transition: 'width 0.3s, height 0.3s, opacity 0.3s',
          zIndex: 2147483647,
        }}
      />

      {/* Blue Dot Cursor */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          background: 'var(--primary)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          left: '0px',
          top: '0px',
          pointerEvents: 'none',
          boxShadow: '0 0 6px rgba(34, 211, 238, 0.6)',
          zIndex: 2147483647,
        }}
      />
    </div>
  );
}
