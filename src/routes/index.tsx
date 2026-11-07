import { createFileRoute } from "@tanstack/react-router";
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
        content: "Case study: LinkedIn SkillPathway, from design sprint to a No-Go launch call and PRD.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FIGMA_URL =
  "https://www.figma.com/proto/1Eq1nSwkutzbyFAGjxN7an/Figma-basics?node-id=630-183&starting-point-node-id=607%3A28&t=t5jUGOMKYb97jH3H-1";
const EMAIL = "";
const LINKEDIN = "https://www.linkedin.com/in/mohamed-ahmed-yusuf/";

const works = [{ title: "LinkedIn SkillPathway", year: "2026", link: "#case-study" }];

const flow = [
  { name: "Find Your Career Path", text: "Pick a target role. Current role and skills auto-fill from the profile." },
  { name: "Your Skill Gaps", text: "See a projected match, skills that transfer, and skills to build." },
  { name: "Next Steps", text: "Get recommended courses with exact time estimates and a timeline." },
];

const evidence = [
  {
    lead: "Design sprint.",
    rest: "Framed the problem with How Might We notes, sorted them into themes, and ran a usability session on the Figma prototype.",
  },
  {
    lead: "PRD with P0 to P2 scope.",
    rest: "6 P0 features for the core flow. Back navigation, skill order, and a saved plan summary as P1. Role dropdown as P2.",
  },
  {
    lead: "Test plan.",
    rest: "9 functional and non-functional test cases plus a dogfood survey.",
  },
  {
    lead: "Go / No-Go review.",
    rest: "Checked each feature against testing, dogfood, and readiness criteria before the launch call.",
  },
  {
    lead: "Launch PRD.",
    rest: "Sized the Canadian market at about 6.94 million potential users, compared Coursera, Udemy, and Skillsoft, and planned acquisition channels.",
  },
];

const thinking = [
  {
    lead: "Direction before tracking.",
    rest: "Put Find Your Career Path ahead of progress tracking. People need a plan before they can track it.",
  },
  {
    lead: "Focused first version.",
    rest: "Cut job matching, recruiter connections, and tracking to test the core value first.",
  },
  {
    lead: "Accuracy as a launch gate.",
    rest: "Recommended No-Go after tests found a wrong transferable skill and a plan total of 4 hrs instead of 3 hrs 55 min.",
  },
  {
    lead: "Quality over speed.",
    rest: "Pushed back on moving launch two weeks earlier to protect time to fix and retest.",
  },
  {
    lead: "User harm first.",
    rest: "Ranked six competing issues. A sign-in outage came first, legal privacy work before launch came next.",
  },
];

const phases = [
  { name: "Phase 1 Design Sprint", text: "Framed the problem, built the Figma prototype, and ran a usability session." },
  { name: "Phase 2 Product Development", text: "Wrote the test plan and dogfood survey, then made a No-Go call pending fixes." },
  { name: "Phase 3 Product Launch", text: "Wrote the launch PRD covering market, pricing, channels, risks, and an A/B test." },
];

const metrics = [
  { lead: "Free to paid:", rest: "3% to 5% in year 1" },
  { lead: "Plan completion:", rest: "40% to 60% in year 1" },
  { lead: "Auto-fill accuracy:", rest: "99% or more on the first try" },
  { lead: "Plan time accuracy:", rest: "100% of totals match course times" },
];

