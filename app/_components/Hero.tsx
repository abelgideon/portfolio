import { Button } from "@/components/ui/button";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

function MyTerminal() {
  return (
    <Terminal>
      <TypingAnimation delay={0}>$ whoami</TypingAnimation>

      <AnimatedSpan delay={800} className="text-green-500 mb-5">
        Abel Gideon
      </AnimatedSpan>

      <TypingAnimation delay={1600}>$ role</TypingAnimation>

      <AnimatedSpan delay={2400} className="text-green-500 mb-5">
        Full Stack Engineer
      </AnimatedSpan>

      <TypingAnimation delay={3200}>$ location</TypingAnimation>

      <AnimatedSpan delay={4000} className="text-green-500 mb-5">
        Addis Ababa, ET
      </AnimatedSpan>

      <TypingAnimation delay={4800}>$ stack</TypingAnimation>

      <AnimatedSpan delay={5600} className="text-green-500">
        Frontend: HTML, CSS, JavaScript, React
      </AnimatedSpan>
      <AnimatedSpan delay={5600} className="text-green-500 mb-5">
        Backend: Go, Node.js, Express.js
      </AnimatedSpan>

      <TypingAnimation delay={6400}>$ socials</TypingAnimation>

      <AnimatedSpan delay={7200} className="text-green-500 flex gap-3">
        <a
          className="underline"
          target="_blank"
          href="https://linkedin.com/in/abelgideon"
        >
          Linkedin
        </a>
        <a
          className="underline"
          target="_blank"
          href="https://github.com/abelgideon"
        >
          Github
        </a>
        <a
          className="underline"
          target="_blank"
          href="mailto:abelgideontk7@gmail.com"
        >
          Email
        </a>
      </AnimatedSpan>
    </Terminal>
  );
}

export default function HeroPage() {
  return (
    <div className="md:flex pt-10 md:pt-67 md:max-w-[80%] md:mx-auto md:gap-40">
      <div className="hidden md:block">
        <h1 className="uppercase text-7xl font-bold">Building</h1>
        <h1 className="uppercase text-7xl font-bold">Full-Stack</h1>
        <h1 className="uppercase text-7xl font-bold">Solutions</h1>
        <p className="text-muted-foreground my-10">
          I build practical web applications with JavaScript, React, Node.js,
          and Go. Focused on clean code, thoughtful user experiences, and
          turning ideas into working products.
        </p>
        <Button className="uppercase">view my projects</Button>
      </div>

      <MyTerminal />
    </div>
  );
}
