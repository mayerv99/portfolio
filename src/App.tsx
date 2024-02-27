import { NavBar } from "./components/navbar";
import { AboutMe } from "./sections/about-me";
import { HeroSection } from "./sections/hero";

export function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
    </>
  );
}
