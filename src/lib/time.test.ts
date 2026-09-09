import { describe, expect, it } from "vitest";
import { calculateElapsed, padTime } from "@/lib/time";

describe("calculateElapsed", () => {
  it("calcula dias, horas, minutos e segundos respeitando o offset ISO", () => {
    const elapsed = calculateElapsed("2026-01-01T20:00:00-03:00", new Date("2026-01-03T00:02:03-03:00"));
    expect(elapsed).toEqual({ days: 1, hours: 4, minutes: 2, seconds: 3 });
  });

  it("nunca retorna tempo negativo", () => {
    expect(calculateElapsed("2027-01-01T00:00:00Z", new Date("2026-01-01T00:00:00Z"))).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it("formata unidades com dois dígitos", () => expect(padTime(7)).toBe("07"));
});
