import { WorkExperienceProps } from "./WorkExperience";
import Image from "next/image";

export default function Card(workExperience: WorkExperienceProps) {
  const {
    company,
    role,
    startDate,
    endDate,
    technologies,
    description,
    achievements,
    logo,
  } = workExperience;

  return (
    <div className="portfolio-card">
      <div className="portfolio-card__company_logo">
        <Image src={logo} alt={company} width={100} height={100} />
      </div>
      <div className="portfolio-card__company_details_container">
        <div className="portfolio-card__company_details">
          <h3>{company}</h3>
          <p>{role}</p>
          <p>
            {startDate} - {endDate}
          </p>
        </div>
        <div className="portfolio-card__technologies">
          <h3> Technologies Used </h3>
          <div className="portfolio-card__technologies_list">
            {technologies.map((technology) => (
              <p key={technology}>{technology}</p>
            ))}
          </div>
        </div>
        <div className="portfolio-card__description">
          <h3> Description </h3>
          {description.map((description) => (
            <p key={description}>{description}</p>
          ))}
        </div>
        <div className="portfolio-card__achievements">
          <h3> Achievements </h3>
          {achievements?.map((achievement) => (
            <p key={achievement}>{achievement}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
