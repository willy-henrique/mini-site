/** Monta a mensagem que ela envia com a própria versão da história. */
export function buildHerVersionMessage(text: string, herName: string): string {
  return `A minha versão daquela noite — ${herName}\n\n${text.trim()}`;
}

/**
 * Link do WhatsApp com a mensagem pré-preenchida.
 * Retorna string vazia quando não há número configurado ou texto para enviar.
 */
export function buildWhatsAppLink(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, "");
  if (!digits || !message.trim()) return "";
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
