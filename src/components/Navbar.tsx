import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { CodeIcon, Menu } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DashboardBtn";
import InterviewerButton from "./InterviewerButton";
import { Button } from "./ui/button";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-xl sm:text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <CodeIcon className="size-6 sm:size-8 text-emerald-500" />
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Codivio
          </span>
        </Link>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <InterviewerButton />
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 ml-auto">
            <ModeToggle />
            <UserButton />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b p-4 space-y-4">
              <div className="flex flex-col space-y-4">
                <InterviewerButton />
                <DasboardBtn />
              </div>
            </div>
          )}
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;