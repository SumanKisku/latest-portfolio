"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import CreateIcon from "@mui/icons-material/Create";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import MyDrawer from "./MyDrawer";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between flex-1 mt-4">
      <header>
        <h1 className="font-bold text-xl">&lt;Suman&gt;</h1>
        <MyDrawer />
      </header>
      <ul className="hidden font-medium md:flex flex-row space-x-4 ">
        {/* <li>
          <a className="flex flex-row justify-center items-center" href="#">
            Blog
            <CreateIcon className="ml-1"/>
          </a>
        </li> */}
        <li>
          <a
            className="flex flex-row justify-center items-center"
            href="https://github.com/SumanKisku"
          >
            Github
            <GitHubIcon className="ml-1" />
          </a>
        </li>
        {/* TODO: Upload resume on google drive */}
        {/* <li>
          <a className="flex flex-row justify-center items-center" href="#">
            Resume
            <DownloadForOfflineIcon className="ml-1" />
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
