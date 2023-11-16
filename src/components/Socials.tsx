import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Socials() {
  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-3">&lt;Socials&gt;</h2>
      <div className="flex flex-row space-x-4 justify-center items-center">
        <a href="https://twitter.com/suman_kisku" target="_blank">
          <TwitterIcon className="w-6 h-6" />
        </a>
        <a href="https://github.com/SumanKisku" target="_blank">
          <GitHubIcon className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/sumankisku" target="_blank">
          <LinkedInIcon className="w-6 h-6" />
        </a>
      </div>
      <p className="font-bold text-xl mt-3">&lt;Socials &#47;&gt;</p>
    </div>
  );
}
