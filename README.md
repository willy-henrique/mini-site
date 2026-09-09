# Nossa história

Mini-site narrativo, mobile-first, feito com Next.js, TypeScript, Tailwind CSS, Framer Motion, Lucide e canvas-confetti.

## Rodar localmente

Requisitos: Node.js 20.9 ou superior e npm.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para validar antes de publicar:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Personalizar a história

Os dados editáveis ficam em `src/data/story.ts`:

- `herName` e `myName`: nomes, caso queira inseri-los em novos textos;
- `partyDate`, `firstMeetingDate` e `firstKissDate`: datas da choppada, do encontro e do primeiro beijo em ISO 8601. O contador usa `firstKissDate` e mantém o offset de Brasília (`-03:00`);
- `approachLine` e `pickupLine`: a abordagem da fofoca e a cantada original;
- `firstDateLocation`, `movieName`, `movieDate` e `cinemaName`: local do encontro e informações do cinema;
- `myWhatsApp`: preenchido pela variável de ambiente `NEXT_PUBLIC_WHATSAPP` (veja abaixo), usada no botão de envio da versão dela;
- `soundtracks`: título, artista e caminho do áudio de cada momento da história.

Textos narrativos adicionais ficam nos componentes em `src/components/sections`, enquanto cards e capítulos reutilizáveis estão em `src/data/story.ts`. Perguntas do quiz ficam em `src/data/quiz.ts`.

## Número do WhatsApp

O botão "Mandar pro …" da seção "versão dela" usa `NEXT_PUBLIC_WHATSAPP`: DDI + DDD, só dígitos, como em `5562999999999`. Copie `.env.example` para `.env.local` e preencha para rodar local; na Vercel, cadastre a variável em Settings → Environment Variables como **Config** (não Secret).

Por ser `NEXT_PUBLIC_`, o valor é embutido no JavaScript enviado ao navegador — ele não fica no repositório, mas fica visível para quem abrir o site. Sem a variável definida, o botão do WhatsApp some e resta apenas "copiar meu texto".

## Trocar as fotos

As quatro fotos normalizadas estão em `public/photos`:

```text
photo-1.jpeg
photo-2.jpeg
photo-3.jpeg
photo-4.jpeg
```

Substitua os arquivos mantendo os nomes ou altere caminhos, dimensões, legendas, textos alternativos e enquadramento em `src/data/photos.ts`. O campo `position` controla o foco da imagem (`50% 40%`, por exemplo).

## Adicionar música

1. Coloque os arquivos MP3 ou M4A em `public/audio`.
2. Em `src/data/story.ts`, preencha o momento correspondente em `soundtracks`, por exemplo `soundtracks.party.audioUrl: "/audio/musica-da-festa.mp3"`.

Há slots prontos para `intro`, `party`, `pickup`, `kiss`, `shopping`, `food`, `walk`, `bar`, `cinema`, `secret`, `memories` e `final`. A faixa atual do bar está em `public/audio/musica-bar-v3.mp3`.

O player nunca começa sozinho. Se `audioUrl` estiver vazio, ele aparece apenas como elemento visual.

## Deploy na Vercel

1. Envie o projeto para um repositório privado.
2. Importe o repositório na Vercel como projeto Next.js.
3. Mantenha o comando de build padrão (`npm run build`).

O site já envia metadata `noindex, nofollow`, não usa analytics e não tem backend: nada é enviado automaticamente. As respostas do quiz e o texto da versão dela ficam no `localStorage` do aparelho. Depois de guardar o texto, ela escolhe se manda — o botão abre o WhatsApp com a mensagem pronta, ela revisa e aperta enviar; nada sai sem essa ação. Como há fotos pessoais, prefira um repositório privado e considere a proteção por senha da plataforma antes de compartilhar o link.

## Easter eggs

- Toque cinco vezes no pequeno coração fixo.
- No desktop: `↑ ↑ ↓ ↓ ← → ← → B A`.
- Toque várias vezes em `TOP SECRET`.
