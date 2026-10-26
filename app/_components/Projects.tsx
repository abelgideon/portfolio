import { ArrowRightCircle } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ethio Learners LMS",
  },
  {
    id: 2,
    title: "Course Compiler",
  },
  {
    id: 3,
    title: "Job Tracker",
  },
  {
    id: 4,
    title: "Administrator Bot",
  },
  {
    id: 5,
    title: "Static Site Generator",
  },
  {
    id: 6,
    title: "Task Manager",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mt-10 md:mt-0 md:max-w-[80%] mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mt-15 md:mt-0 uppercase">
        Projects
      </h1>
      <p className="text-muted-foreground mt-1 mb-5 md:mb-10">
        A selection of things I&apos;ve built.
      </p>
      {projects.map((project) => (
        <ProjectCard key={project.id} title={project.title} />
      ))}
    </div>
  );
}

function ProjectCard({ title }: { title: string }) {
  return (
    <div className="flex items-center h-20 md:h-30 justify-between border-b hover:bg-black/50 md:p-5 cursor-pointer">
      <p className="text-xl md:text-3xl">{title}</p>

      <ArrowRightCircle className="size-6 md:size-7" />
    </div>
  );
}
