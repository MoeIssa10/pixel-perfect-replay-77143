import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import findPathShotAsset from "../assets/skillpathway-find-path.png.asset.json";
const findPathShot = findPathShotAsset.url;
import skillGapsShotAsset from "../assets/skillpathway-skill-gaps.png.asset.json";
const skillGapsShot = skillGapsShotAsset.url;
import nextStepsShotAsset from "../assets/skillpathway-next-steps.png.asset.json";
const nextStepsShot = nextStepsShotAsset.url;
import findPathMobileAsset from "../assets/skillpathway-find-path-mobile.png.asset.json";
const findPathMobile = findPathMobileAsset.url;
import skillGapsMobileAsset from "../assets/skillpathway-skill-gaps-mobile.png.asset.json";
const skillGapsMobile = skillGapsMobileAsset.url;
import nextStepsMobileAsset from "../assets/skillpathway-next-steps-mobile.png.asset.json";
const nextStepsMobile = nextStepsMobileAsset.url;

const PRD_URL = "https://docs.google.com/document/d/14nX63kw5lnxO3TsK_15GiQTzlJbbn2pHdcJd8U0zNTk/edit?usp=sharing";
const DEV_DECK_URL = "https://docs.google.com/presentation/d/1q8AHc5sX1GUKv5o_-VMLvy8LqbMCINItb75hbomtnwg/edit?usp=sharing";
const FIGMA_URL = "https://www.figma.com/proto/1Eq1nSwkutzbyFAGjxN7an/Figma-basics?node-id=630-183&starting-point-node-id=607%3A28&t=t5jUGOMKYb97jH3H-1";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [
    { title: "LinkedIn SkillPathway | Mohamed Yusuf" },
    { name: "description", content: "Mohamed Yusuf's product management case study. A career change prototype, scope decisions, testing findings and a decision to hold launch until fixes pass retesting." },
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

function Shot({ desktop, mobile, alt, caption }: { desktop: string; mobile: string; alt: string; caption: string }) {
  return <figure className="case-figure">
    <picture>
      <source media="(max-width: 640px)" srcSet={mobile} width={754} height={535} />
      <img src={desktop} alt={alt} width={1159} height={706} loading="lazy" decoding="async" className="case-shot" />
    </picture>
    <figcaption className="case-caption">{caption}</figcaption>
  </figure>;
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
        <div><dt>Final decision</dt><dd>Hold launch until accuracy fixes pass retesting</dd></div>
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
          <div><h3 className="font-semibold mb-2">Separate free planning from paid learning</h3><p className="body-text">Skill analysis, the learning plan and beginner courses would be free. Hands on courses would be in Premium at CAD 300 a year, close to LinkedIn's existing Premium Career annual plan, so members would not learn a new price. No launch discounts were planned. This was a proposed price, not a tested result.</p></div>
          <div><h3 className="font-semibold mb-2">What I did not choose</h3><p className="body-text">I sketched eight ideas, narrowed them to two and chose career planning over progress tracking. Later, a director asked to launch two weeks early. I kept the planned date and said no to launching earlier, because the known bugs needed time to fix and retest.</p></div>
        </Chapter>
        <Chapter id="flow" title="Core UX Flow">
          <ol className="space-y-6">
            <li><h3 className="font-semibold">1. Find Your Career Path</h3><p className="body-text mt-2">Choose a target role. The current role and skills fill in from the profile.</p><Shot desktop={findPathShot} mobile={findPathMobile} alt="Find Your Career Path screen with Data Scientist as the target role and current role and skills filled in from the profile" caption="The target role dropdown does not work yet in the prototype. It shows where role choice would go." /></li>
            <li><h3 className="font-semibold">2. Your Skill Gaps</h3><p className="body-text mt-2">See a projected role match, skills that carry over and skills to learn.</p><Shot desktop={skillGapsShot} mobile={skillGapsMobile} alt="Your Skill Gaps screen showing transferable skills and skills to build for Data Scientist roles" caption="Python appears as a transferable skill even though the profile does not list it. The skills to build also have no order. Both were found in testing." /></li>
            <li><h3 className="font-semibold">3. Next Steps</h3><p className="body-text mt-2">Get recommended courses, time estimates and a timeline.</p><Shot desktop={nextStepsShot} mobile={nextStepsMobile} alt="Next Steps screen showing recommended courses, estimated time and a three week plan" caption="The plan total reads 4 hrs. The two courses add up to 3 hrs 55 min." /></li>
          </ol>
          <a href={FIGMA_URL} target="_blank" rel="noopener noreferrer" className="case-link">View Figma prototype <ArrowUpRight size={17} /></a>
        </Chapter>
        <Chapter id="testing" title="Why I recommended holding the launch">
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
            <li><h3>Design sprint</h3><p className="body-text">I built the Figma prototype and tested it with one person. They expected Back to go one step, wanted a suggested skill order and asked for a saved plan summary. These became P1 features.</p></li>
            <li><h3>Product requirements</h3><p className="body-text">I ranked ten features from P0 to P2, with the six essential ones first.</p></li>
            <li><h3>Test plan</h3><p className="body-text">I wrote nine test cases and a feedback survey, then used the results to make the launch call.</p><a href={DEV_DECK_URL} target="_blank" rel="noopener noreferrer" className="case-link mt-3">View the product development deck <ArrowUpRight size={17} /></a></li>
            <li><h3>Launch proposal</h3><p className="body-text">I sized the Canadian market at about 6.94 million potential users and proposed pricing, three channels and an A/B test.</p><a href={PRD_URL} target="_blank" rel="noopener noreferrer" className="case-link mt-3">View the product launch PRD <ArrowUpRight size={17} /></a></li>
            <li><h3>Prioritization</h3><p className="body-text">In a course ranking exercise, I put a scenario where users could not sign in first, ahead of failing tests and privacy work.</p></li>
          </ul>
        </Chapter>
        <Chapter id="measures" title="How I would measure success">
          <p className="body-text">These were targets in the product requirements, not measured results.</p>
          <dl className="metric-list">
            <div><dt>Free users becoming paid users in year one</dt><dd>3% to 5%</dd></div>
            <div><dt>Users completing their plan in year one</dt><dd>40% to 60%</dd></div>
            <div><dt>Correct profile details on the first try</dt><dd>At least 99%</dd></div>
            <div><dt>Plan totals matching course times</dt><dd>100%</dd></div>
          </dl>
          <div>
            <h3 className="font-semibold mb-2">A test I would run next</h3>
            <p className="body-text">The course scenario showed fast user growth but only 2% of course views turning into enrollments. This is scenario data, not real results.</p>
          </div>
          <ul className="evidence-list">
            <li><h3>Change</h3><p className="body-text">Rank the recommended courses and mark the first one Start here, with a short reason.</p></li>
            <li><h3>Success measure</h3><p className="body-text">Enrollment rising from 2% to at least 3%.</p></li>
            <li><h3>Guardrail</h3><p className="body-text">Week 2 retention stays at 50% or higher.</p></li>
          </ul>
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