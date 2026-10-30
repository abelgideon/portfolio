import UnderlineToBackground from "@/components/fancy/text/underline-to-background";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-between text-center gap-3 uppercase items-center sticky top-0 z-50 pt-8">
      <div>
        <p className="text-xl">Abel Gideon</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={"border-0 md:hidden"}
          render={<Button variant="outline" />}
        >
          <MenuIcon className="size-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <a href="#home">
              <DropdownMenuItem>Home</DropdownMenuItem>
            </a>
            <a href="#projects">
              <DropdownMenuItem>Projects</DropdownMenuItem>
            </a>
            <a href="#certificates">
              <DropdownMenuItem>Certificates</DropdownMenuItem>
            </a>
            <a href="#skills">
              <DropdownMenuItem>Skills</DropdownMenuItem>
            </a>
            <a href="#contact">
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </a>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="md:flex justify-center gap-4 hidden">
        <a href="#home">
          <UnderlineToBackground
            targetTextColor="#000"
            className="cursor-pointer"
          >
            Home
          </UnderlineToBackground>
        </a>
        <a href="#projects">
          <UnderlineToBackground
            targetTextColor="#000"
            className="cursor-pointer"
          >
            Projects
          </UnderlineToBackground>
        </a>
        <a href="#certificates">
          <UnderlineToBackground
            targetTextColor="#000"
            className="cursor-pointer"
          >
            Certificates
          </UnderlineToBackground>
        </a>
        <a href="#skills">
          <UnderlineToBackground
            targetTextColor="#000"
            className="cursor-pointer"
          >
            Skills
          </UnderlineToBackground>
        </a>
        <a href="#contact">
          <UnderlineToBackground
            targetTextColor="#000"
            className="cursor-pointer"
          >
            Contact
          </UnderlineToBackground>
        </a>
      </div>
    </nav>
  );
}
