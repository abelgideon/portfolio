import CertificatesPage from "./_components/Certificates";
import ContactPage from "./_components/Contact";
import HeroPage from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import ProjectsPage from "./_components/Projects";
import SkillsPage from "./_components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://abelgideon.vercel.app"),

  title: {
    default: "Abel Gideon | Full-Stack Engineer & Web Developer",
    template: "%s | Abel Gideon",
  },

  description:
    "Abel Gideon is a Full-Stack Engineer based in Addis Ababa, Ethiopia, specializing in React, Next.js, TypeScript, Node.js, and Go. Explore my projects, technical skills, and experience building practical web applications.",

  keywords: [
    "Abel Gideon",
    "Abel Gideon Portfolio",
    "Abel Gideon Developer",
    "Full-Stack Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Go Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Development Ethiopia",
    "Software Developer Addis Ababa",
    "Ethiopian Developer",
  ],

  authors: [
    {
      name: "Abel Gideon",
      url: "https://abelgideon.vercel.app",
    },
  ],

  creator: "Abel Gideon",
  publisher: "Abel Gideon",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Abel Gideon | Full-Stack Engineer & Web Developer",
    description:
      "Explore the portfolio of Abel Gideon, a Full-Stack Engineer building modern web applications with React, Next.js, TypeScript, Node.js, and Go.",
    url: "https://abelgideon.vercel.app",
    siteName: "Abel Gideon Portfolio",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Abel Gideon - Full-Stack Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abel Gideon | Full-Stack Engineer",
    description:
      "I'm Abel Gideon, a Full-Stack Engineer specializing in React, Next.js, TypeScript, Node.js, and Go. Explore my projects and work.",
    creator: "@abelgideontk7",
    images: ["/seo-banner.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abel Gideon",
  url: "https://abelgideon.vercel.app",
  image: "https://abelgideon.vercel.app/A.png",
  jobTitle: "Full-Stack Engineer",
  description:
    "Full-Stack Engineer specializing in React, Next.js, TypeScript, Node.js, and Go.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  sameAs: [
    "https://github.com/abelgideon",
    "https://www.linkedin.com/in/abelgideon",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Go",
    "Full-Stack Development",
    "Web Development",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="pb-4 pl-4 pr-4 md:pb-10 md:pl-10 md:pr-10">
        <Navbar />
        <HeroPage />
        <ProjectsPage />
        <CertificatesPage />
        <SkillsPage />
        <ContactPage />
      </div>
    </>
  );
}
