"use client";
import { ArrowDownTrayIcon, PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
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
            <PencilIcon className="w-5 h-5 ml-1 stroke-[3px]" color="#d9d9d9" />
          </a>
        </li> */}
        <li>
          <a
            className="flex flex-row justify-center items-center"
            href="https://github.com/SumanKisku"
          >
            Github
            <Image
              src="/github.svg"
              alt="Github logo svg"
              className="w-5 h-5 ml-1"
              width={10}
              height={10}
              priority
            />
          </a>
        </li>
        {/* TODO: Upload resume on google drive */}
        {/* <li>
          <a className="flex flex-row justify-center items-center" href="#">
            Resume
            <ArrowDownTrayIcon
              className="w-5 h-5 ml-1 stroke-[3px]"
              color="#d9d9d9"
            />
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
