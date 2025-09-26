import { About } from "./components/About.jsx";
import { Hero } from "./components/Hero.jsx";
import { NavBar } from "./components/Navbar.jsx";
import { Features } from "./components/Features.jsx";
import { FloatingImage as Story } from "./components/Story.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

export function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
