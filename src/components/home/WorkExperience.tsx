import Card from "./Card";

export type WorkExperienceProps = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  technologies: string[];
  description: string[];
  achievements?: string[];
  logo: string;
};

interface WorkExperienceComponentProps {
  workExperience: WorkExperienceProps[];
}

export default function WorkExperience({
  workExperience,
}: WorkExperienceComponentProps) {
  return (
    <div className="portfolio-work-experience">
      <h2>Work Experience</h2>
      {workExperience.map((experience) => (
        <Card key={experience.company} {...experience} />
      ))}
    </div>
  );
}
