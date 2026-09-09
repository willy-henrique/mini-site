import { describe, expect, it } from "vitest";
import { canDecline, MAX_NO_BUTTON_DODGES, nextDodgeOffset } from "@/lib/interactions";

describe("final choice", () => {
  it("move o botão somente nas duas primeiras tentativas", () => {
    expect(canDecline(0)).toBe(false);
    expect(canDecline(1)).toBe(false);
    expect(canDecline(MAX_NO_BUTTON_DODGES)).toBe(true);
  });

  it("mantém os deslocamentos pequenos para não sair da tela", () => {
    expect(Math.abs(nextDodgeOffset(0).x)).toBeLessThanOrEqual(40);
    expect(Math.abs(nextDodgeOffset(1).y)).toBeLessThanOrEqual(20);
  });
});
