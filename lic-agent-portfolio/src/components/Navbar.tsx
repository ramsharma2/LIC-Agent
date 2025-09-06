"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Expertise", href: "#expertise" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
  { name: "Calculator", href: "#calculator" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/lic-logo.jpg"
            alt="LIC Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <h1 className="text-lg font-bold text-licDarkBlue">
              Indra Prakash Sharma
            </h1>
            <p className="text-xs text-gray-600">LIC Agent (Khalilabad Branch)</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-item text-gray-700"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-licBlue hover:bg-licBlue/90">
            <Link href="#contact">Get Appointment</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="nav-item text-lg text-gray-700"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-licBlue hover:bg-licBlue/90 w-full">
                <Link href="#contact">Get Appointment</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
