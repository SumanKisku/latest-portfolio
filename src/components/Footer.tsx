import { HeartIcon } from "@heroicons/react/20/solid";

export default function Footer() {
    return (
      <footer className="my-4">
        <p className="font-bold text-xl">&lt;Suman &#47;&gt;</p>
        <p className="font-bold flex flex-row items-center justify-center"> Suman<HeartIcon className="w-5 h-5 mx-2" /> {new Date().getFullYear()}</p>
      </footer>
    );
}