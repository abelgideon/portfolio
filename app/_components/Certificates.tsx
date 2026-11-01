"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/user-mobile";
import { ArrowRight, ArrowUpRight, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export type Certificate = {
  id: number;
  title: string;
  link: string;
};

export type CertificateSource = {
  id: number;
  source: string;
  shortDescription: string;
  logo: string;
  certificates: Certificate[];
};

const certificates = [
  {
    id: 1,
    source: "Master.dev",
    shortDescription:
      "A learning platform offering hands-on courses in modern web development and JavaScript.",
    logo: "/certificates/master-dev.png",
    certificates: [
      {
        id: 1,
        title: "Next.js Fundamentals",
        link: "https://static.frontendmasters.com/ud/c/0721baad2e/bCWFkdHrBA/next-js-v4.pdf",
      },
      {
        id: 2,
        title: "JavaScript: The Hard Parts",
        link: "https://static.frontendmasters.com/ud/c/0721baad2e/fjjCYVxYTO/javascript-hard-parts-v2.pdf",
      },
    ],
  },
  {
    id: 2,
    source: "Cisco",
    shortDescription:
      "A global technology company specializing in networking, cybersecurity, and IT infrastructure.",
    logo: "/certificates/cisco.png",
    certificates: [
      {
        id: 1,
        title: "Networking Basics",
        link: "https://www.credly.com/badges/1b860e88-6dad-4b42-821f-de83277c7ac1",
      },
      {
        id: 2,
        title: "Introduction to Cybersecurity",
        link: "https://www.credly.com/badges/317c801b-9b48-4556-81d4-2888c7ca67a2",
      },
    ],
  },
  {
    id: 3,
    source: "freeCodeCamp",
    shortDescription:
      "A nonprofit organization providing free coding education and programming resources.",
    logo: "/certificates/freecodecamp.png",
    certificates: [
      {
        id: 1,
        title: "Responsive Web Design",
        link: "https://www.freecodecamp.org/certification/abel072903/responsive-web-design",
      },
      {
        id: 2,
        title: "JavaScript Algorithms and Data Structures",
        link: "https://www.freecodecamp.org/certification/abel072903/javascript-algorithms-and-data-structures-v8",
      },
      {
        id: 3,
        title: "Front End Development Libraries",
        link: "https://www.freecodecamp.org/certification/abel072903/front-end-development-libraries",
      },
      {
        id: 4,
        title: "Data Visualization",
        link: "https://www.freecodecamp.org/certification/abel072903/data-visualization",
      },
      {
        id: 5,
        title: "Relational Database",
        link: "https://www.freecodecamp.org/certification/abel072903/relational-database-v8",
      },
      {
        id: 6,
        title: "Back End Development and APIs",
        link: "https://www.freecodecamp.org/certification/abel072903/back-end-development-and-apis",
      },
    ],
  },
  {
    id: 5,
    source: "Meta",
    shortDescription:
      "A technology company building social platforms, digital products, and immersive technologies.",
    logo: "/certificates/meta.png",
    certificates: [
      {
        id: 1,
        title: "Introduction to Databases for Back-End Development",
        link: "https://www.coursera.org/account/accomplishments/verify/4WTQDCC76HYF",
      },
      {
        id: 2,
        title: "Introduction to Back-End Development",
        link: "https://www.coursera.org/account/accomplishments/verify/FGRBH7HXYU2G",
      },
      {
        id: 3,
        title: "Programming in Python",
        link: "https://www.coursera.org/account/accomplishments/verify/B3VW72LR8RRB",
      },
      {
        id: 4,
        title: "Version Control",
        link: "https://www.coursera.org/account/accomplishments/verify/UYE4L9AKZKMV",
      },
      {
        id: 5,
        title: "Django Web Framework",
        link: "https://www.coursera.org/account/accomplishments/verify/2AGXC2VB8SA2",
      },
      {
        id: 6,
        title: "APIs",
        link: "https://www.coursera.org/account/accomplishments/verify/LV883BCLRVZQ",
      },
    ],
  },
  {
    id: 6,
    source: "Coursera",
    shortDescription:
      "An online learning platform connecting learners with courses from universities and leading companies.",
    logo: "/certificates/coursera.png",
    certificates: [
      {
        id: 1,
        title: "Data Analysis Using Python",
        link: "https://www.coursera.org/account/accomplishments/verify/8JSCELH8KL4K?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      },
    ],
  },
  {
    id: 7,
    source: "Boot.dev",
    shortDescription:
      "An interactive learning platform focused on backend development and computer science.",
    logo: "/certificates/boot-dev.png",
    certificates: [
      {
        id: 1,
        title: "Learn Web Security in Go",
        link: "https://www.boot.dev/certificates/867046d4-f3f0-4bdc-8f54-7d425f5bae82",
      },
      {
        id: 2,
        title: "Learn Docker",
        link: "https://www.boot.dev/certificates/e1e6fc66-119c-439c-9bcd-c44a77a70488",
      },
      {
        id: 3,
        title: "Learn HTTP Servers in Go",
        link: "https://www.boot.dev/certificates/21798519-be5a-48cc-a2f8-9cb0e9650a76",
      },
      {
        id: 4,
        title: "Learn SQL",
        link: "https://www.boot.dev/certificates/d90d28be-37e2-415b-9b72-88e9e171174c",
      },
      {
        id: 5,
        title: "Learn HTTP Clients in Go",
        link: "https://www.boot.dev/certificates/3e3622b6-35bc-4403-ba0c-58463d83e005",
      },
      {
        id: 6,
        title: "Learn Go",
        link: "https://www.boot.dev/certificates/f19683c6-06a4-4ed0-a792-007d0676e953",
      },
      {
        id: 7,
        title: "Learn Memory Management in C",
        link: "https://www.boot.dev/certificates/ca540808-0028-4e54-a44c-18e0cd759f4d",
      },
      {
        id: 8,
        title: "Learn Data Structures and Algorithms in Python",
        link: "https://www.boot.dev/certificates/a1c1bf59-6dc8-4ae9-b73e-6c06b4201d67",
      },
      {
        id: 9,
        title: "Learn Functional Programming in Python",
        link: "https://www.boot.dev/certificates/3b42a786-a603-4fe5-a772-ff3a1633df2f",
      },
      {
        id: 10,
        title: "Learn Object Oriented Programming in Python",
        link: "https://www.boot.dev/certificates/689a06a3-5775-48c6-9f51-56609bb6697a",
      },
      {
        id: 11,
        title: "Learn Git",
        link: "https://www.boot.dev/certificates/ef19f9ed-3e45-4f70-8071-e731e4945981",
      },
      {
        id: 12,
        title: "Learn Linux",
        link: "https://www.boot.dev/certificates/916f7c73-d2fe-40ca-ab33-23775c5f97db",
      },
      {
        id: 13,
        title: "Learn Python for Beginners",
        link: "https://www.boot.dev/certificates/f4be0805-2e16-41ec-8f77-7bef9e2ed686",
      },
      {
        id: 14,
        title: "Build a Blog Aggregator in Go",
        link: "https://www.boot.dev/certificates/575884d9-79bd-4499-be42-4107948b0da9",
      },
      {
        id: 15,
        title: "Build a Pokedex in Go",
        link: "https://www.boot.dev/certificates/c4676f2d-86e0-4056-805a-b6e8e2e59d6a",
      },
      {
        id: 16,
        title: "First Personal Project",
        link: "https://www.boot.dev/certificates/9c18fdc4-0136-4ad0-86c6-18c7149cb8d1",
      },
      {
        id: 17,
        title: "Build a Static Site Generator in Python",
        link: "https://www.boot.dev/certificates/274ccc1f-ca86-4066-9707-b42bb8ae5cdb",
      },
      {
        id: 18,
        title: "Build an AI Agent in Python",
        link: "https://www.boot.dev/certificates/240e25f4-9469-4229-88f1-f00c7776b14a",
      },
      {
        id: 19,
        title: "Build Asteroids using Python and Pygame",
        link: "https://www.boot.dev/certificates/aee298c2-7abc-424b-acc4-4959ef9b506e",
      },
      {
        id: 20,
        title: "Build a BookBot in Python",
        link: "https://www.boot.dev/certificates/1d09e3c6-47f1-4ba3-9e69-6bdeab5ae997",
      },
      {
        id: 21,
        title: "Learn Pub/Sub in RabbitMQ and Go",
        link: "https://www.boot.dev/certificates/847e28a1-8274-40a2-a9f0-3305d4f31ea2",
      },
    ],
  },
];

export default function CertificatesPage() {
  return (
    <div className="mt-10 md:mt-30 md:max-w-[80%] mx-auto">
      <h1
        id="certificates"
        className="text-3xl md:text-5xl font-bold mt-15 md:mt-0 uppercase"
      >
        Certificates
      </h1>
      <p className="text-muted-foreground mt-2 mb-5 md:mb-10">
        Certifications and achievements I&apos;ve earned.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-2">
        {certificates.map((certificate) => (
          <Source certificate={certificate} key={certificate.id} />
        ))}
      </div>
    </div>
  );
}

function Source({ certificate }: { certificate: CertificateSource }) {
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
          <div className="bg-[#161616] border py-2 px-10 cursor-pointer flex justify-between items-center group md:h-35 h-25">
            <div className="flex justify-center items-center gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                <Image
                  src={certificate.logo}
                  alt={`${certificate.source} logo`}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-3xl">{certificate.source}</h1>
                <p className="hidden md:block text-[16px] text-muted-foreground md:max-w-100">
                  {certificate.shortDescription}
                </p>
              </div>
            </div>

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
          <div className="flex justify-center items-center gap-6 mt-1 md:mt-10 mb-6 md:mb-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white p-2">
              <Image
                src={certificate.logo}
                alt={`${certificate.source} logo`}
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl">{certificate.source}</h1>
              <p className="hidden md:block text-[16px] text-muted-foreground md:max-w-100">
                {certificate.shortDescription}
              </p>
            </div>
          </div>
          <ScrollArea className="h-[calc(100vh-250px)] w-full">
            {certificate.certificates.map((cert) => (
              <Certificate key={cert.id} title={cert.title} link={cert.link} />
            ))}
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function Certificate({ title, link }: { title: string; link: string }) {
  return (
    <a target="_blank" href={link}>
      <div className="flex items-center justify-between border-b hover:bg-[#161616] p-5 cursor-pointer group">
        <p className="md:text-xl">{title}</p>
        <ArrowUpRight
          className="size-6 opacity-0
                     group-hover:opacity-100"
        />
      </div>
    </a>
  );
}
