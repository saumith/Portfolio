import { TerminalContainer } from "@/components/terminal-container";
import { HeroSection } from "@/components/hero-section";
import { TechnicalSkills } from "@/components/technical-skills";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { StarProject } from "@/components/star-project";
import { ProjectsGrid } from "@/components/projects-grid";
import { Publications } from "@/components/publications";
import { TerminalFooter } from "@/components/terminal-footer";

export default function Home() {
  return (
    <TerminalContainer>
      <main className="space-y-16"> {/* Reduced spacing for tighter flow */}

        {/* 1. Intro + Education */}
        <HeroSection />

        {/* 2. Technical Skills */}
        <TechnicalSkills />

        {/* 3. Experience */}
        <ExperienceTimeline />

        {/* 4. Academic Projects (Grouped) */}
        <section>
          <h3 className="text-xl font-mono text-muted-foreground mb-8 pl-1 border-l-4 border-primary">
                // ACADEMIC_PROJECTS
          </h3>
          <div className="space-y-20">
            <StarProject />
            <ProjectsGrid />
          </div>
        </section>

        {/* 5. Publications */}
        <Publications />

        <TerminalFooter />
      </main>
    </TerminalContainer>
  );
}
