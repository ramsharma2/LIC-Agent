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
    <section id="services" className="services-section py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-licGold/10 text-licGold hover:bg-licGold/20 mb-4">
            {t('services.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('services.title')} <span className="text-licBlue">{t('services.titleAccent')}</span>
          </h2>
          <p className="text-gray-600 text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-licBlue h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="text-licBlue mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">{t('services.additionalServices')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {policyServices.map((service) => (
              <div key={service.title} className="flex items-start gap-4 p-4 rounded-lg bg-licBlue/5">
                <div className="text-licBlue">{service.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-700 italic">
              {t('services.quote')}
            </p>
            <p className="font-semibold mt-2">- {t('services.agentName')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
