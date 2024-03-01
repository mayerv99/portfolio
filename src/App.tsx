import { FloatingNav } from "./components/ui/floating-navbar";
import { AboutMe } from "./sections/about-me";
import { Contact } from "./sections/contact";
import { HeroSection } from "./sections/hero";
import { Portfolio } from "./sections/portfolio";

export function App() {
  const navItems = [
    { name: "Home", link: "home" },
    { name: "About Me", link: "about-me" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Contact", link: "contact" },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  );
}
