export const story = {
  herName: "Iasmim",
  myName: "Willy",
  /** A festa começou em 30/08; o beijo aconteceu na madrugada do dia seguinte. */
  partyDate: "2026-08-30",
  firstMeetingDate: "2026-08-30T22:00:00-03:00",
  firstKissDate: "2026-08-31T03:43:00-03:00",
  firstKissLabel: "31 de agosto de 2026, às 03:43",
  firstDateLocation: "Passeio das Águas Shopping",
  approachLine: "que fofoca e essa ai, eu quero saber...",
  pickupLine: "tava te olhando ali, e me afoguei nessa sua beleza, sera que nao posso te dar um beijo pra me recuperar meu ar nao ?",
  movieName: "Odisseia",
  movieDate: "",
  cinemaName: "Passeio das Águas Shopping",
  /**
   * WhatsApp de destino, vindo de NEXT_PUBLIC_WHATSAPP (DDI + DDD, só dígitos).
   * Sem a variável definida, a seção "versão dela" mostra apenas o botão de copiar.
   */
  myWhatsApp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  soundtracks: {
    intro: { title: "Abertura", artist: "", audioUrl: "" },
    party: { title: "A choppada", artist: "", audioUrl: "" },
    pickup: { title: "A cantada", artist: "", audioUrl: "" },
    kiss: { title: "O beijo", artist: "", audioUrl: "" },
    shopping: { title: "Shopping", artist: "", audioUrl: "" },
    food: { title: "Comida", artist: "", audioUrl: "" },
    walk: { title: "Caminhada", artist: "", audioUrl: "" },
    bar: { title: "Música do bar", artist: "trilha daquele momento", audioUrl: "/audio/musica-bar-v3.mp3" },
    cinema: { title: "Cinema", artist: "", audioUrl: "" },
    secret: { title: "Arquivo confidencial", artist: "", audioUrl: "" },
    memories: { title: "Alguns registros", artist: "", audioUrl: "" },
    final: { title: "Em construção", artist: "", audioUrl: "" },
  },
} as const;

export type SoundtrackKey = keyof typeof story.soundtracks;
export type StoryTrack = (typeof story.soundtracks)[SoundtrackKey];

export const chapters = [
  { id: "choppada", number: "01", label: "A choppada" },
  { id: "coragem", number: "02", label: "A coragem" },
  { id: "encontro", number: "03", label: "O encontro" },
  { id: "memorias", number: "04", label: "Memórias" },
  { id: "final", number: "05", label: "Em construção" },
] as const;

export const discoveries = [
  { title: "Seu sorriso", text: "Tem uma capacidade meio irritante de me fazer sorrir também.", mark: "01" },
  { title: "Companhia pra chopp", text: "Aprovada. Sem nenhuma ressalva até o momento.", mark: "02" },
  { title: "Companhia pra cinema", text: "Também aprovada — apesar de competir seriamente com o filme.", mark: "03" },
  { title: "Beija bem?", text: "Esse relatório permanece confidencial. 😏", mark: "04" },
  { title: "Nota geral", text: "Infelizmente alta demais. Isso complica bastante a minha situação.", mark: "05" },
] as const;
