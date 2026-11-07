import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ArrowRight, FileCheck2, Search, ListChecks } from "lucide-react";
import type { ReactNode } from "react";

const FIGMA_URL = "https://www.figma.com/proto/1Eq1nSwkutzbyFAGjxN7an/Figma-basics?node-id=630-183&starting-point-node-id=607%3A28&t=t5jUGOMKYb97jH3H-1";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [
    { title: "LinkedIn SkillPathway | Mohamed Yusuf" },
    { name: "description", content: "Mohamed Yusuf's product management case study. A career change prototype, scope decisions, testing findings and a decision to delay launch." },
    { property: "og:title", content: "LinkedIn SkillPathway | Mohamed Yusuf" },
    { property: "og:description", content: "How Mohamed Yusuf planned and tested a career change tool and recommended fixes before launch." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Work,
});

function Chapter({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} className="case-chapter"><h2 className="case-heading">{title}</h2><div className="space-y-6">{children}</div></section>;
}

function Work() {
  return <main className="case-page">
    <header className="case-nav">
      <Link to="/" className="font-medium">Mohamed Yusuf</Link>
      <Link to="/" className="inline-flex items-center gap-2"><ArrowLeft size={16} /> Back to home</Link>
    </header>
    <div className="case-intro">
      <p className="section-header">Product management case study</p>
      <h1 className="case-title">LinkedIn SkillPathway</h1>
      <p className="body-text mt-6 max-w-2xl">A career change tool that helps people see which skills they need and choose a course plan.</p>
      <p className="mt-6 text-sm">Udacity coursework, 2026. An independent concept, not affiliated with LinkedIn. It was not launched.</p>
      <dl className="case-facts">
        <div><dt>My role</dt><dd>Sole PM for the coursework</dd></div>
        <div><dt>What I made</dt><dd>Prototype, test plan and product requirements</dd></div>
        <div><dt>Final decision</dt><dd>Delay launch and fix accuracy problems</dd></div>
      </dl>
    </div>
    <div className="case-layout">
      <nav aria-label="Case study sections" className="case-toc">
        <a href="#problem">The problem</a><a href="#decisions">My decisions</a><a href="#flow">Core UX Flow</a><a href="#testing">Testing findings</a><a href="#evidence">Work behind the decisions</a><a href="#measures">Success measures</a><a href="#learning">What I learned</a>
      </nav>
      <article className="case-content">
        <Chapter id="problem" title="The problem">
          <p className="body-text">People changing careers can find courses and job listings, but still struggle to decide what to learn first. I focused on professionals in Canada moving into a new industry.</p>
          <p className="body-text">The example persona was Max, a Data Analyst aiming to become a Data Scientist. The goal was to give someone like Max a clear next step, with a reason for each course and an accurate time estimate.</p>
        </Chapter>
        <Chapter id="decisions" title="My decisions">
          <div><h3 className="font-semibold mb-2">Start with a plan</h3><p className="body-text">I put career planning before progress tracking. People need to know what to learn before tracking how far they have come.</p></div>
          <div><h3 className="font-semibold mb-2">Keep the first version small</h3><p className="body-text">I left out job matching, recruiter connections and tracking so I could test the course planning flow first.</p></div>
          <div><h3 className="font-semibold mb-2">Reduce repeated typing</h3><p className="body-text">The concept uses profile data to fill in the current role and skills. Each missing skill leads to a course recommendation.</p></div>
          <div><h3 className="font-semibold mb-2">Separate free planning from paid learning</h3><p className="body-text">The proposal made skill analysis and planning free. Hands on courses would be part of Premium at CAD 300 a year. This was a proposed price, not a tested result.</p></div>
        </Chapter>
        <Chapter id="flow" title="Core UX Flow">
          <div className="flow-diagram" aria-label="Career planning flow">
            <div><Search size={25} /><span>Choose a role</span></div><ArrowRight className="flow-connector" size={22} />
            <div><ListChecks size={25} /><span>Compare skills</span></div><ArrowRight className="flow-connector" size={22} />
            <div><FileCheck2 size={25} /><span>Build a plan</span></div>
          </div>
          <ol className="space-y-6">
            <li><h3 className="font-semibold">1. Find Your Career Path</h3><p className="body-text mt-2">Choose a target role. The current role and skills fill in from the profile.</p></li>
            <li><h3 className="font-semibold">2. Your Skill Gaps</h3><p className="body-text mt-2">See a projected role match, skills that carry over and skills to learn.</p></li>
            <li><h3 className="font-semibold">3. Next Steps</h3><p className="body-text mt-2">Get recommended courses, time estimates and a timeline.</p></li>
          </ol>
          <a href={FIGMA_URL} target="_blank" rel="noopener noreferrer" className="case-link">View Figma prototype <ArrowUpRight size={17} /></a>
        </Chapter>
        <Chapter id="testing" title="Why I recommended delaying launch">
          <p className="body-text">Testing found a skill incorrectly marked as transferable and a course plan total that did not match the course times. I recommended fixing both and testing again before launch.</p>
          <figure className="accuracy-figure">
            <figcaption className="font-semibold">The time estimate did not add up</figcaption>
            <div className="accuracy-comparison"><div><p className="text-sm">Displayed plan total</p><p className="finding-value">4 hrs</p></div><ArrowRight size={24} /><div><p className="text-sm">Sum of course times</p><p className="finding-value">3 hrs 55 min</p></div></div>
            <p className="text-sm">A five minute difference. Small errors can make people question the rest of the plan.</p>
          </figure>
          <p className="body-text">I also pushed back on moving the launch two weeks earlier. I wanted time to fix the problems and retest. The project did not launch, so there are no live user or business results.</p>
        </Chapter>
        <Chapter id="evidence" title="Work behind the decisions">
          <ul className="evidence-list">
            <li><h3>Design sprint</h3><p className="body-text">I grouped problem framing notes into themes, built the Figma prototype and ran a usability session.</p></li>
            <li><h3>Product requirements</h3><p className="body-text">I defined six essential features. Back navigation, skill ordering and a saved plan summary came next. A role dropdown was a later improvement.</p></li>
            <li><h3>Test plan</h3><p className="body-text">I wrote nine functional and quality test cases, plus an internal feedback survey. I checked feature readiness before making the launch decision.</p></li>
            <li><h3>Launch proposal</h3><p className="body-text">I estimated about 6.94 million potential users in Canada, compared Coursera, Udemy and Skillsoft, and proposed pricing, acquisition channels, risks and an experiment.</p></li>
          </ul>
          <p className="body-text">In a separate prioritization exercise, I ranked six competing issues. A sign in outage came first, followed by privacy work needed before launch.</p>
        </Chapter>
        <Chapter id="measures" title="How I would measure success">
          <p className="body-text">These were targets in the product requirements, not measured results.</p>
          <dl className="metric-list">
            <div><dt>Free users becoming paid users in year one</dt><dd>3% to 5%</dd></div>
            <div><dt>Users completing their plan in year one</dt><dd>40% to 60%</dd></div>
            <div><dt>Correct profile details on the first try</dt><dd>At least 99%</dd></div>
            <div><dt>Plan totals matching course times</dt><dd>100%</dd></div>
          </dl>
        </Chapter>
        <Chapter id="learning" title="What I learned">
          <p className="body-text">Accurate recommendations mattered more than adding features. One usability session was not enough to catch every problem.</p>
          <p className="body-text">Next time, I would test with a wider group before making a launch decision and check the skill data and course totals earlier.</p>
        </Chapter>
      </article>
    </div>
    <footer className="case-nav border-t border-border"><Link to="/" className="case-link"><ArrowLeft size={17} /> Back to home</Link><a href="https://www.linkedin.com/in/mohamed-ahmed-yusuf/" target="_blank" rel="noopener noreferrer" className="case-link">LinkedIn <ArrowUpRight size={17} /></a></footer>
  </main>;
}