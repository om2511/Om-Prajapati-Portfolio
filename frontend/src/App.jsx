import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ApproachSection from "./components/ApproachSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ServicesSection from "./components/ServicesSection";

const sectionIds = ["home", "about", "projects", "services", "approach", "resume", "contact"];

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    return storedTheme ? storedTheme === "dark" : true;
  });
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.classList.toggle("theme-dark", isDarkTheme);
    window.localStorage.setItem("portfolio-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const updateActiveSection = () => {
      const scrollAnchor = window.scrollY + 180;
      let currentSection = "home";

      elements.forEach((element) => {
        if (scrollAnchor >= element.offsetTop) {
          currentSection = element.id;
        }
      });

      setActiveSection(currentSection);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) =>
              right.intersectionRatio - left.intersectionRatio ||
              left.boundingClientRect.top - right.boundingClientRect.top
          );

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        } else {
          updateActiveSection();
        }
      },
      {
        threshold: [0.2, 0.35, 0.55, 0.75],
        rootMargin: "-18% 0px -52% 0px"
      }
    );

    elements.forEach((element) => observer.observe(element));
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const revealTargets = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16
      }
    );

    revealTargets.forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar
        activeSection={activeSection}
        isDarkTheme={isDarkTheme}
        onThemeToggle={() => setIsDarkTheme((value) => !value)}
      />

      <main className="page-shell">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ApproachSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
