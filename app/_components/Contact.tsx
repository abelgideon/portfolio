import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaTelegram } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <div className="mt-10 md:mt-30 md:max-w-[80%] mx-auto">
      <h1
        id="contact"
        className="text-3xl md:text-5xl font-bold mt-15 md:mt-0 uppercase"
      >
        Contact
      </h1>
      <p className="text-muted-foreground mt-2 mb-5 md:mb-10">
        Let&apos;s connect and build something together.
      </p>
      <div className="flex flex-col md:flex-row justify-around items-center broder rounded-lg bg-[#161616]  md:h-87.5 md:w-275 mx-auto mt-10 p-10 md:p-0 md:mt-30 md:mb-20 mb-15">
        <div className="flex gap-1 md:block md:gap-0 mb-5 md:mb-0">
          <h1 className="uppercase text-2xl md:text-6xl font-bold">
            Let&apos;s get in
          </h1>
          <h1 className="uppercase text-2xl md:text-6xl font-bold">touch.</h1>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <a target="_blank" href="https://github.com/abelgideon">
            <div className="w-21 h-21 md:w-30 md:h-30 border flex justify-center items-center cursor-pointer">
              <FaGithub className="size-14 md:size-16" />
            </div>
          </a>
          <a target="_blank" href="https://linkedin.com/in/abelgideon">
            <div className="w-21 h-21 md:w-30 md:h-30 border flex justify-center items-center cursor-pointer">
              <FaLinkedin className="size-14 md:size-16" />
            </div>
          </a>
          <a target="_blank" href="https://t.me/Abel007">
            <div className="w-21 h-21 md:w-30 md:h-30 border flex justify-center items-center cursor-pointer">
              <FaTelegram className="size-14 md:size-16" />
            </div>
          </a>
          <a target="_blank" href="mailto:abelgideontk7@gmail.com">
            <div className="w-21 h-21 md:w-30 md:h-30 border flex justify-center items-center cursor-pointer">
              <Mail className="size-14 md:size-16" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
