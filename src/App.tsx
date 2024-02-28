import { NavBar } from "./components/navbar";
import { AboutMe } from "./sections/about-me";
import { HeroSection } from "./sections/hero";
import { Portfolio } from "./sections/portfolio";

export function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Portfolio />
    </>
  );
}