const learnings = [
  { lead: "Trust is the product.", rest: "Accurate skills and time estimates matter more than extra features." },
  { lead: "Test wider before deciding.", rest: "One session missed bugs. A bigger dogfood group would catch more." },
  { lead: "Readiness beats speed.", rest: "A clear No-Go protects users and credibility." },
];

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="mb-12">
    <h3 className="mb-3 text-lg font-normal text-foreground">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const LeadBullets = ({ items }: { items: { lead: string; rest: string }[] }) => (
  <ul className="list-disc space-y-3 pl-5">
    {items.map((item) => (
      <li key={item.lead} className="body-text">
        <span className="font-semibold text-foreground">{item.lead}</span> {item.rest}
      </li>
    ))}
  </ul>
);

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
            Mohamed
            <br />
            Yusuf
          </a>
          <nav className="mb-8 flex flex-col gap-3">
            <a href="#about" className="nav-link">About</a>
            <a href="#work" className="nav-link">Work</a>
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
              I'm Mohamed Yusuf, moving into product management from marketing and sales in Edmonton. I turn what
              customers say into focused product decisions.
            </p>
            <a href="#about-full" className="muted-link mt-6 inline-flex items-center gap-1 text-base">
              About Me <ArrowUpRight className="h-4 w-4" />
            </a>
          </section>

          <section id="work" className="flex-1">
            <h2 className="section-header">Work</h2>
            <div className="space-y-6">
              {works.map((work, index) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <a href={work.link} className="work-item group">
                    <span className="work-item-title">
                      {work.title}
                      <ArrowUpRight className="work-item-arrow opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                    <span className="work-item-year">{work.year}</span>
                  </a>
                </motion.div>
              ))}
            </div>
            <p className="mt-12 max-w-lg text-base text-muted-foreground">
              Udacity Product Management coursework. Not affiliated with LinkedIn and not shipped.
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
              <a href={`mailto:${EMAIL}`} className="group" aria-label="Send email">
                <ArrowUpRight className="arrow-large transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Section id="case-study" title="LinkedIn SkillPathway">
        <Block title="Product Overview">
          <p className="body-text">
            A career-change tool concept for LinkedIn. It reads a member's profile and target role, shows which skills
            carry over and which are missing, and builds a course plan with exact time estimates.
          </p>
          <p className="body-text">
            The goal: every user leaves with a clear next step. Which course, how long, and why.
          </p>
        </Block>

        <Block title="My Role">
          <p className="body-text">
            Sole PM from problem framing to launch planning. Research, prototype, priorities, testing, the Go / No-Go
            call, and the launch PRD.
          </p>
        </Block>

        <Block title="Problem">
          <p className="body-text">
            Courses teach skills but don't say which ones you need. Job boards show openings but don't say if you're
            ready. Career changers don't know where to start.
          </p>
        </Block>

        <Block title="User">
          <p className="body-text">
            Professionals in Canada moving into a new industry. Example persona: Max, a Data Analyst aiming to become a
            Data Scientist.
          </p>
        </Block>

        <Block title="Solution">
          <p className="body-text">
            Use existing profile data to cut typing, tie each skill gap to a course, and show the real time commitment.
            Analysis and planning are free. Hands-on courses sit in Premium at CAD 300 per year.
          </p>
        </Block>

        <Block title="Core UX Flow">
          <ol className="list-none space-y-4 pl-0">
            {flow.map((step, i) => (
              <li key={step.name} className="body-text">
                <span className="text-foreground">
                  {i + 1}. {step.name}.
                </span>{" "}
                {step.text}
              </li>
            ))}
          </ol>
          <a href={FIGMA_URL} target="_blank" rel="noopener noreferrer" className="muted-link inline-flex items-center gap-1 text-base">
            View prototype <ArrowUpRight className="h-4 w-4" />
          </a>
        </Block>

        <Block title="Proof of Work">
          <LeadBullets items={evidence} />
        </Block>

        <Block title="PM Thinking">
          <LeadBullets items={thinking} />
        </Block>

        <Block title="Execution">
          {phases.map((phase) => (
            <div key={phase.name} className="mb-4">
              <p className="text-base font-normal text-foreground">{phase.name}</p>
              <p className="body-text mt-1">{phase.text}</p>
            </div>
          ))}
        </Block>

        <Block title="Metrics">
          <p className="body-text">Proposed PRD targets, not measured results.</p>
          <LeadBullets items={metrics} />
        </Block>

        <Block title="Key Learnings">
          <LeadBullets items={learnings} />
        </Block>
      </Section>

      <Section id="about-full" title="About">
        <div className="space-y-6">
          <p className="body-text">
            Marketing and International Business graduate with customer-facing work in Cairo and Edmonton.
          </p>
          <p className="body-text">
            In telesales, I tailored pitches to what each customer needed and{" "}
            <span className="font-semibold text-foreground">raised qualified lead conversion by 25% in six months</span>.
            At AKQA, I wrote creative briefs and prepared client quotations.
          </p>
          <p className="body-text">
            Years of listening to customers taught me to spot real needs fast. I now bring that to product work and am
            looking for an entry-level product management role.
          </p>
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-8">
          {[
            ["Bachelor's Degree in Marketing and International Business", "University of Greenwich, London, delivered at MSA University, Cairo"],
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
              <a href={`mailto:${EMAIL}`} className="muted-link text-sm">Email</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="muted-link text-sm">LinkedIn</a>
            </div>
            <p className="text-sm text-muted-foreground">Edmonton, Alberta</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
