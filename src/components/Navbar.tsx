"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.expertise'), href: "#expertise" },
    { name: t('nav.testimonials'), href: "#testimonials" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/lic-logo.png"
            alt="LIC Logo"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-licBlue">{t('nav.agentName')}</span>
            <span className="text-sm text-gray-600">{t('nav.agentTitle')}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-item text-gray-700"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-licBlue hover:bg-licBlue/90">
            <Link href="#contact">{t('nav.getAppointment')}</Link>
          </Button>
          <LanguageToggle />
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
                  key={link.href}
                  href={link.href}
                  className="nav-item text-lg text-gray-700"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-licBlue hover:bg-licBlue/90 w-full">
                <Link href="#contact">{t('nav.getAppointment')}</Link>
              </Button>
              <LanguageToggle />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
