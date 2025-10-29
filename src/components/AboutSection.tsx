"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp, Shield, Calendar, Heart, FileCheck, Trophy, CheckCircle, Star, Target, ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="about-section py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-licBlue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-licGold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <Badge className="bg-licBlue/10 text-licBlue hover:bg-licBlue/20 mb-4 text-sm px-4 py-1 transition-all duration-300 hover:scale-105">
            {t('about.badge')}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-licBlue to-gray-900 bg-clip-text text-transparent">
            {t('about.title')} <span className="text-licBlue">{t('about.titleAccent')}</span> {t('about.titleEnd')}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="relative group animate-fade-in-left">
            {/* Decorative border elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-licBlue to-licGold rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute -right-6 -bottom-6 w-full h-full bg-gradient-to-br from-licBlue/10 to-licGold/10 rounded-2xl transition-all duration-300 group-hover:-right-8 group-hover:-bottom-8"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/cover-photo.jpg"
                alt="Indra Prakash with LIC officials"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-right">
            <div className="inline-block">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-licBlue to-licGold bg-clip-text text-transparent">
                {t('about.agentName')}
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-licBlue to-licGold rounded-full"></div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('about.description')}
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-licBlue/20 transition-all duration-300 group/item">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-licBlue to-licBlue/80 flex items-center justify-center text-white shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{t('about.irdaCertified')}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{t('about.irdaDescription')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-licBlue/20 transition-all duration-300 group/item">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-licGold to-licGold/80 flex items-center justify-center text-white shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{t('about.zmClub')}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{t('about.zmClubDescription')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-licBlue/20 transition-all duration-300 group/item">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{t('about.trustedClients')}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{t('about.trustedClientsDescription')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-licBlue/20 transition-all duration-300 group/item">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{t('about.experience')}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{t('about.experienceDescription')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="relative mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Track Record of <span className="text-licBlue">Excellence</span>
            </h3>
            <p className="text-gray-600">Proven results that speak for themselves</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="achievement-card group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-licBlue/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br from-red-500 to-red-700 bg-clip-text text-transparent">
                    70+
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{t('about.deathClaims')}</h4>
                  <p className="text-gray-600 leading-relaxed">{t('about.deathClaimsDescription')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="achievement-card group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-licBlue/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-licBlue/5 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-licBlue to-blue-700 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br from-licBlue to-blue-700 bg-clip-text text-transparent">
                    700+
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{t('about.freeServices')}</h4>
                  <p className="text-gray-600 leading-relaxed">{t('about.freeServicesDescription')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="achievement-card group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-licBlue/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-licGold/5 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-licGold to-yellow-600 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileCheck className="h-8 w-8" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br from-licGold to-yellow-600 bg-clip-text text-transparent">
                    42+
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{t('about.maturityClaims')}</h4>
                  <p className="text-gray-600 leading-relaxed">{t('about.maturityClaimsDescription')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {t('about.whyChooseMe')}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('about.whyChooseMeDesc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">{t('about.personalizedService')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{t('about.personalizedServiceDesc')}</p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">{t('about.quickClaims')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{t('about.quickClaimsDesc')}</p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">{t('about.lifetimeSupport')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{t('about.lifetimeSupportDesc')}</p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">{t('about.transparentAdvice')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{t('about.transparentAdviceDesc')}</p>
            </div>
          </div>
        </div>

        {/* Mission and Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission Statement */}
          <div className="relative">
            <Card className="h-full border-2 border-licBlue/20 shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-licBlue/5 rounded-full blur-3xl"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-licBlue to-blue-700 flex items-center justify-center shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('about.myMission')}</h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-licBlue to-licGold rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('about.missionStatement')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="relative">
            <Card className="h-full border-2 border-licGold/20 shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-licGold/5 rounded-full blur-3xl"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-licGold to-yellow-600 flex items-center justify-center shrink-0">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('about.myValues')}</h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-licGold to-licBlue rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-licBlue mt-2 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">{t('about.integrity')}</h4>
                      <p className="text-gray-600 text-sm">{t('about.integrityDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-licGold mt-2 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">{t('about.clientFirst')}</h4>
                      <p className="text-gray-600 text-sm">{t('about.clientFirstDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-licBlue mt-2 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">{t('about.excellence')}</h4>
                      <p className="text-gray-600 text-sm">{t('about.excellenceDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-licGold mt-2 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">{t('about.reliability')}</h4>
                      <p className="text-gray-600 text-sm">{t('about.reliabilityDesc')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Professional Journey Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {t('about.myJourney')}
            </h3>
            <p className="text-gray-600">{t('about.journeyDesc')}</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-licBlue via-licGold to-green-500 hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative flex items-center justify-between md:justify-start gap-8">
                <div className="flex-1 md:text-right md:pr-8">
                  <div className="inline-block bg-white p-6 rounded-xl shadow-lg border-2 border-licBlue/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4 md:flex-row-reverse">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-licBlue to-blue-700 flex items-center justify-center shrink-0">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="text-licBlue font-bold text-sm">{t('about.startedYear')}</span>
                        <h4 className="font-bold text-lg text-gray-900 mt-1">{t('about.started')}</h4>
                        <p className="text-gray-600 text-sm mt-2">{t('about.startedDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-licBlue border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 md:pl-8"></div>
              </div>

              {/* Item 2 */}
              <div className="relative flex items-center justify-between md:justify-end gap-8">
                <div className="flex-1 md:pr-8"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-licGold border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 md:pl-8">
                  <div className="inline-block bg-white p-6 rounded-xl shadow-lg border-2 border-licGold/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-licGold to-yellow-600 flex items-center justify-center shrink-0">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="text-licGold font-bold text-sm">{t('about.zmYear')}</span>
                        <h4 className="font-bold text-lg text-gray-900 mt-1">{t('about.zmAchievement')}</h4>
                        <p className="text-gray-600 text-sm mt-2">{t('about.zmAchievementDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex items-center justify-between md:justify-start gap-8">
                <div className="flex-1 md:text-right md:pr-8">
                  <div className="inline-block bg-white p-6 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4 md:flex-row-reverse">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shrink-0">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="text-green-600 font-bold text-sm">{t('about.milestoneYear')}</span>
                        <h4 className="font-bold text-lg text-gray-900 mt-1">{t('about.milestone')}</h4>
                        <p className="text-gray-600 text-sm mt-2">{t('about.milestoneDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 md:pl-8"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications and Specializations */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="border-2 border-licBlue/20 shadow-lg hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-licBlue to-blue-700 flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('about.certifications')}</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-licBlue/5 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-licBlue mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t('about.irdaLicense')}</h4>
                    <p className="text-gray-600 text-sm">{t('about.irdaLicenseNo')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-licBlue/5 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-licBlue mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t('about.licAgent')}</h4>
                    <p className="text-gray-600 text-sm">{t('about.licBranch')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specializations */}
          <Card className="border-2 border-licGold/20 shadow-lg hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-licGold to-yellow-600 flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('about.specializations')}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-licGold/5 rounded-lg hover:bg-licGold/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-licGold shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('about.spec1')}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-licGold/5 rounded-lg hover:bg-licGold/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-licGold shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('about.spec2')}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-licGold/5 rounded-lg hover:bg-licGold/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-licGold shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('about.spec3')}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-licGold/5 rounded-lg hover:bg-licGold/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-licGold shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('about.spec4')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="relative">
          <Card className="border-2 border-licBlue/30 shadow-2xl overflow-hidden bg-gradient-to-br from-licBlue/5 via-white to-licGold/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-licBlue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-licGold/10 rounded-full blur-3xl"></div>
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-licBlue to-licGold mb-6 shadow-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t('about.contactCTA')}
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  {t('about.whyChooseMeDesc')}
                </p>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-licBlue to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {t('about.contactCTABtn')}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
