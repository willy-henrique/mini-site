export async function launchConfetti(): Promise<void> {
  const { default: confetti } = await import("canvas-confetti");
  const shared = { colors: ["#D4A0A7", "#D8B26E", "#7F1D3F", "#FAFAFA"], disableForReducedMotion: true };
  confetti({ ...shared, particleCount: 70, spread: 75, origin: { x: 0.32, y: 0.72 } });
  confetti({ ...shared, particleCount: 70, spread: 75, origin: { x: 0.68, y: 0.72 } });
}
