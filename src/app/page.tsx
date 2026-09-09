import { EasterEggs } from "@/components/effects/easter-eggs";
import { ProgressNavigation } from "@/components/layout/progress-navigation";
import { DateChapter } from "@/components/sections/date-chapter";
import { DiscoveryCards } from "@/components/sections/discovery-cards";
import { Finale } from "@/components/sections/finale";
import { HeroIntro } from "@/components/sections/hero-intro";
import { HerVersion } from "@/components/sections/her-version";
import { KissAchievement } from "@/components/sections/kiss-achievement";
import { MemoryGallery } from "@/components/sections/memory-gallery";
import { PartyChapter } from "@/components/sections/party-chapter";
import { PickupChapter } from "@/components/sections/pickup-chapter";
import { SecretSection } from "@/components/sections/secret-section";
import { TimeCounter } from "@/components/sections/time-counter";
import { StoryQuiz } from "@/components/quiz/story-quiz";

export default function Home() {
  return (
    <>
      <ProgressNavigation />
      <main>
        <HeroIntro />
        <PartyChapter />
        <PickupChapter />
        <KissAchievement />
        <DateChapter />
        <SecretSection />
        <MemoryGallery />
        <TimeCounter />
        <DiscoveryCards />
        <StoryQuiz />
        <HerVersion />
        <Finale />
      </main>
      <EasterEggs />
    </>
  );
}
