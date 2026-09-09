export interface ElapsedTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function calculateElapsed(from: string | Date, now: Date = new Date()): ElapsedTime {
  const start = from instanceof Date ? from : new Date(from);
  if (Number.isNaN(start.getTime())) {
    throw new Error("Invalid first meeting date");
  }

  const totalSeconds = Math.max(0, Math.floor((now.getTime() - start.getTime()) / 1000));
  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function padTime(value: number): string {
  return String(value).padStart(2, "0");
}
