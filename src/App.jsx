import { About } from "./Components/About.jsx";
import { Hero } from "./Components/Hero.jsx";
import { NavBar } from "./Components/Navbar.jsx";
import { Features } from "./Components/Features.jsx";
import { FloatingImage as Story } from "./Components/Story.jsx";
import { Contact } from "./Components/Contact.jsx";
import { Footer } from "./Components/Footer.jsx";

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
