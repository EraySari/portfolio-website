import Container from "@/components/layout/Container";
import { resumeEN } from "@/content/resume/en";
import ResumeHero from "@/components/resume/ResumeHero";
import ResumeSection from "@/components/resume/ResumeSection";
import ExperienceList from "@/components/resume/ExperienceList";
import ProjectsGrid from "@/components/resume/ProjectsGrid";
import Skills from "@/components/resume/Skills";
import Education from "@/components/resume/Education";
import References from "@/components/resume/References";
import Downloads from "@/components/resume/Downloads";

export default function ResumePage() {
  return (
    <div className="min-h-screen ">
      <Container className="max-w-5xl py-12 sm:py-16">
        <ResumeHero {...resumeEN.hero} />

        <ResumeSection title="Experience">
          <ExperienceList experiences={resumeEN.experience} />
        </ResumeSection>

        <ResumeSection title="Selected Projects">
          <ProjectsGrid projects={resumeEN.selectedProjects} />
        </ResumeSection>

        <ResumeSection title="Skills">
          <Skills {...resumeEN.skills} />
        </ResumeSection>

        <ResumeSection title="Education">
          <Education items={resumeEN.education} />
        </ResumeSection>

        <ResumeSection title="References">
          <References references={resumeEN.references} />
        </ResumeSection>

        <ResumeSection title="Downloads">
          <Downloads />
        </ResumeSection>
      </Container>
    </div>
  );
}
