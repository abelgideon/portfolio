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
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>Projects</DropdownMenuItem>
            <DropdownMenuItem>Skills</DropdownMenuItem>
            <DropdownMenuItem>Certificates</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="md:flex justify-center gap-4 hidden">
        <UnderlineToBackground
          targetTextColor="#000"
          className="cursor-pointer"
        >
          Home
        </UnderlineToBackground>
        <UnderlineToBackground
          targetTextColor="#000"
          className="cursor-pointer"
        >
          Projects
        </UnderlineToBackground>
        <UnderlineToBackground
          targetTextColor="#000"
          className="cursor-pointer"
        >
          Certificates
        </UnderlineToBackground>
        <UnderlineToBackground
          targetTextColor="#000"
          className="cursor-pointer"
        >
          Skills
        </UnderlineToBackground>
        <UnderlineToBackground
          targetTextColor="#000"
          className="cursor-pointer"
        >
          Contact
        </UnderlineToBackground>
      </div>
    </nav>
  );
}
