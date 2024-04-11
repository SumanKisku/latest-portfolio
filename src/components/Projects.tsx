import { randomUUID } from "crypto";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="p-4">
      <h2 className="font-extrabold text-xl mb-3">&lt;Projects&gt;</h2>
      {
        projects.map(({ title, description, github_link, deploy_link, keywords}) => {
          return (
            <ProjectCard
            key={randomUUID()}
              title={`${title}`}
              description={`${description}`}
              github_link={`${github_link}`}
              deploy_link={`${deploy_link}`}
              keywords={keywords}
            />
          );
        })
      }
      <p className="font-bold text-xl mt-3">&lt;Projects &#47;&gt;</p>
    </div>
  );
}
