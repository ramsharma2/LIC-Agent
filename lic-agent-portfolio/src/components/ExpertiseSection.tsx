"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ShieldCheck, FileCheck, PiggyBank, Calculator } from "lucide-react";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-licBlue/10 text-licBlue hover:bg-licBlue/20 mb-4">
            My Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional <span className="text-licBlue">Knowledge & Skills</span>
          </h2>
          <p className="text-gray-600 text-lg">
            With years of experience in the insurance industry, I have developed expertise in various aspects of life insurance planning and policy management.
          </p>
        </div>

        <Tabs defaultValue="financial" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="financial" className="data-[state=active]:bg-licBlue data-[state=active]:text-white">
              <Briefcase className="h-4 w-4 mr-2 md:mr-3" />
              <span className="hidden md:inline">Financial Planning</span>
              <span className="md:hidden">Financial</span>
            </TabsTrigger>
            <TabsTrigger value="insurance" className="data-[state=active]:bg-licBlue data-[state=active]:text-white">
              <ShieldCheck className="h-4 w-4 mr-2 md:mr-3" />
              <span className="hidden md:inline">Insurance Solutions</span>
              <span className="md:hidden">Insurance</span>
            </TabsTrigger>
            <TabsTrigger value="service" className="data-[state=active]:bg-licBlue data-[state=active]:text-white">
              <FileCheck className="h-4 w-4 mr-2 md:mr-3" />
              <span className="hidden md:inline">Policy Services</span>
              <span className="md:hidden">Services</span>
            </TabsTrigger>
            <TabsTrigger value="tax" className="data-[state=active]:bg-licBlue data-[state=active]:text-white">
              <Calculator className="h-4 w-4 mr-2 md:mr-3" />
              <span className="hidden md:inline">Tax Planning</span>
              <span className="md:hidden">Tax</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="financial" className="p-6 bg-gray-50 rounded-lg shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-licBlue">Financial Needs Analysis</h3>
                <p className="text-gray-700 mb-4">
                  I conduct a comprehensive financial needs analysis to understand your current financial situation and future goals.
                </p>
                <h4 className="font-semibold mb-2">My Process:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Detailed assessment of current financial status</li>
                  <li>Analysis of future financial goals and objectives</li>
                  <li>Identification of potential financial risks</li>
                  <li>Calculation of insurance coverage requirements</li>
                  <li>Development of personalized financial plan</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-licBlue">Specialized Planning</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <PiggyBank className="h-5 w-5 text-licBlue mt-1" />
                    <div>
                      <h4 className="font-semibold">Retirement Planning</h4>
                      <p className="text-gray-600 text-sm">I help clients plan for a comfortable retirement through pension plans and annuities that provide regular income post-retirement.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-licBlue mt-1" />
                    <div>
                      <h4 className="font-semibold">Child Education Planning</h4>
                      <p className="text-gray-600 text-sm">I provide strategies to secure your children's higher education through policies specifically designed for education expenses.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-licBlue mt-1" />
                    <div>
                      <h4 className="font-semibold">Family Protection Planning</h4>
                      <p className="text-gray-600 text-sm">I help ensure your family's financial security in case of unfortunate events through comprehensive life coverage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="insurance" className="p-6 bg-gray-50 rounded-lg shadow-inner">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-licBlue">Product Knowledge</h3>
              <p className="text-gray-700 mb-4">
                With extensive experience in the life insurance industry, I have in-depth knowledge of various LIC products and can recommend the best options based on your specific needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-licBlue mb-2">Term Insurance Plans</h4>
                  <p className="text-gray-600 text-sm mb-3">Pure protection plans offering high coverage at affordable premiums.</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>Anmol Jeevan</li>
                    <li>Tech Term</li>
                    <li>E-Term</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-licBlue mb-2">Endowment Plans</h4>
                  <p className="text-gray-600 text-sm mb-3">Combination of insurance protection and savings with guaranteed returns.</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>Jeevan Anand</li>
                    <li>Jeevan Labh</li>
                    <li>Endowment Plus</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-licBlue mb-2">ULIP Plans</h4>
                  <p className="text-gray-600 text-sm mb-3">Market-linked insurance plans offering both protection and investment opportunities.</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>SIIP</li>
                    <li>Nivesh Plus</li>
                    <li>Market Plus</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-licBlue mb-2">Pension Plans</h4>
                  <p className="text-gray-600 text-sm mb-3">Plans designed to provide regular income during retirement years.</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>Jeevan Akshay</li>
                    <li>New Jeevan Nidhi</li>
                    <li>Vaya Vandana Yojana</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="service" className="p-6 bg-gray-50 rounded-lg shadow-inner">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-licBlue">Policy Service Expertise</h3>
              <p className="text-gray-700 mb-4">
                I provide comprehensive policy services to ensure your insurance policies remain relevant and up-to-date according to your changing needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-licBlue mb-2">Death Claim Settlement</h4>
                    <p className="text-gray-600 text-sm">Assisted in settling 70+ death claims with quick processing time (15-30 days).</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-licBlue mb-2">Policy Revivals</h4>
                    <p className="text-gray-600 text-sm">Helped 25+ clients revive their lapsed policies to maintain continuity of benefits.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-licBlue mb-2">Maturity Claim Processing</h4>
                    <p className="text-gray-600 text-sm">Successfully processed 42+ maturity claims ensuring timely payouts to clients.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-licBlue mb-2">Premium Payment Reminders</h4>
                    <p className="text-gray-600 text-sm">Provide timely premium payment reminders to ensure policies remain active.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-licBlue mb-2">Policy Modifications</h4>
                    <p className="text-gray-600 text-sm">Assist with nominee changes, address updates, and mode changes to keep policies current.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-licBlue mb-2">Policy Loans</h4>
                    <p className="text-gray-600 text-sm">Help clients access policy loans when needed for financial emergencies.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tax" className="p-6 bg-gray-50 rounded-lg shadow-inner">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-licBlue">Tax Planning Knowledge</h3>
              <p className="text-gray-700 mb-4">
                I help clients optimize their tax savings through strategic insurance investments while ensuring adequate protection coverage.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Tax Benefits Under Section 80C</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Life insurance premiums qualify for tax deduction under Section 80C of the Income Tax Act, up to ₹1.5 lakh annually.
                  </p>

                  <h4 className="font-semibold mb-3">Tax-Free Maturity Benefits</h4>
                  <p className="text-gray-600 text-sm">
                    Maturity proceeds from life insurance policies are tax-free under Section 10(10D) if the premium is less than 10% of the sum assured.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-licBlue mb-3">Tax Planning Strategies</h4>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>
                      <span className="font-medium">Optimal Premium Allocation</span>
                      <p className="text-sm mt-1">Strategic distribution of premiums across different family members to maximize tax benefits.</p>
                    </li>
                    <li>
                      <span className="font-medium">Premium Payment Frequency</span>
                      <p className="text-sm mt-1">Advising on the best premium payment mode (annual, half-yearly, quarterly) for tax optimization.</p>
                    </li>
                    <li>
                      <span className="font-medium">Policy Combination Strategy</span>
                      <p className="text-sm mt-1">Combining different policy types to balance tax benefits, protection, and returns.</p>
                    </li>
                    <li>
                      <span className="font-medium">Health Insurance Tax Benefits</span>
                      <p className="text-sm mt-1">Additional tax benefits through health insurance premiums under Section 80D.</p>
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
