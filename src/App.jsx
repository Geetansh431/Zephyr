import { lazy, Suspense } from "react";
import { Hero } from "./Components/Hero.jsx";
import { NavBar } from "./Components/Navbar.jsx";

// Lazy load components that aren't immediately visible
const About = lazy(() => import("./Components/About.jsx").then(module => ({ default: module.About })));
const Features = lazy(() => import("./Components/Features.jsx").then(module => ({ default: module.Features })));
const Story = lazy(() => import("./Components/Story.jsx").then(module => ({ default: module.FloatingImage })));
const Contact = lazy(() => import("./Components/Contact.jsx").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("./Components/Footer.jsx").then(module => ({ default: module.Footer })));

// Loading component
const LazyLoadingSpinner = () => (
  <div className="flex-center h-32 w-full">
    <div className="three-body">
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
    </div>
  </div>
);

export function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      
      <Suspense fallback={<LazyLoadingSpinner />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LazyLoadingSpinner />}>
        <Features />
      </Suspense>
      
      <Suspense fallback={<LazyLoadingSpinner />}>
        <Story />
      </Suspense>
      
      <Suspense fallback={<LazyLoadingSpinner />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<LazyLoadingSpinner />}>
        <Footer />
      </Suspense>
    </main>
  );
}
