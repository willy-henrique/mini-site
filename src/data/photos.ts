import type { StoryPhoto } from "@/types/story";

export const photos: StoryPhoto[] = [
  {
    id: 1,
    src: "/photos/photo-1.jpeg",
    alt: "Nós dois sentados e sorrindo juntos no nosso primeiro encontro",
    caption: "Uma das primeiras. E já com cara de que aquela noite ia render.",
    moment: "party",
    width: 1280,
    height: 960,
    position: "50% 42%",
  },
  {
    id: 2,
    src: "/photos/photo-2.jpeg",
    alt: "Nós dois em pé no shopping durante nosso primeiro encontro",
    caption: "Esse dia foi bom demais.",
    moment: "date",
    width: 959,
    height: 1280,
    position: "50% 45%",
  },
  {
    id: 3,
    src: "/photos/photo-3.jpeg",
    alt: "Uma selfie nossa sentados no bar durante o encontro",
    caption: "Definitivamente uma das minhas favoritas.",
    moment: "bar",
    width: 1280,
    height: 960,
    position: "50% 42%",
  },
  {
    id: 4,
    src: "/photos/photo-4.jpeg",
    alt: "Um registro bem próximo de nós dois sorrindo",
    caption: "E espero que essa galeria fique bem maior. ❤️",
    moment: "final",
    width: 959,
    height: 1280,
    position: "50% 44%",
  },
];
