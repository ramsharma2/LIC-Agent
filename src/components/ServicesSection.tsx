"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Heart, 
  TrendingUp, 
  Users, 
  Home, 
  Briefcase, 
  PiggyBank, 
  FileCheck, 
  FileHeart, 
  Banknote,
  GraduationCap,
  BriefcaseMedical,
  UserPlus
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Heart className="h-10 w-10" />,
      title: t('services.lifeInsurance'),
      description: t('services.lifeInsuranceDesc'),
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: t('services.childEducation'),
      description: t('services.childEducationDesc'),
    },
    {
      icon: <BriefcaseMedical className="h-10 w-10" />,
      title: t('services.healthInsurance'),
      description: t('services.healthInsuranceDesc'),
    },
    {
      icon: <PiggyBank className="h-10 w-10" />,
      title: t('services.retirementPlanning'),
      description: t('services.retirementPlanningDesc'),
    },
    {
      icon: <Banknote className="h-10 w-10" />,
      title: t('services.taxPlanning'),
      description: t('services.taxPlanningDesc'),
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: t('services.mortgageProtection'),
      description: t('services.mortgageProtectionDesc'),
    },
  ];

  const policyServices = [
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: t('services.nomineeChanges'),
      description: t('services.nomineeChangesDesc'),
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: t('services.policyRevival'),
      description: t('services.policyRevivalDesc'),
    },
    {
      icon: <FileHeart className="h-6 w-6" />,
      title: t('services.deathClaims'),
      description: t('services.deathClaimsDesc'),
    },
  ];

  return (
    <section id="services" className="services-section py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-licBlue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-licGold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <Badge className="bg-licGold/10 text-licGold hover:bg-licGold/20 mb-4 px-4 py-1 text-sm transition-all duration-300 hover:scale-105">
            {t('services.badge')}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('services.title')} <span className="bg-gradient-to-r from-licBlue to-blue-700 bg-clip-text text-transparent">{t('services.subtitleAccent')}</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-licBlue/20 h-full overflow-hidden hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-licBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="pt-8 pb-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-licBlue to-blue-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-licGold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-licBlue/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {t('services.additionalServices')}
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-licBlue to-licGold rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {policyServices.map((service, index) => (
                <div 
                  key={service.title} 
                  className="group flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-licBlue/5 to-transparent border border-gray-100 hover:border-licBlue/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-licBlue to-blue-700 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-licBlue/5 via-licGold/5 to-licBlue/5 rounded-xl border-l-4 border-licBlue">
              <p className="text-gray-700 text-lg italic leading-relaxed text-center">
                "{t('services.quote')}"
              </p>
              <p className="font-bold text-licBlue mt-3 text-center text-lg">
                - {t('services.agentName')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
