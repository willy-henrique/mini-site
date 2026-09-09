import type { QuizQuestionData } from "@/types/story";

export const quizQuestions: QuizQuestionData[] = [
  {
    id: "meeting-place",
    question: "Onde a gente se conheceu?",
    options: [
      { id: "college", label: "Faculdade" },
      { id: "tinder", label: "Tinder" },
      { id: "party", label: "Choppada" },
      { id: "bakery", label: "Padaria" },
    ],
    correctOptionId: "party",
    feedback: { correct: "Começou com música alta e troca de olhares.", incorrect: "Essa seria uma história bem diferente. 😂" },
  },
  {
    id: "staring",
    question: "O que aconteceu por boa parte da festa?",
    options: [
      { id: "argued", label: "A gente discutiu" },
      { id: "stared", label: "Ficamos nos encarando" },
      { id: "left", label: "Fomos embora" },
      { id: "pool", label: "Jogamos sinuca" },
    ],
    correctOptionId: "stared",
    feedback: { correct: "Olhar: 10/10. Iniciativa: ainda em análise.", incorrect: "Não foi bem assim, mas gostei da criatividade." },
  },
  {
    id: "friend",
    question: "Quem você tentou me empurrar?",
    options: [
      { id: "friend", label: "Sua amiga" },
      { id: "security", label: "Segurança" },
      { id: "waiter", label: "Garçom" },
      { id: "dj", label: "DJ" },
    ],
    correctOptionId: "friend",
    feedback: { correct: "Uma tentativa ousada. Não funcionou. 😂", incorrect: "Não. Mas imagina a confusão." },
  },
  {
    id: "first-date",
    question: "No nosso primeiro encontro teve…",
    options: [
      { id: "mall", label: "Shopping" },
      { id: "beer", label: "Chopp" },
      { id: "movies", label: "Cinema" },
      { id: "all", label: "Todas as anteriores" },
    ],
    correctOptionId: "all",
    feedback: { correct: "Um roteiro bem aproveitado, convenhamos.", incorrect: "Teve isso também — mas teve um pouco mais." },
  },
  {
    id: "best-part",
    question: "Qual foi a melhor parte?",
    options: [
      { id: "food", label: "Comida" },
      { id: "movies", label: "Cinema" },
      { id: "beer", label: "Chopp" },
      { id: "company", label: "Sua companhia" },
    ],
    correctOptionId: "company",
    feedback: { correct: "Agora sim. ❤️", incorrect: "Resposta discutível. 😂" },
  },
];
