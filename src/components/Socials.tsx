import Image from "next/image";

export default function Socials() {
  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-3">&lt;Socials&gt;</h2>
      <div className="flex flex-row space-x-4 justify-center items-baseline">

      <a href="https://twitter.com/suman_kisku" target="_blank">
        <Image
          src="/twitter.svg"
          alt="Twitter logo svg"
          className="w-5 h-5"
          width={10}
          height={10}
          priority
        />
      </a>
      <a href="https://github.com/SumanKisku" target="_blank">
        <Image
          src="/github.svg"
          alt="Github logo svg"
          className="w-5 h-5"
          width={10}
          height={10}
          priority
        />
      </a>
      <a href="https://www.linkedin.com/in/sumankisku" target="_blank">
        <Image
          src="/linkedin.svg"
          alt="Linkedin logo svg"
          className="w-5 h-5"
          width={10}
          height={10}
          priority
          />
      </a>
          </div>
      <p className="font-bold text-xl mt-3">&lt;Socials &#47;&gt;</p>
    </div>
  );
}
