import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Project } from "@/data/projects";

export default function ProjectCard({
  title,
  description,
  github_link,
  deploy_link,
  keywords,
}: Project) {
  return (
    <div className="gradient-border mb-3 bg-[#1c1b1b]">
      <div className="flex flex-row">
        <div className="px-6 py-4 lg:py-14 lg:px-12 flex-1">
          <h2 className="font-bold text-lg md:text-xl">{title}</h2>
          <p className="font-normal text-base">{description}</p>
          <div className="flex flex-row flex-wrap gap-2 pb-3 mt-2">
            {keywords.map((keyword) => {
              return (
                <div
                  key={keyword}
                  className="px-2 py-1 bg-gray-600 rounded text-xs"
                >
                  {keyword}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col py-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center items-center w-1/5">
          <a href={`${deploy_link}`} target="_blank">
            <LaunchIcon className="h-8 w-8" />
          </a>
          <a href={`${github_link}`} target="_blank">
            <GitHubIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
