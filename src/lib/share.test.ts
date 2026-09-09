import { describe, expect, it } from "vitest";
import { buildHerVersionMessage, buildWhatsAppLink } from "./share";

describe("buildHerVersionMessage", () => {
  it("assina a mensagem com o nome dela e remove espaços das pontas", () => {
    expect(buildHerVersionMessage("  eu lembro do frio  ", "Iasmim")).toBe(
      "A minha versão daquela noite — Iasmim\n\neu lembro do frio",
    );
  });
});

describe("buildWhatsAppLink", () => {
  it("mantém apenas os dígitos do telefone e codifica a mensagem", () => {
    expect(buildWhatsAppLink("+55 (62) 99999-9999", "oi você")).toBe(
      "https://wa.me/5562999999999?text=oi%20voc%C3%AA",
    );
  });

  it("devolve vazio sem número configurado", () => {
    expect(buildWhatsAppLink("", "oi")).toBe("");
  });

  it("devolve vazio quando não há texto", () => {
    expect(buildWhatsAppLink("5562999999999", "   ")).toBe("");
  });
});
