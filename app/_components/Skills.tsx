import { EvervaultCard } from "@/components/ui/evervault-card";

const skills = [
  "Next.js",
  "React",
  "Typescript",
  "Go",
  "Node.js",
  "Python",
  "MongoDB",
  "Git",
];

export default function SkillsPage() {
  return (
    <div className="mt-10 md:mt-30 md:max-w-[80%] mx-auto">
      <h1
        id="skills"
        className="text-3xl md:text-5xl font-bold mt-15 md:mt-0 uppercase"
      >
        Skills
      </h1>
      <p className="text-muted-foreground mt-2 mb-5 md:mb-10">
        Technologies and tools I work with.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {skills.map((skill, idx) => (
          <MyEvervaultCard key={idx} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function MyEvervaultCard({ skill }: { skill: string }) {
  return (
    <div className="flex flex-col items-start border relative h-40 md:h-80">
      <EvervaultCard text={skill} />
    </div>
  );
}
