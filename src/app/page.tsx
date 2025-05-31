export const dynamic = "force-static";

import WorkExperience from "@/components/home/WorkExperience";
import { ProfileData } from "@/constants/WorkExperience";

export default function Home() {
  return (
    <main>
      <div className="portfolio-summary-container">
        <h1> Full Stack Developer</h1>
        <p className="portfolio-summary">
          Seasoned Senior Software Engineer with 10+ years of experience
          building scalable, high-performance web applications. Specialized in
          Javascript, React.js, Node.js, and PHP, with deep backend expertise in
          Golang and GraphQL. Proven track record of improving Core Web Vitals,
          optimizing front-end infrastructure, and leading end-to-end product
          initiatives. Strategic thinker and collaborative team player,
          consistently delivering impactful features across cross-functional
          teams.{" "}
        </p>
      </div>
      <WorkExperience workExperience={ProfileData.experiences} />
    </main>
  );
}
