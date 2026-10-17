import React from 'react';

/**
 * AmbientBackground:
 * A pure abstract, minimalist, and hardware-accelerated animated translucent SVG background.
 *
 * Designed strictly for modern aesthetics without figurative illustrations:
 * - Fluid mathematical bezier wave ribbons spanning diagonally across the canvas
 * - Multi-layered harmonic contour lines with delicate gradient strokes
 * - Minimalist concentric geometric orbital arcs with slow, meditative rotational drifts
 * - Soft diffuse ambient color glows adding warmth, depth, and tactile luxury
 *
 * Configured at subtle 6–18% translucent opacities so it eliminates blankness
 * while keeping all typography, buttons, cards, and imagery completely readable.
 */
export default function AmbientBackground() {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Diffuse Ambient Color Aurora Glows */}
      <div className="absolute -top-32 -left-20 w-[42rem] h-[42rem] rounded-full bg-gradient-to-br from-cafferra-gold/12 via-cafferra-sage/6 to-transparent blur-3xl opacity-75 animate-pulse duration-10000" />
      <div className="absolute top-1/4 -right-28 w-[45rem] h-[45rem] rounded-full bg-gradient-to-bl from-cafferra-sage/14 via-cafferra-forest/6 to-transparent blur-3xl opacity-65 animate-ambient-drift-2" />
      <div className="absolute bottom-10 -left-28 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-cafferra-gold/10 via-cafferra-cream-warm to-transparent blur-3xl opacity-60 animate-ambient-drift-1" />

      {/* 2. Abstract Vector Linework Canvas */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 960"
      >
        <defs>
          {/* Abstract Sinuous Gradient Ribbons */}
          <linearGradient id="abstract-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#354C38" stopOpacity="0.0" />
            <stop offset="25%" stopColor="#6E8755" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#EBC869" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#354C38" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="abstract-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EBC869" stopOpacity="0.0" />
            <stop offset="35%" stopColor="#354C38" stopOpacity="0.16" />
            <stop offset="70%" stopColor="#6E8755" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#EBC869" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="abstract-grad-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6E8755" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#354C38" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#EBC869" stopOpacity="0.0" />
          </linearGradient>

          <radialGradient id="abstract-radial-orbit" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EBC869" stopOpacity="0.0" />
            <stop offset="60%" stopColor="#6E8755" stopOpacity="0.14" />
            <stop offset="85%" stopColor="#354C38" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#354C38" stopOpacity="0.0" />
          </radialGradient>
        </defs>

        {/* --- LAYER A: UPPER ABSTRACT FLOW RIBBONS (Slow Undulating Drift) --- */}
        <g className="animate-ambient-steam opacity-80">
          <path
            d="M -100,180 C 180,80 340,320 620,190 C 900,60 1120,310 1540,160"
            fill="none"
            stroke="url(#abstract-grad-1)"
            strokeWidth="1.5"
          />
          <path
            d="M -80,225 C 200,125 360,365 640,235 C 920,105 1140,355 1560,205"
            fill="none"
            stroke="url(#abstract-grad-1)"
            strokeWidth="1.25"
            strokeDasharray="8 6"
          />
          <path
            d="M -60,270 C 220,170 380,410 660,280 C 940,150 1160,400 1580,250"
            fill="none"
            stroke="url(#abstract-grad-1)"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          <path
            d="M -40,315 C 240,215 400,455 680,325 C 960,195 1180,445 1600,295"
            fill="none"
            stroke="url(#abstract-grad-1)"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />
        </g>

        {/* --- LAYER B: MINIMALIST CONCENTRIC ORBITAL ARCS (Slow Meditative Rotation) --- */}
        <g transform="translate(1180, 240)">
          <g className="animate-spin-ultra-slow opacity-75">
            <circle
              cx="0"
              cy="0"
              r="280"
              fill="none"
              stroke="url(#abstract-radial-orbit)"
              strokeWidth="1.25"
              strokeDasharray="6 12"
            />
            <circle
              cx="0"
              cy="0"
              r="210"
              fill="none"
              stroke="#6E8755"
              strokeWidth="1"
              strokeOpacity="0.14"
            />
            <circle
              cx="0"
              cy="0"
              r="140"
              fill="none"
              stroke="#EBC869"
              strokeWidth="1.25"
              strokeOpacity="0.18"
              strokeDasharray="16 10"
            />
            <circle
              cx="0"
              cy="0"
              r="70"
              fill="none"
              stroke="#354C38"
              strokeWidth="0.75"
              strokeOpacity="0.15"
            />
          </g>
        </g>

        {/* --- LAYER C: MID-CANVAS DIAGONAL ABSTRACT SPLINES (Organic Fluid Shift) --- */}
        <g className="animate-ambient-drift-1 opacity-70">
          <path
            d="M -120,620 C 160,440 420,780 760,560 C 1080,350 1280,680 1580,490"
            fill="none"
            stroke="url(#abstract-grad-2)"
            strokeWidth="1.5"
          />
          <path
            d="M -100,670 C 180,490 440,830 780,610 C 1100,400 1300,730 1600,540"
            fill="none"
            stroke="url(#abstract-grad-2)"
            strokeWidth="1.2"
            strokeDasharray="12 8"
          />
          <path
            d="M -80,720 C 200,540 460,880 800,660 C 1120,450 1320,780 1620,590"
            fill="none"
            stroke="url(#abstract-grad-2)"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
        </g>

        {/* --- LAYER D: LOWER ABSTRACT TOPOGRAPHIC HARMONICS --- */}
        <g className="animate-ambient-drift-2 opacity-65">
          <path
            d="M -80,820 C 260,710 520,950 860,780 C 1180,620 1360,880 1560,740"
            fill="none"
            stroke="url(#abstract-grad-3)"
            strokeWidth="1.5"
          />
          <path
            d="M -60,870 C 280,760 540,1000 880,830 C 1200,670 1380,930 1580,790"
            fill="none"
            stroke="url(#abstract-grad-3)"
            strokeWidth="1.2"
            strokeDasharray="14 10"
          />
          <path
            d="M -40,920 C 300,810 560,1050 900,880 C 1220,720 1400,980 1600,840"
            fill="none"
            stroke="url(#abstract-grad-3)"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
        </g>

        {/* --- LAYER E: SECONDARY MINIMALIST ORBIT (Bottom-Left) --- */}
        <g transform="translate(160, 780)">
          <g className="animate-spin-ultra-slow opacity-60">
            <ellipse
              cx="0"
              cy="0"
              rx="220"
              ry="180"
              fill="none"
              stroke="#6E8755"
              strokeWidth="1"
              strokeOpacity="0.15"
              strokeDasharray="8 12"
            />
            <ellipse
              cx="0"
              cy="0"
              rx="150"
              ry="120"
              fill="none"
              stroke="#EBC869"
              strokeWidth="0.75"
              strokeOpacity="0.18"
            />
          </g>
        </g>

        {/* --- LAYER F: ABSTRACT FLOATING GEOMETRIC NODES --- */}
        <g className="animate-ambient-steam opacity-60">
          <circle cx="240" cy="220" r="3" fill="#EBC869" fillOpacity="0.35" />
          <circle cx="280" cy="190" r="1.5" fill="#354C38" fillOpacity="0.25" />
          <circle cx="680" cy="340" r="2.5" fill="#6E8755" fillOpacity="0.3" />
          <circle cx="720" cy="370" r="1.5" fill="#EBC869" fillOpacity="0.35" />
          <circle cx="1080" cy="540" r="3" fill="#EBC869" fillOpacity="0.3" />
          <circle cx="1120" cy="570" r="2" fill="#354C38" fillOpacity="0.2" />
          <circle cx="480" cy="720" r="2.5" fill="#6E8755" fillOpacity="0.25" />
          <circle cx="880" cy="840" r="3" fill="#EBC869" fillOpacity="0.3" />
        </g>
      </svg>
    </div>
  );
}
