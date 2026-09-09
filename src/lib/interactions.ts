export const MAX_NO_BUTTON_DODGES = 2;

export function canDecline(attempts: number): boolean {
  return attempts >= MAX_NO_BUTTON_DODGES;
}

export function nextDodgeOffset(attempts: number): { x: number; y: number } {
  const offsets = [
    { x: 34, y: -12 },
    { x: -28, y: 14 },
  ];
  return offsets[Math.min(attempts, offsets.length - 1)];
}
