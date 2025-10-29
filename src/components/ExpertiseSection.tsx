"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ShieldCheck, FileCheck, PiggyBank, Calculator } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ExpertiseSection() {
  const { t } = useLanguage();
  return (
    <section id="expertise" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-licBlue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-licGold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <Badge className="bg-licBlue/10 text-licBlue hover:bg-licBlue/20 mb-4 px-4 py-1 text-sm transition-all duration-300 hover:scale-105">
            {t('expertise.badge')}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('expertise.title')} <span className="bg-gradient-to-r from-licBlue to-blue-700 bg-clip-text text-transparent">{t('expertise.titleAccent')}</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {t('expertise.subtitle')}
          </p>
        </div>

        <Tabs defaultValue="financial" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="financial" className="data-[state=active]:bg-licBlue data-[state=active]:text-white">
              <Briefcase className="h-4 w-4 mr-2 md:mr-3" />
              <span className="hidden md:inline">{t('expertise.financialPlanning')}</span>
              <span className="md:hidden">{t('expertise.financial')}</span>
            </TabsTrigger>
            <TabsTrigger value="insurance" className="data-[state=active]:bg-licBlue data-[state=active]:text-white">
              <ShieldCheck className="h-4 w-4 mr-2 md:mr-3" />
              <span className="hidden md:inline">{t('expertise.insuranceSolutions')}</span>
              <span className="md:hidden">{t('expertise.insurance')}</span>
            </TabsTrigger>
            <TabsTrigger value="service" className="data-[state=active]:bg-licBlue data-[state=active]:text-white">
              <FileCheck className="h-4 w-4 mr-2 md:mr-3" />
              <span className="hidden md:inline">{t('expertise.policyServices')}</span>
              <span className="md:hidden">{t('expertise.services')}</span>
            </TabsTrigger>
            <TabsTrigger value="tax" className="data-[state=active]:bg-licBlue data-[state=active]:text-white">
              <Calculator className="h-4 w-4 mr-2 md:mr-3" />
              <span className="hidden md:inline">{t('expertise.taxPlanning')}</span>
              <span className="md:hidden">{t('expertise.tax')}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="financial" className="p-8 bg-white rounded-2xl shadow-xl border-2 border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-licBlue/5 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-licBlue to-blue-700 bg-clip-text text-transparent">{t('expertise.financialNeedsAnalysis')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('expertise.financialNeedsDesc')}
                </p>
                <h4 className="font-semibold mb-2">{t('expertise.myProcess')}</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>{t('expertise.processStep1')}</li>
                  <li>{t('expertise.processStep2')}</li>
                  <li>{t('expertise.processStep3')}</li>
                  <li>{t('expertise.processStep4')}</li>
                  <li>{t('expertise.processStep5')}</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-licBlue">{t('expertise.specializedPlanning')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <PiggyBank className="h-5 w-5 text-licBlue mt-1" />
                    <div>
                      <h4 className="font-semibold">{t('expertise.retirementPlanning')}</h4>
                      <p className="text-gray-600 text-sm">{t('expertise.retirementPlanningDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-licBlue mt-1" />
                    <div>
                      <h4 className="font-semibold">{t('expertise.childEducationPlanning')}</h4>
                      <p className="text-gray-600 text-sm">{t('expertise.childEducationPlanningDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-licBlue mt-1" />
                    <div>
                      <h4 className="font-semibold">{t('expertise.familyProtectionPlanning')}</h4>
                      <p className="text-gray-600 text-sm">{t('expertise.familyProtectionPlanningDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="insurance" className="p-8 bg-white rounded-2xl shadow-xl border-2 border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-licBlue/5 rounded-full blur-3xl"></div>
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-licBlue to-blue-700 bg-clip-text text-transparent">{t('expertise.productKnowledge')}</h3>
              <p className="text-gray-700 mb-4">
                {t('expertise.productKnowledgeDesc')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-licBlue mb-2">{t('expertise.termInsurance')}</h4>
                  <p className="text-gray-600 text-sm mb-3">{t('expertise.termInsuranceDesc')}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>Anmol Jeevan</li>
                    <li>Tech Term</li>
                    <li>E-Term</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-licBlue mb-2">{t('expertise.endowmentPlans')}</h4>
                  <p className="text-gray-600 text-sm mb-3">{t('expertise.endowmentPlansDesc')}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>Jeevan Anand</li>
                    <li>Jeevan Labh</li>
                    <li>Endowment Plus</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-licBlue mb-2">{t('expertise.ulipPlans')}</h4>
                  <p className="text-gray-600 text-sm mb-3">{t('expertise.ulipPlansDesc')}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>SIIP</li>
                    <li>Nivesh Plus</li>
                    <li>Market Plus</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-licBlue mb-2">{t('expertise.pensionPlans')}</h4>
                  <p className="text-gray-600 text-sm mb-3">{t('expertise.pensionPlansDesc')}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>Jeevan Akshay</li>
                    <li>New Jeevan Nidhi</li>
                    <li>Vaya Vandana Yojana</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="service" className="p-8 bg-white rounded-2xl shadow-xl border-2 border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-licBlue/5 rounded-full blur-3xl"></div>
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-licBlue to-blue-700 bg-clip-text text-transparent">{t('expertise.policyServiceExpertise')}</h3>
              <p className="text-gray-700 mb-4">
                {t('expertise.policyServiceExpertiseDesc')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-licBlue mb-2">{t('expertise.deathClaimSettlement')}</h4>
                    <p className="text-gray-600 text-sm">{t('expertise.deathClaimSettlementDesc')}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-licBlue mb-2">{t('expertise.policyRevivals')}</h4>
                    <p className="text-gray-600 text-sm">{t('expertise.policyRevivalsDesc')}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-licBlue mb-2">{t('expertise.maturityClaimProcessing')}</h4>
                    <p className="text-gray-600 text-sm">{t('expertise.maturityClaimProcessingDesc')}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-licBlue mb-2">{t('expertise.premiumPaymentReminders')}</h4>
                    <p className="text-gray-600 text-sm">{t('expertise.premiumPaymentRemindersDesc')}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-licBlue mb-2">{t('expertise.policyModifications')}</h4>
                    <p className="text-gray-600 text-sm">{t('expertise.policyModificationsDesc')}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-licBlue mb-2">{t('expertise.policyLoans')}</h4>
                    <p className="text-gray-600 text-sm">{t('expertise.policyLoansDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tax" className="p-8 bg-white rounded-2xl shadow-xl border-2 border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-licBlue/5 rounded-full blur-3xl"></div>
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-licBlue to-blue-700 bg-clip-text text-transparent">{t('expertise.taxPlanningKnowledge')}</h3>
              <p className="text-gray-700 mb-4">
                {t('expertise.taxPlanningKnowledgeDesc')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">{t('expertise.taxBenefits80C')}</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {t('expertise.taxBenefits80CDesc')}
                  </p>

                  <h4 className="font-semibold mb-3">{t('expertise.taxFreeMaturity')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('expertise.taxFreeMaturityDesc')}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-licBlue mb-3">{t('expertise.taxPlanningStrategies')}</h4>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>
                      <span className="font-medium">{t('expertise.optimalPremiumAllocation')}</span>
                      <p className="text-sm mt-1">{t('expertise.optimalPremiumAllocationDesc')}</p>
                    </li>
                    <li>
                      <span className="font-medium">{t('expertise.premiumPaymentFrequency')}</span>
                      <p className="text-sm mt-1">{t('expertise.premiumPaymentFrequencyDesc')}</p>
                    </li>
                    <li>
                      <span className="font-medium">{t('expertise.policyCombinationStrategy')}</span>
                      <p className="text-sm mt-1">{t('expertise.policyCombinationStrategyDesc')}</p>
                    </li>
                    <li>
                      <span className="font-medium">{t('expertise.healthInsuranceTaxBenefits')}</span>
                      <p className="text-sm mt-1">{t('expertise.healthInsuranceTaxBenefitsDesc')}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
