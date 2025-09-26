import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

export const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    const footer = footerRef.current;
    if (!footer) return;

    // Fade in the footer content sections
    gsap.from(footer.children[1].children, {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footer,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate social icons
    gsap.from(footer.querySelectorAll('a[href*="discord"], a[href*="twitter"], a[href*="youtube"], a[href*="medium"]'), {
      scale: 0,
      rotation: 180,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: footer,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate go to top text
    gsap.from(footer.querySelector('button[title="Go to top"]'), {
      y: 10,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footer,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <footer ref={footerRef} className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 size-full object-cover object-center"
        >
          <source src="videos/feature-5.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Minimal Content Overlay */}
      <div className="relative z-10 flex size-full flex-col items-center justify-center">
        
        {/* Main Logo/Brand */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <h1 className="special-font text-6xl font-black text-white md:text-8xl">
              ZEPHYR
            </h1>
          </div>
          
          <p className="mx-auto max-w-2xl font-general text-lg text-white/80 md:text-xl">
            Enter the Metagame Layer • Unleash the Play Economy
          </p>
        </div>

        {/* Social Links */}
        <div className="mb-16">
          <div className="flex items-center gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex size-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-yellow-300/50 hover:bg-yellow-300/10 hover:text-yellow-300"
              >
                <span className="text-xl transition-transform group-hover:scale-110">
                  {link.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Text & Go to Top Button */}
        <div className="absolute bottom-12 w-full">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-baseline md:justify-between md:px-12">
            <p className="font-general text-sm text-white/50">
              ©2024 Zephyr. All rights reserved.
            </p>
            
            {/* Go to Top Link */}
            <button
              onClick={() => {
                gsap.to(window, {
                  scrollTo: { y: 0, autoKill: false },
                  duration: 4.5,
                  ease: "power1.inOut"
                });
              }}
              className="group cursor-pointer font-general text-sm text-white/50 transition-colors hover:text-yellow-300"
              title="Go to top"
            >
              <span className="inline-flex items-center gap-1 transition-transform group-hover:-translate-y-0.5">
                Back to top
                <span className="text-xs transition-transform group-hover:-translate-y-1">↑</span>
              </span>
            </button>
          </div>
        </div>

        {/* Scroll indicator (optional) */}
        <div className="absolute left-1/2 top-8 -translate-x-1/2">
          <div className="h-1 w-8 rounded-full bg-white/20" />
        </div>
      </div>
    </footer>
  );
};

