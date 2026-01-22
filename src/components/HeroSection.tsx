"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare, Calendar, MessageCircle, CheckCircle, Award, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="hero-section pt-32 pb-16 md:pt-40 md:pb-24 text-white relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-licDarkBlue via-licBlue to-blue-900" />
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-licGold/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-20 h-20 border-4 border-licGold/20 rounded-lg rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 border-4 border-white/10 rounded-full hidden lg:block"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero.title')}{' '}
              <span className="bg-gradient-to-r from-licGold to-yellow-300 bg-clip-text text-transparent">
                {t('hero.titleAccent')}
              </span>{' '}
              {t('hero.titleEnd')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-xl">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-licGold to-yellow-500 hover:from-licGold/90 hover:to-yellow-500/90 text-gray-900 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link href="#services" className="group">
                  {t('hero.exploreServices')} 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-licBlue backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-105">
                <Link href="#contact">
                  <Phone className="mr-2 h-5 w-5" /> {t('hero.contactMe')}
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="h-10 w-10 rounded-full bg-licGold flex items-center justify-center shrink-0">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <p className="text-sm font-medium">{t('hero.licZmClub')}</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <p className="text-sm font-medium">{t('hero.irdaCertified')}</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <p className="text-sm font-medium">{t('hero.policiesSold')}</p>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Glowing effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-licGold to-licBlue rounded-full blur-2xl opacity-30 animate-pulse" />
              
              {/* Profile Image */}
              <div className="relative h-72 w-72 sm:h-96 sm:w-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl backdrop-blur-sm transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/agent-photo.jpg"
                  alt="Indra Prakash - LIC Agent"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-licBlue/20 to-transparent" />
              </div>
              
              {/* Contact Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <a
                    href="https://api.whatsapp.com/send/?phone=9125467007&text=Hello%20Indra%20Prakash%20Sharma%20-%20I%20would%20like%20information%20about%20LIC%20policies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                  >
                    <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" /> 
                    {t('hero.whatsappMe')}
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-gradient-to-r from-licBlue to-blue-700 hover:from-licBlue/90 hover:to-blue-700/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <a
                    href="https://forms.gle/MCjLEGK1wdtDZpnu5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                  >
                    <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform" /> 
                    {t('hero.bookAppointment')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
