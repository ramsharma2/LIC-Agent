"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp, Shield, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="about-section py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-licBlue/10 text-licBlue hover:bg-licBlue/20 mb-4">{t('about.badge')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('about.title')} <span className="text-licBlue">{t('about.titleAccent')}</span> {t('about.titleEnd')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -right-4 -bottom-4 w-full h-full bg-licBlue/10 rounded-lg"></div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/cover-photo.jpg"
                alt="Indra Prakash Sharma with LIC officials"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">{t('about.agentName')}</h3>
            <p className="text-gray-700 mb-6">
              {t('about.description')}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-licBlue/10 flex items-center justify-center text-licBlue shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{t('about.irdaCertified')}</h4>
                  <p className="text-gray-600 text-sm">{t('about.irdaDescription')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-licBlue/10 flex items-center justify-center text-licBlue shrink-0">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{t('about.zmClub')}</h4>
                  <p className="text-gray-600 text-sm">{t('about.zmClubDescription')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-licBlue/10 flex items-center justify-center text-licBlue shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{t('about.trustedClients')}</h4>
                  <p className="text-gray-600 text-sm">{t('about.trustedClientsDescription')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-licBlue/10 flex items-center justify-center text-licBlue shrink-0">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{t('about.experience')}</h4>
                  <p className="text-gray-600 text-sm">{t('about.experienceDescription')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="achievement-card">
            <CardContent className="p-0">
              <div className="text-center">
                <div className="text-5xl font-bold mb-3 text-licBlue">70+</div>
                <h4 className="text-xl font-semibold mb-2">{t('about.deathClaims')}</h4>
                <p className="text-gray-600">{t('about.deathClaimsDescription')}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="achievement-card">
            <CardContent className="p-0">
              <div className="text-center">
                <div className="text-5xl font-bold mb-3 text-licBlue">700+</div>
                <h4 className="text-xl font-semibold mb-2">{t('about.freeServices')}</h4>
                <p className="text-gray-600">{t('about.freeServicesDescription')}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="achievement-card">
            <CardContent className="p-0">
              <div className="text-center">
                <div className="text-5xl font-bold mb-3 text-licBlue">42+</div>
                <h4 className="text-xl font-semibold mb-2">{t('about.maturityClaims')}</h4>
                <p className="text-gray-600">{t('about.maturityClaimsDescription')}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
