"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare, Calendar, MessageCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-section pt-28 pb-16 md:pt-32 md:pb-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-licDarkBlue to-licBlue opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Secure Your Future with Expert <span className="gold-accent">Life Insurance</span> Planning
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-100">
              Indra Prakash Sharma, authorized LIC agent with over 2 years of experience helping families secure their financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-licGold hover:bg-licGold/90 text-gray-900 font-semibold">
                <Link href="#services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="#contact">
                  <Phone className="mr-2 h-4 w-4" /> Contact Me
                </Link>
              </Button>
            </div>

            <div className="mt-10">
              <div className="flex items-center space-x-4 mb-2">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-licGold font-bold">✓</span>
                </div>
                <p className="text-gray-100">LIC ZM Club Member</p>
              </div>
              <div className="flex items-center space-x-4 mb-2">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-licGold font-bold">✓</span>
                </div>
                <p className="text-gray-100">IRDA Certified</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-licGold font-bold">✓</span>
                </div>
                <p className="text-gray-100">1400+ Policies Sold</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-licGold/60 blur-md" />
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/images/agent-photo.jpg"
                  alt="Indra Prakash Sharma - LIC Agent"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contact buttons below profile picture */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                  <a
                    href="https://api.whatsapp.com/send/?phone=917389848133&text=Hello%20Indra%20Prakash%20Sharma%20-%20I%20would%20like%20information%20about%20LIC%20policies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Me
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-licBlue hover:bg-licBlue/90 text-white rounded-full">
                  <a
                    href="https://forms.gle/MCjLEGK1wdtDZpnu5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Calendar className="h-4 w-4" /> Book Appointment
                  </a>
                </Button>
              </div>

              <div className="absolute -bottom-2 -right-2 bg-white text-gray-900 text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
                <Link href="#contact" className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" /> Let's Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
