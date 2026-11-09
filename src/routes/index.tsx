import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohamed Yusuf | Product Management Portfolio" },
      {
        name: "description",
        content:
          "Mohamed Yusuf moves into product management from marketing and sales. See the LinkedIn SkillPathway case study.",
      },
      { property: "og:title", content: "Mohamed Yusuf | Product Management Portfolio" },
      {
        property: "og:description",
        content: "Case study: LinkedIn SkillPathway, from design sprint to a decision to hold launch until fixes pass retesting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LINKEDIN = "https://www.linkedin.com/in/mohamed-ahmed-yusuf/";

const Section = ({ id, title, children }: { id?: string; title: string; children: ReactNode }) => (
  <section id={id} className="border-t border-border">
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="border-r border-border p-6 lg:col-span-2 lg:p-8" />
      <div className="p-6 py-16 lg:col-span-10 lg:p-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="section-header">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  </section>
);

function Index() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const update = () =>
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Edmonton",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid-layout">
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid-sidebar flex flex-col justify-between"
        >
          <a href="/" className="name-display block transition-opacity hover:opacity-80">
            Mohamed Yusuf
          </a>
          <nav className="mb-8 flex flex-col gap-3">
            <a href="#about" className="nav-link">About</a>
            <Link to="/work" className="nav-link">Work</Link>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid-main flex flex-col"
        >
          <section id="about" className="mb-16 pt-8 lg:pt-16">
            <p className="body-text max-w-lg">
              I'm Mohamed Yusuf, based in Edmonton. After working in marketing and sales, I'm moving into product
              management. I like understanding what people need and deciding what to build first.
            </p>
            <a href="#about-full" className="muted-link mt-6 inline-flex items-center gap-1 text-base">
              About Me <ArrowUpRight className="h-4 w-4" />
            </a>
          </section>

          <section id="work" className="flex-1">
            <h2 className="section-header">Work</h2>
            <Link to="/work" className="work-item group">
              <span className="work-item-title">LinkedIn SkillPathway <ArrowUpRight className="work-item-arrow shrink-0" /></span>
              <span className="work-item-year">2026</span>
            </Link>
            <p className="body-text mt-6 max-w-lg">
              A course plan for people changing careers. I built and tested a prototype, then recommended holding launch until accuracy problems were fixed and retested.
            </p>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid-secondary flex flex-col justify-between"
          id="contact"
        >
          <div className="pt-8 lg:pt-16">
            <h2 className="contact-heading">
              Get in
              <br />
              touch
            </h2>
          </div>
          <div className="flex flex-col gap-8 pb-8">
            <div className="text-sm text-muted-foreground">
              <p>Edmonton, Alberta</p>
              <p>{currentTime}</p>
            </div>
            <div className="flex justify-end">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="group" aria-label="Contact Mohamed on LinkedIn">
                <ArrowUpRight className="arrow-large transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Section id="about-full" title="About">
        <div className="space-y-6">
          <p className="body-text">
            I'm a marketing and international business graduate moving into product management. I'm looking for my first PM role.
          </p>
          <p className="body-text">
            In telesales, I tailored each pitch to what the customer needed and{" "}
            <span className="font-semibold text-foreground">raised qualified lead conversion by 25% in six months</span>.
          </p>
          <p className="body-text">
            That work taught me to listen before suggesting a solution. I bring that habit to product decisions, as shown in my SkillPathway case study.
          </p>
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-8">
          {[
            ["Bachelor's Degree in Marketing and International Business", "University of Greenwich, London, United Kingdom. Delivered at MSA University, Cairo, Egypt"],
            ["Product Management", "Udacity"],
            ["Social Media Marketing Certification", "Meta, via Coursera"],
          ].map(([t, s]) => (
            <div key={t}>
              <p className="text-lg font-normal text-foreground">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s}</p>
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="border-r border-border p-6 lg:col-span-2 lg:p-8">
            <p className="text-sm text-muted-foreground">© Mohamed Yusuf</p>
          </div>
          <div className="flex items-center justify-between p-6 lg:col-span-10 lg:p-8">
            <div className="flex gap-6">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="muted-link text-sm">LinkedIn</a>
            </div>
            <p className="text-sm text-muted-foreground">Edmonton, Alberta</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
