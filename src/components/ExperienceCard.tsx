import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Experience } from "@/data/experience";

export default function ExperienceCard({
  title,
  description,
  duration,
  join_exit,
  bullet_points,
  proof_link,
}: Experience) {
  return (
    <div className="gradient-border mb-3 bg-[#1c1b1b]">
      <div className="flex flex-row">
        <div className="px-6 py-4 lg:py-14 lg:px-12 flex-1">
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-lg md:text-xl">
              {title} - {duration}
            </h2>
            <h3 className="text-right">{join_exit}</h3>
          </div>
          <p className="font-normal text-base">{description}</p>
          <ul className="list-disc pl-4 mt-5">
            {bullet_points?.map((point) => {
              return (
                <li key={crypto.randomUUID()}>
                  {point}
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="flex flex-col py-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center items-center w-1/5">
          <a href={`${deploy_link}`} target="_blank">
            <LaunchIcon className="h-8 w-8" />
          </a>
          <a href={`${github_link}`} target="_blank">
            <GitHubIcon className="h-8 w-8" />
          </a>
        </div> */}
      </div>
    </div>
  );
}
