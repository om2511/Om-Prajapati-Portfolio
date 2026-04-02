import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import LinksSection from "./components/LinksSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ServicesSection from "./components/ServicesSection";

const sectionIds = ["home", "about", "projects", "services", "resume", "contact", "links"];

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-15% 0px -40% 0px"
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
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
        <ResumeSection />
        <ContactSection />
        <LinksSection />
      </main>

      <Footer />
    </div>
  );
}
