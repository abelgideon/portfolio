"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ArrowRight, ArrowUpRightFromSquare, XIcon } from "lucide-react";
import { useState } from "react";

import { useIsMobile } from "@/hooks/user-mobile";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    title: "Ethio Learners LMS",
    description:
      "A full-stack learning management platform for browsing courses, enrolling in lessons, tracking learning progress, and managing learning content, with authentication and Stripe payment integration.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    image: "/ethio-learners-lms.png",
    liveLink: "https://ethiolearners.vercel.app/",
    gitLink: "https://github.com/abelgideon/ethio-learners-lms",
  },
  {
    id: 2,
    title: "Course Compiler",
    description:
      "A learning platform that transforms YouTube playlists into structured courses, with a focused learning experience, authentication, playlist synchronization, and progress tracking.",
    techStack: ["Next.js", "React", "PostgreSQL", "Drizzle ORM", "Better Auth"],
    image: "/course-compiler.png",
    liveLink: "https://course-compiler.vercel.app/",
    gitLink: "https://github.com/abelgideon/course-compiler",
  },
  {
    id: 3,
    title: "Tido Task Manager",
    description:
      "A responsive task management application for creating and organizing tasks, setting priorities, tracking statuses, visualizing productivity, and managing tasks with drag-and-drop and dark mode.",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "Recharts",
    ],
    image: "/tido-task-manager.png",
    liveLink: "https://tido-manager.vercel.app/",
    gitLink: "https://github.com/abelgideon/task-manager-v2",
  },
  {
    id: 4,
    title: "Job Manager",
    description:
      "A job application tracking application that helps users organize job opportunities and manage application progress through a full-stack web interface.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/job-manager.png",
    liveLink: "https://job-manager-1ix9.vercel.app/",
    gitLink: "https://github.com/abelgideon/job-manager",
  },
  {
    id: 5,
    title: "DevStore",
    description:
      "An e-commerce frontend featuring product browsing, search and filtering, a persistent shopping cart, simulated checkout, and order history.",
    techStack: ["React", "React Router", "CSS", "LocalStorage"],
    image: "/devstore.png",
    liveLink: "https://dev-store-eta.vercel.app/",
    gitLink: "https://github.com/abelgideon/dev-store",
  },
  {
    id: 6,
    title: "Administration Telegram Bot",
    description:
      "A Telegram bot with user registration and administrative tools for listing users, promoting users to administrators, removing users, and navigating paginated user lists.",
    techStack: ["Node.js", "Telegraf", "Sequelize", "PostgreSQL", "dotenv"],
    image: "/administration-telegram-bot.png",
    liveLink: "https://t.me/UserAdministrationBot",
    gitLink: "https://github.com/abelgideon/administration-telegram-bot",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mt-10 md:mt-0 md:max-w-[80%] mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mt-15 md:mt-0 uppercase">
        Projects
      </h1>
      <p className="text-muted-foreground mt-2 mb-5 md:mb-10">
        A selection of things I&apos;ve built.
      </p>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          gitLink={project.gitLink}
          liveLink={project.liveLink}
          techStack={project.techStack}
        />
      ))}
    </div>
  );
}

function ProjectCard({
  title,
  description,
  techStack,
  image,
  liveLink,
  gitLink,
}: {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink: string;
  gitLink: string;
}) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      showSwipeHandle={isMobile}
      swipeDirection={isMobile ? "down" : "right"}
    >
      <DrawerTrigger
        render={
          <div className="flex items-center h-20 md:h-30 justify-between border-b hover:bg-[#161616] md:p-5 cursor-pointer group">
            <p className="text-xl md:text-3xl">{title}</p>
            <ArrowRight
              className="size-6 opacity-0 -translate-x-1.5
                         group-hover:opacity-100 group-hover:translate-x-0
                         transition-all duration-300 ease-out"
            />
          </div>
        }
        nativeButton={false}
      >
        {" "}
      </DrawerTrigger>
      <DrawerContent className="z-51">
        <div className="p-4 md:p-8">
          <div className="flex justify-end">
            <DrawerClose
              nativeButton={false}
              render={
                <XIcon className="text-muted-foreground cursor-pointer md:mt-2 md:mr-2" />
              }
            />
          </div>
          <h1 className="text-xl md:text-4xl font-bold mt-1 md:mt-10">
            {title}
          </h1>
          <div className="relative mt-8 aspect-video w-full rounded-sm overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex gap-5 mt-4">
            <a
              target="_blank"
              href={liveLink}
              className={cn(buttonVariants(), "flex-1")}
            >
              <ArrowUpRightFromSquare className="mr-1" />
              Live Demo
            </a>
            <a
              target="_blank"
              href={gitLink}
              className={cn(buttonVariants({ variant: "outline" }), "flex-1")}
            >
              <FaGithub className="mr-1" />
              Source Code
            </a>
          </div>

          <p className="text-lg font-bold border-b uppercase pb-2 mt-6">
            project details
          </p>
          <p className="text-[16px] text-muted-foreground mt-2 leading-relaxed">
            {description}
          </p>
          <p className="text-lg font-bold border-b uppercase pb-2 mt-8 mb-3">
            tech stack
          </p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((item, idx) => (
              <p
                className="text-[13px] py-2 px-4 bg-[#1b1b1b] rounded-lg border"
                key={idx}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
