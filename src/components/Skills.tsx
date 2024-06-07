
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Responsive Web Development",
  "Git",
  "Tailwind CSS",
  "ReactJS",
  "Redux",
  "RESTful APIs",
  "Node.js",
  "MongoDB",
  "Problem Solving",
];

export default function Skills() {
    return (
      <div className="p-4">
        <h2 className="font-bold text-xl mb-3">&lt;Skills&gt;</h2>
        <div className="flex flex-row flex-wrap gap-1">
            {
                skills.map((skill) => {
                    return (
                      <div key={skill} className="px-3 py-2 bg-[#1c1b1b] whitespace-nowrap rounded-lg text-white text-sm">
                        {skill}
                      </div>
                    );
                })
            }
        </div>
        <p className="font-bold text-xl mt-3">&lt;Skills &#47;&gt;</p>
      </div>
    );
}
