import { randomUUID } from "crypto";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/data/experience";
import { Experience } from "@/data/experience";

export default function Experiences() {
  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-3">&lt;Experiences&gt;</h2>
      {experiences.map(
        ({
          title,
          description,
          duration,
          join_exit,
          proof_link,
          bullet_points,
        }) => {
          return (
            <ExperienceCard
              key={randomUUID()}
              title={`${title}`}
              duration={`${duration}`}
              join_exit={`${join_exit}`}
              proof_link={`${proof_link}`}
              description={`${description}`}
              bullet_points={bullet_points}
            />
          );
        }
      )}
      <p className="font-bold text-xl mt-3">&lt;Experiences &#47;&gt;</p>
    </div>
  );
}
