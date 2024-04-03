import { SectionHeader } from "@/components/ui/section-header";
import { Skills } from "./skills";

export function AboutMe() {
  return (
    <div className="text-center" id="about-me">
      <SectionHeader>Hi, I’m Victor Aragão</SectionHeader>

      <p className="text-xl leading-8 w-3/4 md:w-1/2 mx-auto">
        As a <strong>software developer</strong> specializing in{" "}
        <strong>React.js and Node.js</strong>, I've spent the last six years as
        a freelance developer, collaborating with various clients and companies.
        Driven by my passion for technology, I tackle challenges head-on,
        consistently delivering top-tier solutions. My dedication to staying
        current with industry trends ensures I bring innovative and high-quality
        work to every project. I can bring a blend of{" "}
        <strong>
          technical expertise, creativity, and a commitment to excellence
        </strong>{" "}
        to every endeavor.
      </p>
      <Skills />
    </div>
  );
}
