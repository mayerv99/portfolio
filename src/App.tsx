import { AboutMe } from "./sections/about-me";
import { Contact } from "./sections/contact";
import { HeroSection } from "./sections/hero";
import { Portfolio } from "./sections/portfolio";

export function App() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  );
}
