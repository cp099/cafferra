import confetti from 'canvas-confetti';

export function fireCafferraConfetti() {
  const brandColors = ['#6E8755', '#354C38', '#EBC869', '#F5EED7'];

  // Left burst
  confetti({
    particleCount: 40,
    angle: 60,
    spread: 55,
    origin: { x: 0.2, y: 0.7 },
    colors: brandColors,
  });

  // Right burst
  confetti({
    particleCount: 40,
    angle: 120,
    spread: 55,
    origin: { x: 0.8, y: 0.7 },
    colors: brandColors,
  });
}
