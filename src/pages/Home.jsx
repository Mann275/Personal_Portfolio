import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import SeoHead from "@/components/SeoHead";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Patel Mann",
    url: "https://patelmann.me/",
    image: "https://patelmann.me/link.png",
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/Mann275",
      "https://www.linkedin.com/in/mann-patel-ba084625a/",
      "https://instagram.com/mann.275",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Patel Mann Portfolio",
    url: "https://patelmann.me/",
    inLanguage: "en-IN",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <SeoHead
        title="Patel Mann | Full Stack Developer Portfolio"
        description="Patel Mann is a Full Stack Developer from Gujarat, India. Explore MERN stack projects, real-world case studies, and contact details."
        path="/"
        keywords="Patel Mann, Patel Mann developer, Full Stack Developer, MERN Developer, React Developer, Portfolio"
        jsonLd={homeSchema}
      />
      <ScrollToTop />

      <header className="sr-only">
        <h1>Patel Mann Full Stack Developer Portfolio</h1>
        <p>
          Portfolio website of Patel Mann, a MERN stack developer showcasing
          projects, skills, and professional experience.
        </p>
      </header>

      {/* Hero Section with Scrollytelling */}
      <section id="home" className="relative">
        <div className="relative">
          <ScrollyCanvas />
        </div>
      </section>

      {/* Content Sections */}
      <div className="w-full h-px bg-white/5 max-w-6xl mx-auto" />
      <About />
      <div className="w-full h-px bg-white/5 max-w-6xl mx-auto" />
      <Skills />
      <div className="w-full h-px bg-white/5 max-w-6xl mx-auto" />
      <Services />
      <div className="w-full h-px bg-white/5 max-w-6xl mx-auto" />
      <Experience />
      <div className="w-full h-px bg-white/5 max-w-6xl mx-auto" />
      <Projects />
      <div className="w-full h-px bg-white/5 max-w-6xl mx-auto" />
      <Contact />
    </main>
  );
}
